const ua = window.navigator.userAgent.toLowerCase();

//==============================
// Screen Type
//==============================
// const isMobile = true;
// const isTablet = true;
// const isPC = true;

//==============================
// Operating System
//==============================
const isAndroid = /android[-\/ ]?([\w\.]*)/i.test(ua);
const isiOS = /ip[honed]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i.test(ua);
const isiPadOS = /ipad\b(?:.*os ([\w]+) like mac|; opera)/i.test(ua);
const isMacintosh = /(macintosh|mac_powerpc\b)(?!.+haiku)/i.test(ua);
const isWindows = /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i.test(ua);

//==============================
// OS Version
//==============================
const androidVersion = (function () {
  let v = "0.0.0";
  if (isAndroid == true) {
    let m = ua.match(/android[-\/ ]?([\w\.]*)/i);
    if (!!m && !!m[1]) {
      v = m[1];
    }
  }
  return v;
})();
const iOSVersion = (function () {
  let v = "0.0.0";
  if (isiOS == true) {
    let m = ua.match(/ip[honed]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i);
    if (!!m && !!m[1]) {
      v = m[1].replace(/_/g, ".");
    }
  }
  return v;
})();
const iPadOSVersion = (function () {
  let v = "0.0.0";
  if (isiPadOS == true) {
    let m = ua.match(/ipad\b(?:.*os ([\w]+) like mac|; opera)/i);
    if (!!m && !!m[1]) {
      v = m[1].replace(/_/g, ".");
    }
  }
  return v;
})();
const OSVersion = (function () {
  return isAndroid == true ? androidVersion : isiOS == true ? iOSVersion : isiPadOS == true ? iPadOSVersion : "0.0.0";
})();

//==============================
// OS Name
//==============================
const OSName = (function () {
  return isAndroid == true ? "Android" : isiOS == true ? "iOS" : isiPadOS == true ? "iPadOS" : "null";
})();

//==============================
// Browser Name
//==============================

//==============================
// Hardware Device
//==============================

export default {
  isAndroid,
  isiOS,
  isiPadOS,
  isMacintosh,
  isWindows,

  androidVersion,
  iOSVersion,
  iPadOSVersion,
  OSVersion,

  OSName
};
