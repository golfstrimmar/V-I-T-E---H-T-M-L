"use ctrict";
// import { Polifils } from "/src/functions";
import Swiper, { Navigation } from "swiper";


export const MyGalery = () => {
  const galery = document.querySelector("#galery ");
  const body = document.querySelector("body");
  const navItems = galery.querySelectorAll(".galery__nav-item"),
    galeryItems = [...galery.querySelectorAll(".galery__item")],
    plaza = galery.querySelector(".galery__items");
  let pseudo = [],
    timeout = 0,
    temp;
  // for (let i = 0; i < galeryItems.length; ++i) {

  let i = 0;
  while (i < galeryItems.length) {
    pseudo[i] = { data: "", src: "" };
    pseudo[i].data = galeryItems[i].getAttribute("data");
    pseudo[i].src = galeryItems[i].querySelector("img").getAttribute("src");
    pseudo.push(pseudo[i]);
    ++i;
  }
  pseudo.pop();

  // =======================
  const remove = () => {
    [...plaza.children].forEach((cell) => {
      cell.classList.remove("_is-anim-open");
      cell.classList.add("_is-anim-close");
      setTimeout(() => {
        cell.remove();
      }, timeout);
    });
  };
  // =======================
  const create = (cell) => {
    let temp = document.createElement("li");
    temp.classList.add("galery__item", "rel", "_is-anim-open");
    temp.setAttribute("data", `${cell.data}`);
    temp.innerHTML = `<div class='imgs'><img src='${cell.src}' alt=''></div>`;
    plaza.append(temp);
  };
  // =======================
  navItems.forEach((Item) => {
    Item.addEventListener("click", (e) => {
      if (Item == temp) {
        return;
      }

      galery.querySelector(".galery__nav-item").disabled = false;
      let data = Item.getAttribute("data");

      if (data == "all") {
        remove();
        navItems.forEach((sell) => {
          sell == Item ? sell.addAct : sell.remAct;
        });

        setTimeout(() => {
          plaza.remAct;
          pseudo.forEach((cell) => {
            create(cell);
          });
          temp = Item;
        }, timeout);
        return;
      }

      plaza.addAct;
      navItems.forEach((sell) => {
        sell == Item ? sell.addAct : sell.remAct;
      });
      if ([...plaza.children].length > 0) {
        timeout = 300;
      }
      remove();
      setTimeout(() => {
        pseudo.forEach((cell) => {
          if (cell.data == data) {
            create(cell);
          }
        });
      }, timeout);
      temp = Item;
    });
  });

  const TargetPop = (target) => {


    const imgSrc = target.querySelector("img").getAttribute("src"),
      popup = document.querySelector(".popup-js"),
      popupInner = popup.querySelector(".popup__inner"),
      popupContent = popup.querySelectorAll(".popup__content"),
      galerySlider = document.querySelector("#slider-galery");
    let plazaChildren = [...plaza.children];
    let plazaChildrenSrc = [];
    let indexOf = 0;


    galerySlider.style.display = "flex";
    galerySlider.classList.remove("_not-active");
    galerySlider.addAct;


    plazaChildren.forEach((cell) => {
      if (cell == target) {
        indexOf = plazaChildren.indexOf(cell);
      }
    });

    for (let i = 0; i < plazaChildren.length; ++i) {
      plazaChildrenSrc[i] = plazaChildren[i]
        .querySelector("img")
        .getAttribute("src");
    }

    document.querySelector(".slider-js-galery .swiper-wrapper").innerHTML = "";

    for (let i = 0; i < plazaChildrenSrc.length; ++i) {
      let create = document.createElement("div");
      create.classList.add("slider__item", "swiper-slide");
      let html = `<div class='imgs'><img src= ${plazaChildrenSrc[i]}></div>`;
      create.innerHTML = html;
      document
        .querySelector(".slider-js-galery .swiper-wrapper")
        .append(create);
    }

    plazaChildren.forEach((cell) => {
      if (cell == target) {
        indexOf = plazaChildren.indexOf(cell);
      }
    });

    const swiperGalery = new Swiper(".slider-js-galery", {
      navigation: {
        prevEl: ".arrow-galery-prev",
        nextEl: ".arrow-galery-next",
      },
      slidesPerView: 1,
      speed: 800,
      initialSlide: indexOf,
      modules: [Navigation],
    });

    document.addEventListener("click", (e) => {
      if (
        e.target.matches("#slider-galery") ||
        e.target.matches(".galeryPopupClose")
      ) {
        body.classList.remove("lock");
        document.querySelector("#slider-galery .swiper-wrapper").innerHTML = "";
        galerySlider.remAct;
        galerySlider.classList.add("_not-active");
        setTimeout(() => {
          galerySlider.style.display = "none";
        }, 300);
        indexOf = 0;
        swiperGalery.destroy();
      }
    });
  };

  // ========================
  document.addEventListener("click", (e) => {
    if (e.target.closest(".galery__item")) {
      let target = e.target.closest(".galery__item");
      TargetPop(target);
      body.classList.add("lock");
    }
  });
};
