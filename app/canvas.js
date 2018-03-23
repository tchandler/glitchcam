const makeCanvas = id => {
  let canvas = document.getElementById(id);

  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = id;
    document.body.appendChild(canvas);
  }

  return canvas;
};

export default class VideoCanvas {
  constructor(video, width, height) {
    this.view = makeCanvas("view");
    this.view.height = height;
    this.view.width = width;
    this.viewContext = this.view.getContext("2d");

    this.buffer = makeCanvas("buffer");
    this.buffer.height = height;
    this.buffer.width = width;
    this.buffer.style.display = "none";
    this.bufferContext = this.buffer.getContext("2d");

    this.video = video;

    this.width = width;
    this.height = height;
  }

  procesImageData(imageData) {
    return imageData;
  }

  draw() {
    this.bufferContext.drawImage(this.video, 0, 0, this.width, this.height);
    const bufferImageData = this.bufferContext.getImageData(
      0,
      0,
      this.width,
      this.height
    );
    const processedImageData = this.procesImageData(bufferImageData);
    this.viewContext.putImageData(processedImageData, 0, 0);
  }
}
