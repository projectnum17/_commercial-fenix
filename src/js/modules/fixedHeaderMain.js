//fixed header
window.addEventListener("scroll", function () {
  var header = document.getElementById("main-header")

  if (window.pageYOffset > 1) {
    header.classList.add("header-fixed__bg")
  } else {
    header.classList.remove("header-fixed__bg")
  }
})

if (document.getElementById("header-white")) {
  window.addEventListener("scroll", function () {
    var headerWhite = document.getElementById("header-white")
    var headerWhiteBtn = document.querySelector(".header-btn__white")
    var defautLogo = document.getElementById("default-logo")
    var newLogo = document.getElementById("new-logo")
    var defaultBurger = document.getElementById("default-burger")
    var newBurger = document.getElementById("new-burger")

    if (window.pageYOffset > 1) {
      //white heaeder
      headerWhite.classList.add("header-white__new")
      headerWhiteBtn.classList.add("header-btn__white-new")
      defautLogo.style.display = "none"
      newLogo.style.display = "block"

      defaultBurger.style.display = "none"
      newBurger.style.display = "block"
    } else {
      //white header
      headerWhite.classList.remove("header-white__new")
      headerWhiteBtn.classList.remove("header-btn__white-new")
      defautLogo.style.display = "block"
      newLogo.style.display = "none"

      defaultBurger.style.display = "block"
      newBurger.style.display = "none"
    }
  })
}
