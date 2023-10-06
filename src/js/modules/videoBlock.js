if (document.getElementById("page1Identifier")) {
  function setupVideoPlayer() {
    var playVideoButton = document.getElementById("playVideo")
    var videoElement = document.getElementById("promoVideo")

    function showControls() {
      playVideoButton.style.display = "none"
      videoElement.controls = true
    }

    function hideControls() {
      playVideoButton.style.display = "flex"
      videoElement.controls = false
    }

    videoElement.addEventListener("click", function () {
      if (videoElement.paused) {
        videoElement.play()
        showControls()
      } else {
        videoElement.pause()
        hideControls()
      }
    })

    playVideoButton.addEventListener("click", function () {
      if (videoElement.paused) {
        videoElement.play()
        showControls()
      } else {
        videoElement.pause()
        hideControls()
      }
    })

    hideControls()
  }

  setupVideoPlayer()

  document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.querySelector(".read-more")
    const textBlock = document.querySelector(".text-block")
    const contentBlock = document.querySelector(".text")

    readMoreButton.addEventListener("click", function () {
      textBlock.classList.toggle("active")
      contentBlock.classList.toggle("active")
      readMoreButton.classList.toggle("active")

      if (textBlock.classList.contains("active")) {
        // Если есть, меняем надпись кнопки
        readMoreButton.textContent = "Read less"
      } else {
        // Если нет, возвращаем исходную надпись кнопки
        readMoreButton.textContent = "Read more"
      }
    })
  })
}
