"use ctrict";
import Swiper, { EffectCards } from "swiper";

export const SwiperWerben = () => {
  var swiperSliderWerben = new Swiper("#Swiper-werben", {
    grabCursor: true,
    modules: [EffectCards],
    effect: "cards",
    cardsEffect: {
      perSlideOffset: 3,
      perSlideRotate: 4,
    },
  });
};
