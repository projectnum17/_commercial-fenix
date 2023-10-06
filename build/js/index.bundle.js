/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 495:
/***/ (function() {

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


/***/ }),

/***/ 355:
/***/ (function() {

//fixed header
window.addEventListener("scroll", function () {
  var header = document.getElementById("main-header")

  if (window.pageYOffset > 1) {
    header.classList.add("header-fixed__bg")
  } else {
    header.classList.remove("header-fixed__bg")
  }
})


/***/ }),

/***/ 135:
/***/ (function() {

if (document.getElementById("page2Identifier")) {
  const items = document.querySelectorAll(".item-at")

  function toggleAccordion(item) {
    const title = item.querySelector(".title-at")
    const tab = item.querySelector(".tab-at")

    title.classList.toggle("active")
    tab.classList.toggle("active")

    if (title.classList.contains("active")) {
      tab.style.maxHeight = tab.scrollHeight + "px"
    } else {
      tab.style.maxHeight = null
    }
  }

  function initializeAccordion() {
    items.forEach((item) => {
      item.addEventListener("click", () => {
        toggleAccordion(item)
      })
    })
  }

  initializeAccordion()
}


/***/ }),

/***/ 743:
/***/ (function() {

if (document.getElementById("page1Identifier")) {
  const swiperJobs = new Swiper(".jobs-slider", {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
}


/***/ }),

/***/ 689:
/***/ (function() {

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


/***/ }),

/***/ 602:
/***/ (function() {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _modules_fixedHeaderMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(355);
/* harmony import */ var _modules_fixedHeaderMain__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_fixedHeaderMain__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_swiperMain_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(743);
/* harmony import */ var _modules_swiperMain_1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_swiperMain_1__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(495);
/* harmony import */ var _modules_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_videoBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(602);
/* harmony import */ var _modules_videoBlock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_videoBlock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_servicesAccordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(135);
/* harmony import */ var _modules_servicesAccordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_servicesAccordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_swiperNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var _modules_swiperNews__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_swiperNews__WEBPACK_IMPORTED_MODULE_5__);







}();
/******/ })()
;