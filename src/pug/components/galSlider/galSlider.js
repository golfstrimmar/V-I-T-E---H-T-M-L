"use strict";
import Swiper, { Navigation, Pagination } from "swiper";

export const GalSlider = (car) => {
  const hidden = car.querySelector("._accord-hidden-js");
  const buttons = [...car.querySelectorAll("._accord-nav-js button")];
  let ActIndex = 0;
  const allBlocks = car.querySelector("._allBlocks");
  let galSwiperInstance = null;
  const ingal = [...car.querySelectorAll("li")];
  var actLi = null;
  var actLiCards = null;
  const galSlider = document.querySelector(".swiper-gal");
  let sw = galSlider.querySelector(".swiper-wrapper");
  const nextSwiper = galSlider.querySelector(".swiper");
  let imagesHTML = "";
  imagesHTML = ingal.filter((foo) => {
    return !foo.classList.contains("_allBlocks");
  });
  imagesHTML.forEach((li) => {
    const cardHTML = li.innerHTML;
    allBlocks.innerHTML += cardHTML;
  });
  let previousClass = "";

  const Slider = (actLi) => {
    if (galSwiperInstance !== null) {
      galSwiperInstance.destroy();
    }

    sw.innerHTML = null;
    actLiCards = [...actLi.querySelectorAll(".card")];
    actLiCards.forEach((card) => {
      const el = document.createElement("div");
      el.classList.add("swiper-slide");
      el.innerHTML = card.outerHTML;
      sw.append(el);
    });
    galSwiperInstance = new Swiper(nextSwiper, {
      slidesPerView: 1,
      spaceBetween: 0,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      loop: "true",
      speed: 300,
      modules: [Pagination, Navigation],
      navigation: {
        nextEl: ".arrow-prev-1",
        prevEl: ".arrow-next-1",
      },
      pagination: {
        el: ".swiper-pagination-1",
        type: "bullets",
        clickable: true,
      },
      grabCursor: true,
    });
  };
  buttons.forEach((foo) => {
    let index = buttons.indexOf(foo);
    if (foo.classList.contains("_is-active")) {
      ingal[index].classList.add("_is-active");
      hidden.classList.add("_is-active");
      hidden.style = "grid-template-rows: 1fr;";
      Slider(ingal[index]);
      ingal[index].append(galSlider);
    }
  });

  buttons.forEach((hero) => {
    var mutationObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.target.getAttribute("class") == "_is-active") {
          ActIndex = buttons.indexOf(hero);
          actLi = ingal[ActIndex];
          Slider(actLi);
          actLi.append(galSlider);
        }
      });
    });
    mutationObserver.observe(hero, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true,
    });
  });
};
