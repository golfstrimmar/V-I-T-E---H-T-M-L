import "./assets/css/plyr.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/fonts.css";
import "./src/scss/main.scss";

import { Button } from "./assets/js/button";
// import { Lazy } from "./assets/js/lazy";
import { Anim } from "./assets/js/animation";



import { bunnerSwiper } from "./src/pug/components/bunner/bunner";
import { Header } from "./src/pug/components/header/header";
import { Popups } from "./src/pug/components/popup/popup";
import { Swiper1 } from "./src/pug/components/swiper-1/swiper-1";
import { SwiperFull } from "./src/pug/components/slider-full/slider-full";
import { SwiperScroll } from "./src/pug/components/slider-scroll/slider-scroll";  
import { Gal } from "./src/pug/components/galSlider/galSlider";
import { Accord } from "./src/pug/components/accord/accord";
import { MyTab } from "./src/pug/components/tabs/tabs";
import { MyRange } from "./src/pug/components/range/range";
import { Select } from "./src/pug/components/select/select";
import { Look } from "./src/pug/components/look/look";
import { Double } from "./src/pug/components/slider-double/sdouble.js";
import { MyGalery } from "./src/pug/components/galery/galery";
import { TypedItem } from "./src/pug/components/typed/typedHover";


  
 





document.addEventListener("DOMContentLoaded", function () {
   Look();
    Anim();
  if (document.querySelector("#bunner-slider")) {
    bunnerSwiper();
  }
  if (document.querySelector("#swiper-1")) {
    Swiper1();
  }
  if (document.querySelector("#slider-full")) {
    SwiperFull();
  }
  if (document.querySelector("#swiperDoubleTop")) {
    Double();
  }
  if (document.querySelector("#galery")) {
    MyGalery();
  }
  if (document.querySelector("#swiper-scroll")) {
    SwiperScroll();
  }
  if (document.querySelector("#galSlider")) {
    Gal();
  }
  // if (document.querySelector("source")) {
  //   Lazy();
  // }

  const popupsInit = document.querySelectorAll(".popups-init-js");
  if (popupsInit.length > 0) {
    Popups();
  }
  if (document.querySelector("header")) {
    Header();
  }

  const accordAll = document.querySelectorAll(".accord");
  if (accordAll.length > 0) {
    document.addEventListener("click", (e) => {
      if (
        e.target.closest(".accord-header-item") ||
        e.target.closest(".accord-hidden-item")
      ) {
        const target = e.target.closest(".accord-header-item");
        const accord = new Accord(target);
        accord.start();
      } else {
        Accord.resetAll();
      }
    });
  }
  const tabs = document.querySelectorAll(".tab-js");
  if (tabs.length > 0) {
    MyTab();
  }

const ranges = [...document.querySelectorAll(".range-wrap")];
  if (ranges.length > 0) {
    ranges.forEach((item) => {
      MyRange(item);
    });
  }

 const selects = [...document.querySelectorAll(".select-custom")];
  if (selects.length > 0) {
    selects.forEach((select) => {
      Select(select);
    });
  }

  [...document.querySelectorAll(".but-wave")].forEach((cell) => {
    cell.addEventListener("click", Button);
  });

  // if (document.querySelector("#look")) {
  //   const player1 = new Plyr(".player-1");
  // }

  const galerys = document.querySelectorAll(".galery");

  if (galerys.length > 0) {
    galerys.forEach((galery) => {
      MyGalery(galery);
    });
  }


const textTypedAll = [...document.querySelectorAll("._hover-typed")];
if (textTypedAll.length > 0) {
  textTypedAll.forEach((item) => {
    TypedItem(item);
  });
}


});


// ===============================================
Object.defineProperty(HTMLElement.prototype, "addAct", {
  get: function () {
    if (!this.classList.contains("_is-active")) {
      return this.classList.add("_is-active");
    }
  },
});

Object.defineProperty(HTMLElement.prototype, "remAct", {
  get: function () {
    if (this.classList.contains("_is-active")) {
      return this.classList.remove("_is-active");
    }
  },
});

