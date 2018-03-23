import initVideo from './video'
import VideoCanvas from './canvas'

initVideo().then(video => {
  const videoCanvas = new VideoCanvas(video, video.clientWidth, video.clientHeight)
  video.style.display = 'none';
  console.log(videoCanvas)
  run(videoCanvas)
})

function run(videoCanvas) {
  videoCanvas.draw()
  requestAnimationFrame(() => run(videoCanvas))
}