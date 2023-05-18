import "./assets/css/plyr.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/fonts.css";
import "./src/scss/main.scss";

import { Button } from "./assets/js/button";
// import { Lazy } from "./assets/js/lazy";
import { Anim } from "./assets/js/animation";
import { Marque } from "./assets/js/marque";

import { bunnerSwiper } from "./src/pug/components/bunner/bunner";
import { Header } from "./src/pug/components/header/header";
import { Popup } from "./src/pug/components/popup/popup";
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
  if (document.querySelector(".marque")) {
    Marque();
  }
  if (document.querySelector("#slider-full")) {
    SwiperFull();
  }
  if (document.querySelector("#swiperDoubleTop")) {
    Double();
  }

  const galeryAll = document.querySelectorAll("._galery-body-js");

  if (galeryAll.length > 0) {
    var tWidth = document.querySelector("._galery-item-js").scrollWidth;
    var tHeight = document.querySelector("._galery-item-js").scrollHeight;
    document.addEventListener("click", (e) => {
      if (e.target.closest("._galery-nav-item-js")) {
        const target = e.target.closest("._galery-nav-item-js");
        const Galery = new MyGalery(target);
        Galery.start(tWidth, tHeight);
      } else {
        if (!e.target.closest("._galery-body-js")) {
          MyGalery.resetAll(tWidth, tHeight);
        }
      }
    });
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
    const initPopup = (e) => {
      let newPopup = "empty";
      if (e.target.closest(".popups-init-js")) {
        let target = e.target.closest(".popups-init-js");
        newPopup = new Popup(target);
        newPopup.start();
      }

      if (e.target.closest("._galery-item-js")) {
        let plasa = "";
        let item = "";
        let itemIndex = 0;
        item = e.target.closest(".popups-init-js").closest("._galery-item-js");
        plasa = [...item.closest("._plasa-js").children];
        plasa = plasa.filter((el) => el.style.width !== "0px");
        itemIndex = plasa.indexOf(item);
        plasa = plasa.map((el) => el.querySelector("img").getAttribute("src"));
        let target = e.target.closest(".popups-init-js");
        newPopup = new Popup(target);
        newPopup.startGalary(plasa, itemIndex);
      }

      if (e.target.closest(".popup-close-js")) {
        Popup.close();
      }
      if (
        e.target.closest(".popup-overlay-js") &&
        !e.target.closest(".popup-inner-js")
      ) {
        Popup.close();
      }
    };

    document.addEventListener("click", (e) => {
      initPopup(e);
    });
  }

  if (document.querySelector("header")) {
    Header();
  }

  const accordAll = document.querySelectorAll(".accord");
  if (accordAll.length > 0) {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".accord-js")) {
        const target = e.target.closest(".accord-item-js");
        const accord = new Accord(target);
        accord.start();
      } else {
        Accord.resetAll();
      }
    });
    document.addEventListener("dblclick", (e) => {
      if (e.target.closest(".accord-item-js")) {
        Accord.resetDouble();
      }
    });
  }
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
