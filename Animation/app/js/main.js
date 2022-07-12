"use strict";

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    gsap.from(".js__menu", {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 1
    });
    gsap.from(".js__main__list", {
      duration: 1,
      opacity: 0,
      y: 100,
      delay: 2.5
    });
    gsap.from(".js__social-list", {
      duration: 1,
      opacity: 0,
      y: 100,
      delay: 3
    });
    gsap.from(".js__menu__extra", {
      duration: 1,
      opacity: 0,
      y: 100,
      delay: 3
    });
  });
});
"use strict";

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    gsap.from(".js__hero__heading", {
      duration: .7,
      y: 100,
      opacity: 0
    });
    gsap.from(".js__hero__descr", {
      duration: .7,
      y: 100,
      opacity: 0,
      delay: 1
    });
    gsap.from(".js__hero__btn", {
      duration: .7,
      y: 100,
      opacity: 0
    }); // 

    gsap.from(".js__photo-one", {
      duration: .7,
      opacity: 0,
      scale: .5,
      delay: 1.5
    });
    gsap.from(".js__photo-two", {
      duration: .5,
      scale: .5,
      opacity: 0,
      delay: 2
    });
    gsap.from(".js__photo-three", {
      duration: .5,
      scale: .5,
      opacity: 0,
      delay: 2.2
    });
    gsap.from(".js__portfolio__author", {
      duration: .5,
      scale: .5,
      opacity: 0,
      delay: 2.5
    });
  });
});
"use strict";

window.addEventListener("DOMContentLoaded", function () {
  var burgerBtnEl = document.querySelector(".js__menu");
  document.querySelector(".js__header__button").addEventListener("click", function () {
    burgerBtnEl.classList.toggle("menu-open");
  });
  var closeBtnEl = document.querySelector(".js__menu");
  document.querySelector(".js__button--close").addEventListener("click", function () {
    closeBtnEl.classList.toggle("menu-open");
  });
});
//# sourceMappingURL=main.js.map
