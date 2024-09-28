"use strict";
import Swiper, { Scrollbar } from "swiper";

export const SwiperScroll = () => {
  var swiperScroll = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    dragable: "true",
    modules: [Scrollbar],
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
    grabCursor: true,
  });
};
