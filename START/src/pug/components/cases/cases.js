"use ctrict";
import Swiper, { Pagination, Navigation } from "swiper";

export const CasesInit = () => {
  // ==========================================
  class contentCases {
    constructor(cell, num) {
      this.cell = cell;
      this.numberItems = num.numberItems;
      this.slider = this.cell.querySelector(".slider-cases");
      this.sliderWrapper = this.cell.querySelector(".swiper-wrapper");
      this.allcontentCases = [...cell.querySelectorAll("._accord-content-js ")];
      this.content = {};
      this.temp = [];
      this.CaseSrc = "";
      this.StoreElement = {};
    }

    createSlide(StoreElement) {
      var tempSlide = document.createElement("li");
      tempSlide.classList.add("slider__item", "swiper-slide");
      tempSlide.innerHTML = `<div class="imgs"><img src="${StoreElement.src}"></div>`;
      this.sliderWrapper.append(tempSlide);
    }

    start(numberItems) {
      this.allcontentCases.forEach((sell) => {
        if (sell.matches("._accord-default-js ")) {
          [...sell.querySelectorAll("img")].forEach((cell) => {
            this.CaseSrc = cell.getAttribute("src");
            this.StoreElement = {
              src: this.CaseSrc,
            };
            this.createSlide(this.StoreElement);
          });
        }
      });
      var tempSwiper = new Swiper(this.slider, {
        slidesPerView: this.numberItems,
        spaceBetween: 30,
        // slidesPerGroup: 4,
        // loop: "true",
        speed: 500,
        grabCursor: true,
        modules: [Pagination, Navigation],
        pagination: {
          el: ".swiper-pagination-cases",
          clickable: true,
        },
        navigation: {
          prevEl: ".cases-prev",
          nextEl: ".cases-next",
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
      });
      const Change = () => {
        setTimeout(() => {
          this.sliderWrapper.innerHTML = "";
          this.allcontentCases.forEach((sell) => {
            if (sell.matches("._is-active")) {
              [...sell.querySelectorAll("img")].forEach((cell) => {
                this.CaseSrc = cell.getAttribute("src");
                this.StoreElement = {
                  src: this.CaseSrc,
                };
                this.createSlide(this.StoreElement);
              });
            }
          });
          tempSwiper.slideTo(0, 0);
        }, 200);
      };
      document.addEventListener("click", (e) => {
        if (
          e.target.closest("._accord-cases-js") &&
          e.target.closest("._accord-nav-js button")
        ) {
          Change();
        }

        if (!e.target.closest("._accord-js")) {
          var def = this.cell.querySelector("._accord-default-js");
          if (!def.matches("._is-active")) {
            Change();
          }
        }

        if (
          e.target.closest("._accord-js") &&
          e.target.closest("._accord-js") !== this.cell &&
          e.target.closest("._accord-nav-js button")
        ) {
          Change();
        }
      });
    }
  }


    if (document.querySelector("#accord--cases1 ")) {
      const accordCases1 = document.querySelector("#accord--cases1 ");
      const accordCases1Act = new contentCases(accordCases1, {
        numberItems: 2,
      });
      accordCases1Act.start();
    }
    if (document.querySelector("#accord--cases2 ")) {
      const accordCases2 = document.querySelector("#accord--cases2 ");
      const accordCases2Act = new contentCases(accordCases2, {
        numberItems: 3,
      });
      accordCases2Act.start();
    }
};
