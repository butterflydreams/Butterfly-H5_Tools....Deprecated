const Path = {};

const File = {};

File.Parse = function (name) {
  let data = { name: "", ext: "", base: name };
  if (!!name) {
    let strings = name.split(".");
    if (Array.isArray(strings) == true) {
      if (strings.length == 1) {
        data.ext = "";
        data.name = strings[0];
      } else {
        data.ext = strings.pop();
        data.name = strings.join(".");
      }
    }
  }
  return data;
};

// [file-saver]
File.Save = function (blob, name, opts) {
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      let evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  function corsEnabled(url) {
    let xhr = new XMLHttpRequest();
    // use sync to avoid popup blocker
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {}
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function download(url, name, opts) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function () {
      File.Save(xhr.response, name, opts);
    };
    xhr.onerror = function () {
      console.error("could not download file");
    };
    xhr.send();
  }

  let a = document.createElement("a");
  name = name || blob.name || "download";

  a.download = name;
  a.rel = "noopener"; // tabnabbing

  if (typeof blob === "string") {
    // Support regular links
    a.href = blob;
    if (a.origin !== location.origin) {
      corsEnabled(a.href) ? download(blob, name, opts) : click(a, (a.target = "_blank"));
    } else {
      click(a);
    }
  } else {
    // Support blobs
    a.href = URL.createObjectURL(blob);
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
    }, 4e4); // 40s
    setTimeout(function () {
      click(a);
    }, 0);
  }
};

export { Path, File };
