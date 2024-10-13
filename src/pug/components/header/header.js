"use ctrict";
export const Header = () => {
  const header = document.querySelector("header");
  const menu = header.querySelector(".menu");
  const info = header.querySelector(".info");
  const burger = header.querySelector(".burger");
  const HeaderBody = header.querySelector(".header__body");
  const lang = header.querySelector("#languageForm");
  const search = header.querySelector(".search");
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

  if (window.innerWidth <= 1035) {
    menu.append(info);
    menu.append(search);
    menu.append(lang);
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 1035) {
      menu.append(info);
      menu.append(search);
      menu.append(lang);
    }
    if (window.innerWidth > 1035) {
      HeaderBody.append(lang);
      HeaderBody.append(info);
      HeaderBody.append(search);
    }
    if (window.innerWidth >= 1253) {
      burger.classList.remove("_is-active");
      menu.classList.remove("menu-active");
    }
  });
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
