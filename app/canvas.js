import filters from './filters'

const makeCanvas = id => {
  let canvas = document.getElementById(id)

  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.id = id
    document.body.appendChild(canvas)
  }
  
  return canvas
}

export default class VideoCanvas {
  constructor (video, width, height) {
    this.view = makeCanvas('view')
    this.view.height = height
    this.view.width = width
    this.viewContext = this.view.getContext('2d')

    this.buffer = makeCanvas('buffer')
    this.buffer.height = height
    this.buffer.width = width
    this.buffer.style.display = 'none'
    this.bufferContext = this.buffer.getContext('2d')
    
    this.video = video

    this.width = width
    this.height = height
  }

  setPixel (imageData, index, r, g, b) {
    const a = 0.75
    const orgR = imageData[index]
    const orgG = imageData[index + 1]
    const orgB = imageData[index + 2]

    // Linear interpolation with a
    imageData[index]     = orgR + a * (r - orgR);
    imageData[index + 1] = orgG + a * (g - orgG);
    imageData[index + 2] = orgB + a * (b - orgB);
  }

  processImageData (imageData) {
    console.log(filters)
    console.log(filters.testId(7))
    return imageData
  }

  draw () {
    this.bufferContext.drawImage(this.video, 0, 0, this.width, this.height)
    const bufferImageData = this.bufferContext.getImageData(0, 0, this.width, this.height)
    const processedImageData = this.processImageData(bufferImageData)
    this.viewContext.putImageData(processedImageData, 0, 0)
  }
}
