if (document.getElementById("page1Identifier")) {
  const swiperJobs = new Swiper(".jobs-slider", {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
}
