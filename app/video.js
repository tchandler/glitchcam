const initVideo = () => {
  const constraints = { audio: false, video: { width: 1280, height: 720 } }

  return navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function(mediaStream) {
      const video = document.querySelector('video')
      video.setAttribute('autoplay', true);
      video.srcObject = mediaStream
      return new Promise(resolve => {
        video.onloadedmetadata = function() {
          video.play()
          resolve(video)
        }
      })
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message)
    });
}

export default initVideo