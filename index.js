import "./assets/css/plyr.css";
import "./assets/css/swiper-bundle.min.css";
import "@/scss/main.scss";
import { Button } from "@/pug/components/buttons/btn-wave";
import { Lazy } from "./assets/js/lazy";
import { Anim } from "./assets/js/animation";
import { Marque } from "./assets/js/marque";

import { Lang } from "./assets/js/lang";
import { Search } from "./assets/js/search";

import { Header } from "@/pug/components/header/header";

import { bunnerSwiper } from "@/pug/components/bunner/bunner";
import { Popup } from "@/pug/components/popup/popup";
import { Tab } from "@/pug/components/tab/tab";
import { Accords } from "@/pug/components/accord/accord";
import { SideMenu } from "@/pug/components/side-menu/side-menu";
import { CasesInit } from "@/pug/components/cases/cases";
import { GalleryInit } from "@/pug/components/galery/galery";
import { GalCases } from "@/pug/components/galCases/galCases";
import { Swiper1 } from "@/pug/components/swiper-1/swiper-1";
import { SwiperFull } from "@/pug/components/slider-full/slider-full";
import { SwiperScroll } from "@/pug/components/slider-scroll/slider-scroll";
import { Double } from "@/pug/components/slider-double/sdouble.js";
import { Range } from "@/pug/components/range/range";
import { Select } from "@/pug/components/select/select";
import { Look } from "@/pug/components/look/look";
import { TypedItem } from "@/pug/components/typed/typedHover";
import { Form } from "@/pug/components/form/form";

document.addEventListener("DOMContentLoaded", function () {
  Anim();

  // =====Header==================
  if (document.querySelector("header")) {
    Header();
  }

  // ===Look=======
  if (document.querySelector("video")) {
    Look();
  }
  // =========Lazy==============
  if (document.querySelector("img")) {
    Lazy();
  }
  // =========bunnerSwiper==============
  if (document.querySelector("#bunner-slider")) {
    bunnerSwiper();
  }
  // ========popup===============
  if (document.querySelector(".popups-init-js")) {
    Popup();
  }

  // ======Tab=================
  if (document.querySelector("._tabs-container-js")) {
    Tab();
  }

  // =========sideMenu==============
  if (document.querySelector("._smenu-js")) {
    SideMenu();
  }

  // ====Accords=====
  if (document.querySelector(".accord")) {
    Accords();
  }

  // ========Cases=============
  if (document.querySelector("._accord-cases-js")) {
    CasesInit();
  }
  // ======Gallery======================
  if (document.querySelector("._accord-galery-js")) {
    GalleryInit();
  }
  // ====GalCases=====
  if (document.querySelector("._galCases-plaza-js")) {
    GalCases();
  }

  // =========Swiper1==============
  if (document.querySelector("#swiper-1")) {
    Swiper1();
  }
  // ========swiper-1licens===============
  if (document.querySelector("#swiper-1licens")) {
    Swiper1licens();
  }
  // =========Marque==============
  if (document.querySelector(".marque")) {
    Marque();
  }
  // ======slider-full=================
  if (document.querySelector("#slider-full")) {
    SwiperFull();
  }
  // =====swiper-scroll==================
  if (document.querySelector("#swiper-scroll")) {
    SwiperScroll();
  }
  // ========swiperDouble===============
  if (document.querySelector("#swiperDoubleTop")) {
    Double();
  }
  // ========lang===============
  if (document.querySelector('input[name="lang"]')) {
    document.querySelectorAll('input[name="lang"]').forEach(function (radio) {
      Lang(radio);
    });
  }
  // ========Search===============
  if (document.querySelector("#search")) {
    Search();
  }

  // ========Range===============
  const ranges = [...document.querySelectorAll("._range-wrap-js")];
  if (ranges.length > 0) {
    ranges.forEach((item) => {
      Range(item);
    });
  }
  // =========Select==============
  const selects = [...document.querySelectorAll(".select-custom")];
  if (selects.length > 0) {
    selects.forEach((select) => {
      Select(select);
    });
  }

  // ========Form===============

  if (document.querySelector(".send-form")) {
    Form();
  }
  // =========Button==============
  if (document.querySelector(".but-wave")) {
    const wave = [...document.querySelectorAll(".but-wave")];
    wave.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        Button(e);
      });
    });
  }
  // =======================

  const textTypedAll = [...document.querySelectorAll("._hover-typed")];
  if (textTypedAll.length > 0) {
    textTypedAll.forEach((item) => {
      TypedItem(item);
    });
  }
});
// =======================

// // ======GalSlider==================
// if (document.querySelector("#galSlider")) {
//   GalSlider();
// }
// const tabs = document.querySelectorAll(".tabs-container-js");
// if (tabs.length > 0) {
//   document.addEventListener("click", (e) => {
//     if (e.target.closest(".tab-title-js")) {
//       const target = e.target.closest(".tab-js");
//       const Tab = new MyTab(target);
//       Tab.start();
//     } else if (!e.target.closest(".tabs-container-js")) {
//       MyTab.resetAll();
//     } else if (!e.target.closest(".tab-js")) {
//       MyTab.resetAll();
//     }
//   });
// }
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
