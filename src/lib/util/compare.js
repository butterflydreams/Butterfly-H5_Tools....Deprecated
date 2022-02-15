const _allowedOperators = [">", ">=", "=", "<", "<="];
const _operatorResMap = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1] };
function _ValidateOperator(o) {
  if (typeof o !== "string") {
    throw new TypeError("Invalid operator type, expected string but got " + typeof o);
  }
  if (_allowedOperators.indexOf(o) === -1) {
    throw new TypeError("Invalid operator, expected one of " + _allowedOperators.join("|"));
  }
}

//==============================
// Values Compare
//==============================
const Values = {};
Values.Compare = function (v1, v2) {
  console.log("===>To compare two values: ", v1, v2);
};

//==============================
// Strings Compare
//==============================
const Strings = {};
Strings.Compare = function (s1, s2) {
  console.log("===>To compare two strings: ", s1, s2);
};

//==============================
// Versions Compare
//==============================
const Versions = {};

Versions._semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
Versions._TryParse = function (v) {
  var n = parseInt(v, 10);
  return isNaN(n) ? v : n;
};
Versions._ForceType = function (a, b) {
  return typeof a !== typeof b ? [String(a), String(b)] : [a, b];
};
Versions._IndexOrEnd = function (str, q) {
  return str.indexOf(q) === -1 ? str.length : str.indexOf(q);
};
Versions._Split = function (v) {
  var c = v.replace(/^v/, "").replace(/\+.*$/, "");
  var patchIndex = Versions._IndexOrEnd(c, "-");
  var arr = c.substring(0, patchIndex).split(".");
  arr.push(c.substring(patchIndex + 1));
  return arr;
};
Versions._ValidateAndParse = function (v) {
  if (typeof v !== "string") {
    throw new TypeError("Invalid argument expected string");
  }
  var match = v.match(Versions._semver);
  if (!match) {
    throw new Error("Invalid argument not valid semver ('" + v + "' received)");
  }
  match.shift();
  return match;
};
Versions._CompareVersions = function (v1, v2) {
  [v1, v2].forEach(Versions._ValidateAndParse);

  var s1 = Versions._Split(v1);
  var s2 = Versions._Split(v2);

  for (var i = 0; i < Math.max(s1.length - 1, s2.length - 1); i++) {
    var n1 = parseInt(s1[i] || 0, 10);
    var n2 = parseInt(s2[i] || 0, 10);

    if (n1 > n2) return 1;
    if (n2 > n1) return -1;
  }

  var sp1 = s1[s1.length - 1];
  var sp2 = s2[s2.length - 1];

  if (sp1 && sp2) {
    var p1 = sp1.split(".").map(Versions._TryParse);
    var p2 = sp2.split(".").map(Versions._TryParse);

    for (i = 0; i < Math.max(p1.length, p2.length); i++) {
      if (p1[i] === undefined || (typeof p2[i] === "string" && typeof p1[i] === "number")) return -1;
      if (p2[i] === undefined || (typeof p1[i] === "string" && typeof p2[i] === "number")) return 1;

      if (p1[i] > p2[i]) return 1;
      if (p2[i] > p1[i]) return -1;
    }
  } else if (sp1 || sp2) {
    return sp1 ? -1 : 1;
  }

  return 0;
};
Versions._CompareStrings = function (a, b) {
  var [ap, bp] = Versions._ForceType(Versions._TryParse(a), Versions._TryParse(b));
  if (ap > bp) return 1;
  if (ap < bp) return -1;
  return 0;
};
Versions._CompareSegments = function (a, b) {
  for (var i = 0; i < Math.max(a.length, b.length); i++) {
    var r = Versions._CompareStrings(a[i] || 0, b[i] || 0);
    if (r !== 0) return r;
  }
  return 0;
};

/**
 * Applies the same ruleset used comparing version numbers and returns a boolean.
 * @param {v} version
 * @returns boolean result.
 * @example
 * Versions.Validate('1.0.0-rc.1'); // true
 * Versions.Validate('1.0-rc.1');   // false
 * Versions.Validate('foo');        // false
 */
Versions.Validate = function (v) {
  return typeof v === "string" && Versions._semver.test(v);
};

/**
 * The alternative compare function accepts an operator which will be more familiar to humans.
 * @param {v1} version1.
 * @param {v2} version2.
 * @param {o} operator.
 * @returns boolean result.
 * @example
 * Versions.Compare('10.1.8', '10.0.4', '>');  // true
 * Versions.Compare('10.0.1', '10.0.1', '=');  // true
 * Versions.Compare('10.1.1', '10.2.2', '<');  // true
 * Versions.Compare('10.1.1', '10.2.2', '<='); // true
 * Versions.Compare('10.1.1', '10.2.2', '>='); // false
 * Versions.Compare('10.1.1', '10.2.2'); // -1
 * Versions.Compare('10.1', '10.1'); // 0
 * Versions.Compare('10.1', '10.1.0'); // 0
 * Versions.Compare('10.1.1', '10.0.1'); // 1
 */
Versions.Compare = function (v1, v2, o) {
  if (!!o) {
    // Validate operator
    _ValidateOperator(o);
    // Since result of compareVersions can only be -1 or 0 or 1
    // A simple map can be used to replace switch
    var res = Versions._CompareVersions(v1, v2);
    return _operatorResMap[o].indexOf(res) > -1;
  } else {
    // Return reuslt: (1)-v1>v2[greater]; (0)-v1=v2[equal]; (-1)-v2<v2[less].
    return Versions._CompareVersions(v1, v2);
  }
};

/**
 * The satisfies function accepts a range to compare.
 * @param {*} version.
 * @param {*} range.
 * @returns boolean result.
 * @example
 * Versions.Satisfies('10.0.1', '~10.0.0');  // true
 * Versions.Satisfies('10.1.0', '~10.0.0');  // false
 * Versions.Satisfies('10.1.2', '^10.0.0');  // true
 * Versions.Satisfies('11.0.0', '^10.0.0');  // false
 * Versions.Satisfies('10.1.8', '>10.0.4');  // true
 * Versions.Satisfies('10.0.1', '=10.0.1');  // true
 * Versions.Satisfies('10.1.1', '<10.2.2');  // true
 * Versions.Satisfies('10.1.1', '<=10.2.2'); // true
 * Versions.Satisfies('10.1.1', '>=10.2.2'); // false
 */
Versions.Satisfies = function (v, r) {
  // If no range operator then "="
  var match = r.match(/^([<>=~^]+)/);
  var op = match ? match[1] : "=";

  // If gt/lt/eq then operator compare
  if (op !== "^" && op !== "~") return Versions.Compare(v, r, op);

  // Else range of either "~" or "^" is assumed
  var [v1, v2, v3] = Versions._ValidateAndParse(v);
  var [m1, m2, m3] = Versions._ValidateAndParse(r);
  if (Versions._CompareStrings(v1, m1) !== 0) return false;
  if (op === "^") {
    return Versions._CompareSegments([v2, v3], [m2, m3]) >= 0;
  }
  if (Versions._CompareStrings(v2, m2) !== 0) return false;
  return Versions._CompareStrings(v3, m3) >= 0;
};

export { Values, Strings, Versions };
