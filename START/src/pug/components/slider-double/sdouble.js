"use ctrict";
import Swiper, { Navigation, Pagination, EffectFade, Thumbs } from "swiper";

export const Double = ()=>{

 const swiperDoubleLow = new Swiper("#swiperDoubleLow", {
   spaceBetween: 10,
   slidesPerView: 4,
   freeMode: true,
   loop: "true",
   speed: 500,
   watchSlidesProgress: true,
   modules: [Navigation],
   navigation: {
     nextEl: ".Low-next",
     prevEl: ".Low-prev",
   },
   grabCursor: true,
 });
 const swiperDoubleTop = new Swiper("#swiperDoubleTop", {
   spaceBetween: 10,
   slidesPerView: 1,
   loop: "true",
   speed: 500,
   modules: [EffectFade, Thumbs],
   thumbs: {
     swiper: swiperDoubleLow,
   },
   grabCursor: true,
 });

}
