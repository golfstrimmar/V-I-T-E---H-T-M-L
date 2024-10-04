"use ctrict";
import Swiper, { Navigation, Pagination } from "swiper";

export const bunnerSwiper = () => {
  if (document.querySelector("#bunner-slider")) {
    const paginationTexts = ["Lorem Ipsum", "Dolorem ", "apset"];

    const bunnerSwiper = new Swiper(".slider-bunner-js", {
      slidesPerView: 1,
      loop: "true",
      speed: 800,
      modules: [Navigation, Pagination],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class="${className}"><p>0${index + 1}</p>${
            paginationTexts[index]
          }</div>`;
        },
      },
      navigation: {
        nextEl: ".bunner-next",
        prevEl: ".bunner-prev",
      },
    });
  }
};
