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

export { Path, File };
