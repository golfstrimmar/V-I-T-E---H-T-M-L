"use ctrict";
import Swiper, { Pagination } from "swiper";

export const fidback = () => {
var temp;
  var Swiperfidback = new Swiper("#fidback-1", {
    spaceBetween: 62,
    slidesPerView: 4,
    // slidesPerGroup: 2,
    initialSlide: 0,
    //  centeredSlidesBounds: true,
    //  centerInsufficientSlides: true,
    speed: 200,
    watchSlidesProgress: true,
    modules: [Pagination],
    loop: true,
    // centeredSlides: true,
    pagination: {
      el: ".swiper-pagination-fidback",
      clickable: true,
    },
    grabCursor: true,
    on: {
      init: (e) => {
        console.log("Swiperfidback");
        e.slides.forEach((item) => {
          if (item.matches(".swiper-slide-next")) {
            temp = item.nextElementSibling;
            item.classList.add("_is-active");
            temp.classList.add("_is-active");
          }
        });
      },
    },
  });

  
  Swiperfidback.on("transitionStart", (e) => {
    e.slides.forEach((item) => {
      setTimeout(() => {
        item.classList.remove("_is-active");
      }, 0);
    });
  });

  Swiperfidback.on("transitionEnd", (e) => {
    e.slides.forEach((item) => {
      if (item.matches(".swiper-slide-next")) {
        temp = item.nextElementSibling;
        item.classList.add("_is-active");
        temp.classList.add("_is-active");
        item.style.transition = ".3s";
        temp.style.transition = ".3s";
        setTimeout(() => {
          item.style.transition = "0s";
          temp.style.transition = "0s";
        }, 300);
      }
    });
  });
};
