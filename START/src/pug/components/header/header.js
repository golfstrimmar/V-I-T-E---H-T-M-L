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

   const activeItemHEAD = (event) => {
     var temp = event.target.closest(".menu__link");
     [...document.querySelectorAll(".menu__link ")].forEach((cell) => {
      temp == cell
        ? cell.classList.add("menu__link--active")
        : cell.classList.remove("menu__link--active");
     });
   };

     document.addEventListener("click", function (event) {
       if (event.target.closest(".header__burger")) {
         activeInfo();
       }
       if (event.target.closest(".header__close")) {
         normalInfo();
       }

       if (event.target.closest(".menu__link")) {
         activeItemHEAD(event);
       }

       if (event.target.closest(".menu-link-js")) {
         var temp = event.target.closest(".menu-link-js");
         [...document.querySelectorAll(".menu-link-js")].forEach((cell) => {
           if (temp == cell) {
             cell.classList.contains("_is-active")
               ? cell.classList.remove("_is-active")
               : cell.classList.add("_is-active");
           } else {
             cell.classList.remove("_is-active");
           }
         });
       } else {
         [...document.querySelectorAll(".menu-link-js")].forEach((cell) => {
           cell.classList.remove("_is-active");
         });
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

};
