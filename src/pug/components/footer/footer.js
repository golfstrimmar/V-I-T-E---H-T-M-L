"use strict";
export const Footer = () => {
  let Foot = document.querySelector("footer");
  let Footbody = Foot.querySelector(".footer__body");
  let FooterItems = [...Foot.querySelectorAll(".tab")];
  let Foottop = [...Foot.querySelectorAll(".top")];
  let Footcontent = [...Foot.querySelectorAll(".tab-content")];
  let Footheadersvg = [...Foot.querySelectorAll(".top svg")];

  const Footrem = () => {
    Footbody.classList.remove("tabs-container");
    Footheadersvg.forEach((car) => {
      car.style.visibility = "hidden";
      car.style.position = "absolute";
    });

    FooterItems.forEach((car) => {
      car.classList.remove("tab");
    });
    Foottop.forEach((car) => {
      car.classList.remove("tab-header");
    });

    Footcontent.forEach((car) => {
      car.classList.remove("tab-content");
    });
  };
  const Footadd = () => {
    Footbody.classList.add("tabs-container");

    FooterItems.forEach((car) => {
      car.classList.add("tab");
    });
    Foottop.forEach((car) => {
      car.classList.add("tab-header");
    });
    Footheadersvg.forEach((car) => {
      car.style.visibility = "visible";
    });
    Footcontent.forEach((car) => {
      car.classList.add("tab-content");
    });
  };

  if (window.innerWidth > 1253) {
    Footrem();
  } else if (window.innerWidth < 1253) {
    Footadd();
  }
  let isBelowThreshold = false;
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1253 && !isBelowThreshold) {
      Footrem();
      isBelowThreshold = true;
    } else if (window.innerWidth < 1253 && isBelowThreshold) {
      Footadd();
      isBelowThreshold = false;
    }
  });
};
