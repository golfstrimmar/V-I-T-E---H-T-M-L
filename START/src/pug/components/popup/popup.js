"use strict";
import Plyr from "plyr";

const body= document.querySelector('body')


export const Popups = () => {
  const popup = document.querySelector(".popup-js"),
    contents = popup.querySelectorAll(".popup__content"),
    Pleers = [];

  let tempor = [...document.querySelectorAll(".slider-video")];

  if (tempor.length > 0) {
    tempor.forEach((cell) => {
      let id = cell.getAttribute("id");
      if (id) {
        let r = `#${id}`;
        const e = new Plyr(r);
        Pleers.push({ id: id, e: e });
      }
    });
  }

  document.addEventListener("click", (e) => {
    const target = e.target;
    //   // ==========================
    const openPop = () => {
      body.classList.add("lock");
      const initTarget = popup.querySelector(
        target.closest(".popups-init-js").getAttribute("rel")
      );

      setTimeout(() => {
        popup.style.display = "block";
        popup.classList.remove("_not-active");
        popup.classList.add("_is-active");

        contents.forEach((cell) => {
          if (cell == initTarget) {
            initTarget.style.display = "grid";
          } else {
            cell.style.display = "none";
          }
        });
      }, 200);

      if (initTarget) {
        let linkPlyr = initTarget.querySelector("video").getAttribute("id");
        for (let i = 0; i < tempor.length; ++i) {
          if (Pleers[i].id === linkPlyr) {
            Pleers[i].e.play();
          }
        }
      }

    };
    //   // ==========================
    const closePop = () => {
      body.classList.remove("lock");
      popup.classList.remove("_is-active");
      popup.classList.add("_not-active");

      setTimeout(() => {
        popup.style.display = "none";
        contents.forEach((cell) => {
          cell.style.display = "none";
        });
      }, 300);

 
      for (let i = 0; i < Pleers.length; ++i) {
        Pleers[i].e.stop();
      }
    };
    //   // ==========================

    if (
      target.closest(".popups-init-js")
      //  &&
      // target.closest(".slider__item").classList.contains("swiper-slide-active")
    ) {
      openPop();
    } else if (
      target.matches(".popup-overlay-js") ||
      target.closest(".popup-close-js")
    ) {
      closePop();
       
    }
  });
};


export const OpenPopGalery = () =>{
  const popup = document.querySelector(".popup-js")
  const popupGalery = document.querySelector(".popup__content--galery")

        popup.style.display = "block";
        popup.classList.remove("_not-active");
        popup.classList.add("_is-active");
        popupGalery.style.display = "block";
      // body.classList.add("lock");
}
