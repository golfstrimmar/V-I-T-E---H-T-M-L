"use ctrict";

export const Header = () => {
  const menu = document.querySelector(".menu");
  const header = document.querySelector("header");
  const info = document.querySelector(".info");
  const now = info.cloneNode(true);
  const body = document.querySelector("body");

  const activeInfo = () => {
    menu.classList.add("menu-active");
    now.classList.add("info-active");
    menu.appendChild(now);
    body.classList.add("lock");
  };
  const normalInfo = () => {
    menu.classList.remove("menu-active");
    menu.querySelector(".info").remove();
    info.classList.remove("info-active");
    body.classList.remove("lock");
  };

  document.addEventListener("click", function (event) {
    if (event.target.closest(".header__burger")) {
      activeInfo();
    }
    if (event.target.closest(".header__close")) {
      normalInfo();
    }
  });

  // --------------------------
  if (window.pageYOffset > 100) {
    header.classList.add("responciveHeader");
  }
  // --------------------------

  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 100) {
      header.classList.add("responciveHeader");
    } else {
      header.classList.remove("responciveHeader");
    }
  });

  // ---------------------------------------------
  window.onresize = function () {
    if (window.innerWidth >= 999) {
      if (menu.querySelector(".header__info")) {
        menu.querySelector(".header__info").remove();
      }
      menu.classList.remove("menu-active");
      info.classList.remove("info-active");
      body.classList.remove("lock");
    }
  };

  // -----------------------------------

  const menulinks = document.querySelectorAll(".menu__link ");
  const activeItemHEAD = (menulinks) => {
    const menu = document.querySelector(".menu__list");
    menu.addEventListener("click", (e) => {
      menulinks.forEach((cell) => {
        cell == e.target
          ? cell.classList.add("menu__link--active")
          : cell.classList.remove("menu__link--active");
      });
    });
  };

  if (menulinks.length > 0) {
    activeItemHEAD(menulinks);
  }
};
