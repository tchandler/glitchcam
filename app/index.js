const canvas = document.getElementById('post-video')
const cc = canvas.getContext('2d')
var constraints = { audio: true, video: { width: 1280, height: 720 } }

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function(mediaStream) {
    var video = document.querySelector("video")
    video.srcObject = mediaStream
    video.onloadedmetadata = function(e) {
      video.play()
      start(video)
    }
  })
  .catch(function(err) {
    console.log(err.name + ": " + err.message)
  });

function start(video) {
  cc.drawImage(video, 0, 0, 1280, 720)
  requestAnimationFrame(() => start(video))
}