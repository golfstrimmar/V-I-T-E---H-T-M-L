"use ctrict";

export const Header = () => {
  const header = document.querySelector("header");
  const menu = header.querySelector(".menu");
  const info = header.querySelector(".info");
  const burger = header.querySelector(".burger");
  const HeaderBody = header.querySelector(".header__body");
  const now = info.cloneNode(true);
  const body = document.querySelector("body");
  // ---------------------------------------------
  const activeItemHEAD = (event) => {
    var temp = event.target.closest(".menu__link");
    [...document.querySelectorAll(".menu__link ")].forEach((cell) => {
      temp == cell
        ? cell.classList.add("menu__link--active")
        : cell.classList.remove("menu__link--active");
    });
  };
  // ---------------------------------------------
  document.addEventListener("click", function (event) {
    if (event.target.closest(".burger")) {
      if (!burger.classList.contains("_is-active")) {
        menu.classList.add("menu-active");
        body.classList.add("lock");
      } else {
        menu.classList.remove("menu-active");
        body.classList.remove("lock");
      }
      burger.classList.toggle("_is-active");
    }

    if (event.target.closest(".menu__link")) {
      activeItemHEAD(event);
    }
  });

  // ---------------------------------------------

  const smMenu = () => {
    info.remove();
    menu.classList.remove("menu-active");
    now.classList.add("info-active");
    menu.append(now);
    burger.classList.remove("_is-active");
    body.classList.remove("lock");
  };

  const lgMenu = () => {
    body.classList.remove("lock");
    burger.classList.remove("_is-active");
    if (menu.querySelector(".info")) {
      menu.querySelector(".info").remove();
      now.classList.remove("info-active");
      HeaderBody.append(now);
    }
  };

  if (window.innerWidth >= 768) {
    lgMenu();
  } else {
    smMenu();
  }
  window.onresize = function () {
    if (window.innerWidth >= 768) {
      lgMenu();
    } else {
      if (!burger.classList.contains("_is-active")) {
        smMenu();
      }
    }
  };

  // ------------responciveHeader--------------
  if (window.pageYOffset > 100) {
    header.classList.add("responciveHeader");
  }

  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 100) {
      header.classList.add("responciveHeader");
    } else {
      header.classList.remove("responciveHeader");
    }
  });
};
