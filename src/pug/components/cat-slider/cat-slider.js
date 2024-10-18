"use ctrict";
import Swiper, { Navigation, Pagination } from "swiper";

export const catSwiper = () => {
  if (document.querySelector("#cat-slider")) {
    const catSwiper = new Swiper("#cat-slider", {
      loop: "true",
      speed: 500,
      modules: [Navigation, Pagination],

      navigation: {
        nextEl: ".arrow-prev-1",
        prevEl: ".arrow-next-1",
      },
      pagination: {
        el: ".cat-pagination",
        clickable: true,
      },
      slidesPerView: 1,
      breakpoints: {
        1034: {
          spaceBetween: 10,
          slidesPerView: 3,
        },
        1253: {
          spaceBetween: 15,
          slidesPerView: 4,
        },
      },
      grabCursor: true,
    });
  }
};
