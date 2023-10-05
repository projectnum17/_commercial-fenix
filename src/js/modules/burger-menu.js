document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("open-menu")
  const closeBtn = document.getElementById("close-menu")
  const mobileMenu = document.getElementById("mobile-menu")
  const body = document.body

  function openMobileMenu() {
    mobileMenu.style.top = "0"
    body.classList.add("no-scroll")
  }

  function closeMobileMenu() {
    mobileMenu.style.top = "-100%"
    body.classList.remove("no-scroll")
  }
  openBtn.addEventListener("click", openMobileMenu)
  closeBtn.addEventListener("click", closeMobileMenu)
})
