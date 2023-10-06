if (document.getElementById("page4Identifier")) {
  const newsIntroSwiper = new Swiper(".news-item__intro", {
    loop: true,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  const newsOtherSwiper = new Swiper(".news-other-container", {
    loop: false,
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
}
