const Image = {};

Image.ETYPE = {
  eJPG: "jpg",
  eJPEG: "jpeg",
  ePNG: "png"
};

Image.IsImage = function (type) {
  let images = Object.values(Image.ETYPE).map((value) => {
    return value;
  });
  return images.indexOf(type.toLowerCase()) != -1;
};

Image.Resize = function (image, width, height, type) {
  let w = width || image.width;
  let h = height || image.height;
  let t = Image.IsImage(type) == true ? type : Image.ETYPE.ePNG;
  let canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, w, h);
  return canvas.toDataURL(t);
};

export { Image };
