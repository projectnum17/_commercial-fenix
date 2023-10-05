//fixed header
window.addEventListener("scroll", function () {
  var header = document.getElementById("main-header")

  if (window.pageYOffset > 1) {
    header.classList.add("header-fixed__bg")
  } else {
    header.classList.remove("header-fixed__bg")
  }
})
