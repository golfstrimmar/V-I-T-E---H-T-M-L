import "./assets/css/plyr.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/fonts.css";
import "./src/scss/main.scss";

import { Button } from "./assets/js/button";
import { Lazy } from "./assets/js/lazy";
import { Anim } from "./assets/js/animation";
import { Marque } from "./assets/js/marque";

import { bunnerSwiper } from "./src/pug/components/bunner/bunner";
import { Header } from "./src/pug/components/header/header";
import { Popup } from "./src/pug/components/popup/popup";
import { Swiper1 } from "./src/pug/components/swiper-1/swiper-1";
import { SwiperFull } from "./src/pug/components/slider-full/slider-full";
import { SwiperScroll } from "./src/pug/components/slider-scroll/slider-scroll";
import { Accords } from "./src/pug/components/accord/accord";
import { MyTab } from "./src/pug/components/tabs/tabs";
import { MyRange } from "./src/pug/components/range/range";
import { Select } from "./src/pug/components/select/select";
import { Look } from "./src/pug/components/look/look";
import { Double } from "./src/pug/components/slider-double/sdouble.js";
import { GalCases } from "./src/pug/components/galCases/galCases";
import { MyGalery } from "./src/pug/components/galery/galery";
import { TypedItem } from "./src/pug/components/typed/typedHover";
import { MyTabkurz } from "./src/pug/components/tabkurz/tabkurz";
import { MySideMenu } from "./src/pug/components/side-menu/side-menu";
import { CasesInit } from "./src/pug/components/cases/cases";

document.addEventListener("DOMContentLoaded", function () {
  Anim();
  // ==========
  if (document.querySelector("video")) {
    Look();
  }
  // =======================
  if (document.querySelector("source")) {
    Lazy();
  }
  // =======================
  if (document.querySelector("#bunner-slider")) {
    bunnerSwiper();
  }
  // ========Cases=============
  if (document.querySelector(".cases")) {
    CasesInit();
  }
  // ====GalCases=====
  if (document.querySelector("._galCases-plaza-js")) {
    GalCases();
  }
  // ====Accords=====
  if (document.querySelector(".accord")) {
    Accords();
  }
  // =======================
  const sideMenu = document.querySelectorAll(".smenu-js");
  if (sideMenu.length > 0) {
    [...document.querySelectorAll(".smenu-title-js ")].forEach((kab) => {
      kab.addEventListener("click", (e) => {
        var SideMenu = new MySideMenu(kab);
        SideMenu.start();
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".smenu-js")) {
        MySideMenu.resetAll();
      }
    });
  }
  // =======================
  const tabskurz = document.querySelectorAll(".tabkurz");
  if (tabskurz.length > 0) {
    [...document.querySelectorAll(".kab-title-js")].forEach((kab) => {
      kab.addEventListener("click", (e) => {
        var Tabkurz = new MyTabkurz(kab);
        Tabkurz.start();
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".tabkurz-body-js")) {
        MyTabkurz.resetAll();
      }
    });
  }
  // =======================
  if (document.querySelector("#swiper-1")) {
    Swiper1();
  }
  // =======================
  if (document.querySelector("#swiper-1licens")) {
    Swiper1licens();
  }
  // =======================
  if (document.querySelector(".marque")) {
    Marque();
  }
  // =======================
  if (document.querySelector("#slider-full")) {
    SwiperFull();
  }
  // =======================
  if (document.querySelector("#swiper-scroll")) {
    SwiperScroll();
  }
  // =======================
  if (document.querySelector("#swiperDoubleTop")) {
    Double();
  }
  // =======================
  if (document.querySelector("._galery-body-js")) {
    MyGalery();
  }

  // ========popup===============

  if (document.querySelector(".popups-init-js")) {
    Popup();
  }
  // =======================
  if (document.querySelector("header")) {
    Header();
  }
  // =======================

  // =======================
  const tabs = document.querySelectorAll(".tabs-container-js");
  if (tabs.length > 0) {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".tab-title-js")) {
        const target = e.target.closest(".tab-js");
        const Tab = new MyTab(target);
        Tab.start();
      } else if (!e.target.closest(".tabs-container-js")) {
        MyTab.resetAll();
      } else if (!e.target.closest(".tab-js")) {
        MyTab.resetAll();
      }
    });
  }
  // =======================
  const ranges = [...document.querySelectorAll(".range-wrap")];
  if (ranges.length > 0) {
    ranges.forEach((item) => {
      MyRange(item);
    });
  }
  // =======================
  const selects = [...document.querySelectorAll(".select-custom")];
  if (selects.length > 0) {
    selects.forEach((select) => {
      Select(select);
    });
  }
  // =======================
  [...document.querySelectorAll(".but-wave")].forEach((cell) => {
    cell.addEventListener("click", Button);
  });
  // =======================

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
    if (!this.matches("_is-active")) {
      return this.classList.add("_is-active");
    }
  },
});

Object.defineProperty(HTMLElement.prototype, "remAct", {
  get: function () {
    if (this.matches("_is-active")) {
      return this.classList.remove("_is-active");
    }
  },
});
