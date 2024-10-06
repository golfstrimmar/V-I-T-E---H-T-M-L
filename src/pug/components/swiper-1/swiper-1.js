"use ctrict";
import Swiper, { Navigation, Pagination, EffectFade } from "swiper";

export const Swiper1 = () => {
  if (document.querySelector("#swiper-1")) {
    const mySwiper = new Swiper("#swiper-1", {
      spaceBetween: 10,
      slidesPerView: 1,
      loop: "true",
      speed: 500,
      modules: [Navigation, Pagination, EffectFade],
      navigation: {
        nextEl: ".arrow-next-1",
        prevEl: ".arrow-prev-1",
      },
      pagination: {
        el: ".swiper-pagination-1",
        clickable: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      grabCursor: true,
    });
  }
};
