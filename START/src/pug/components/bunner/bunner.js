"use ctrict";
import Swiper, { Navigation, Pagination } from "swiper";

export const bunnerSwiper = () =>{
  if (document.querySelector("#bunner-slider")) {
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
    navigation: {
      prevEl: ".bunner-slider__arrow--prev",
      nextEl: ".bunner-slider__arrow--next",
    },
  });
  const pagination = document.querySelector("#swiper-pagination-js");
  const paginationBullets = [...pagination.querySelectorAll('span')];
  const paginationDom = document.querySelector(
      "#bunner-slider .swiper-pagination"
    );
  const paginationBulletsDom = [...paginationDom.querySelectorAll("span")];
  for (let i = 0; i < paginationBullets.length; ++i) {
    paginationBulletsDom[i].innerHTML = paginationBullets[i].innerHTML;
  }
  }
}