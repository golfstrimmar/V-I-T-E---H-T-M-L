"use ctrict";
import Swiper, { Pagination } from "swiper";

export const Feed = () => {
  const FeedSwip = new Swiper("#feedSwip", {
    speed: 500,
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination-feed",
      clickable: true,
    },
    breakpoints: {
      slidesPerView: 1,
      spaceBetween: 10,
      1034: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 4,
      },
      1253: {
        spaceBetween: 62,
        centeredSlides: true,
        slidesPerView: 4,
      },
    },
    grabCursor: true,
    loop: true,
    loopFillGroupWithBlank: true,
    slideToClickedSlide: true,
    on: {
      slideChange: function () {
        const isSmallScreen = window.matchMedia("(max-width: 1034px)").matches;
        if (!isSmallScreen) {
          const activeIndex = this.activeIndex;
          const slides = this.slides;
          const middleSlides = slides.slice(activeIndex - 1, activeIndex + 1);

          middleSlides.forEach((slide) => {
            slide.classList.add("_active-slide");
          });

          slides.forEach((slide) => {
            if (!middleSlides.includes(slide)) {
              slide.classList.remove("_active-slide");
            }
          });
        }
      },
    },
  });
};
