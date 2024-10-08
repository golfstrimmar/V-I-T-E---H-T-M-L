"use ctrict";
import Swiper, { Navigation } from "swiper";
export const GalleryPop = () => {
  var mySwiperGalary = null;
  const SliderGalery = () => {
    mySwiperGalary = new Swiper("#slider-pop", {
      slidesPerView: 1,
      speed: 500,
      modules: [Navigation],
      navigation: {
        nextEl: ".arrow-galery-next",
        prevEl: ".arrow-galery-prev",
      },
      grabCursor: true,
    });
  };

  if (document.querySelector("#popupGalery")) {
    const popGal = document.querySelector("#slider-pop .swiper-wrapper");

    document.addEventListener("click", (e) => {
      if (e.target.closest(".galery__img")) {
        popGal.innerHTML = "";
        const img = e.target.closest(".galery__img");
        const ulimg = e.target.closest("ul");
        let headItems = [...ulimg.querySelectorAll(" .galery__img  ")];
        let i = headItems.findIndex((el) => el === img);
        headItems.forEach((car) => {
          const copyCell = document.createElement("div");
          copyCell.classList.add("swiper-slide");
          copyCell.innerHTML = car.innerHTML;
          popGal.append(copyCell);
        });

        if (!mySwiperGalary) {
          SliderGalery();
        } else {
          mySwiperGalary.update();
        }
        mySwiperGalary.slideTo(i);
      }
    });
  }
};
