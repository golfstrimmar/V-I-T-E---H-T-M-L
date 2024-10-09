"use ctrict";
import Swiper, { Pagination } from "swiper";

export const Feed = () => {
  const FeedSwip = new Swiper("#feedSwip", {
    spaceBetween: 62,
    speed: 500,
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination-feed",
      clickable: true,
    },

    grabCursor: true,

    slidesPerView: 4,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    slideToClickedSlide: true,
    on: {
      slideChange: function () {
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
      },
    },
  });
};
