"use ctrict";

export const Header = () => {
  // const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".menu");
  const info = document.createElement("div");

  document.addEventListener("click", function (event) {
    if (event.target.closest(".header__burger")) {
      menu.classList.add("menu-active");
      info.classList.add("header__info", "info");
      info.innerHTML =
        "";
      function activeInfo() {
        info.classList.add("info-active");
        menu.append(info);
      }
      setTimeout(activeInfo, 100);
      document.querySelector("body").classList.add("lock");
    }
  });

  // --------------------------

  document
    .querySelector(".header__close")
    .addEventListener("click", function (event) {
      menu.classList.remove("menu-active");
      menu.querySelector(".info").remove();
      info.classList.remove("info-active");
      document.querySelector("body").classList.remove("lock");
    });

  // --------------------------

  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 100) {
      document.querySelector(".header").classList.add("responciveHeader");
    } else {
      document.querySelector(".header").classList.remove("responciveHeader");
    }
  });

  // ---------------------------------------------
  window.onresize = function () {
    if (window.innerWidth >= 999) {
      if (menu.querySelector(".header__info")) {
        menu.querySelector(".header__info").remove();
      }

      menu.classList.remove("menu-active");
      document.querySelector(".info").classList.remove("info-active");
      document.querySelector("body").classList.remove("lock");
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
