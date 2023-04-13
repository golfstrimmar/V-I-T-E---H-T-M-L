"use ctrict";
import Swiper, { EffectCards } from "swiper";

export const SwiperWorter = () => {
  var swiperIndexPronomen = new Swiper("#Swiper-worter", {
    grabCursor: true,
    modules: [EffectCards],
    effect: "cards",
    cardsEffect: {
      perSlideOffset: 3,
      perSlideRotate: 4,
    },
  });
};
