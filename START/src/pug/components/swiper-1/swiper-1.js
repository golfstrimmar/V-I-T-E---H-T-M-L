"use ctrict";
import Swiper, { Navigation, Pagination, EffectFade } from "swiper";

export const Swiper1 =()=>{
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
export const Swiper1licens = () => {
  const mySwiperlicens = new Swiper("#swiper-1licens", {
    spaceBetween: 48,
    slidesPerView: 4,
    loop: "true",
    speed: 500,
    grabCursor: true,
  });
};
export const Swiperdoctors1 = () => {
  const mySwiperdoctors1 = new Swiper("#swiper-doctors1", {
    spaceBetween: 48,
    slidesPerView: 6,
    loop: "true",
    speed: 500,
    grabCursor: true,
  });
};
export const Swiperdoctors2 = () => {
  const mySwiperdoctors2 = new Swiper("#swiper-doctors2", {
    spaceBetween: 48,
    slidesPerView: 6,
    loop: "true",
    speed: 500,
    grabCursor: true,
  });
};
export const CallBack = () => {
  const myswiperCallBack = new Swiper("#swiper-callback", {
    spaceBetween: 48,
    navigation: {
      nextEl: ".arrow-callback-prev",
      prevEl: ".arrow-callback-next",
    },
    modules: [Navigation],
    slidesPerView: 2,
    loop: "true",
    speed: 500,
    grabCursor: true,
  });
};