"use ctrict";
import Swiper, { EffectCards } from "swiper";

export const SwiperIndexPronomen = () => {
   var swiperIndexPronomen = new Swiper("#Swiper-index-pronomen", {
     grabCursor: true,
     modules: [EffectCards],
     effect: "cards",
     cardsEffect: {
       perSlideOffset: 3,
       perSlideRotate: 1,
     },
   });
};
