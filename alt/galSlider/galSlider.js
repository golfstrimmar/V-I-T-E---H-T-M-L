"use ctrict";
import Swiper, {
  Navigation,
  Pagination,
  // EffectFade,
  // EffectFlip,
  // EffectCoverflow,
} from "swiper";
export const GalSlider = () => {
    var s2 = new Swiper(".s2swiper", {
      spaceBetween: 0,
      modules: [
        Navigation,
        Pagination,
        // EffectFade,
        // EffectFlip,
        // EffectCoverflow,
      ],
      speed: 500,
      loop: true,
      slidesPerView: 1,
      slideToClickedSlide: "true",
      pagination: {
        el: ".swiper-pagination-s2",
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + index + "</span>";
        // },
      },
      navigation: {
        prevEl: ".s2-prev",
        nextEl: ".s2-next",
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      // effect: "flip",
      // flipEffect: {
      //   slideShadows: true,
      //   speed: 500,
      // },
      // effect: "coverflow",
      // coverflowEffect: {
      //   rotate: 30,
      //   slideShadows: false,
      // },
      on: {
        init: function () {
          const bullets = [
            ...document.querySelectorAll(".s2  .swiper-pagination-bullet"),
          ];
          const sliders = [...document.querySelectorAll(".s2  .slide")];
          const slidersInner = [];

          for (let i = 0; i < sliders.length; ++i) {
            let dataId = sliders[i].getAttribute("data-id");

            for (let i = 0; i < sliders.length; ++i) {
              if (sliders[i].getAttribute("data-id") == dataId) {
                slidersInner[dataId] =
                  sliders[i].querySelector(".imgs").innerHTML;
              }
            }
          }
          for (let i = 0; i < bullets.length; ++i) {
            let tempDiv = document.createElement("div");
            tempDiv.classList.add("imgs");
            tempDiv.innerHTML = slidersInner[i];
            bullets[i].append(tempDiv);
          }
        },
      },
    });

  let temp;
  let duble = [];
  if (s2) {
    s2.on("slideChangeTransitionStart", function () {
      const bullets = [
        ...document.querySelectorAll(".s2  .swiper-pagination-bullet"),
      ];
      const sliders = [...document.querySelectorAll(".s2  .slide")];
      const slidersInner = [];

      for (let i = 0; i < sliders.length; ++i) {
        let dataId = sliders[i].getAttribute("data-id");

        for (let i = 0; i < sliders.length; ++i) {
          if (sliders[i].getAttribute("data-id") == dataId) {
            slidersInner[dataId] = sliders[i].querySelector(".imgs").innerHTML;
          }
        }
      }
      for (let i = 0; i < bullets.length; ++i) {
        let tempDiv = document.createElement("div");
        tempDiv.classList.add("imgs");
        tempDiv.innerHTML = slidersInner[i];
        bullets[i].append(tempDiv);
      }
    });
  }
};
