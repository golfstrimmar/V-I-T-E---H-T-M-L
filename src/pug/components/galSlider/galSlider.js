"use strict";
import Swiper, { Pagination } from "swiper";

export const GalSlider = (car) => {
  const swiperInstances = new WeakMap();
  const gal = car.querySelector("._accord-hidden-wrap");
  const hidden = car.querySelector("._accord-hidden-wrap");

  let ingal = [...gal.querySelectorAll("li")];
  const allBlocks = car.querySelector("._allBlocks");
  const galSlider = car.nextElementSibling;
  let sw = galSlider.querySelector(".swiper-wrapper");
  let imagesHTML = "";
  const nextSwiper = galSlider.querySelector(".swiper");
  let galSwiperInstance = null;
  imagesHTML = ingal.filter((foo) => {
    return !foo.classList.contains("_allBlocks");
  });
  imagesHTML.forEach((li) => {
    const cardHTML = li.innerHTML;
    allBlocks.innerHTML += cardHTML;
  });
  let ingalContent = ingal.map((cell) => cell.innerHTML);
  localStorage.setItem("duble", JSON.stringify(ingalContent));
  ingal.forEach((cell) => {
    cell.innerHTML = "";
  });

  const init = (item, i) => {
    sw.innerHTML = "";
    const duble = JSON.parse(localStorage.getItem("duble"));
    const regex =
      /<div class="card">[\s\S]*?<\/div>(?=<(?:\/div|<div class="card"))/g;
    var cardMatches = [...duble[i].matchAll(regex)];
    cardMatches.forEach((match) => {
      const el = document.createElement("div");
      el.classList.add("swiper-slide");
      el.innerHTML = match;
      sw.append(el);
    });

    // if (galSwiperInstance == null) {
    //   galSwiperInstance = new Swiper(nextSwiper, {
    //     spaceBetween: 30,
    //     slidesPerView: 4,
    //     speed: 500,
    //     modules: [Pagination],
    //     pagination: {
    //       el: ".swiper-pagination-1",
    //       clickable: true,
    //     },
    //     grabCursor: true,
    //   });
    // }
    // galSwiperInstance.update();

    if (!swiperInstances.has(car)) {
      const galSwiperInstance = new Swiper(nextSwiper, {
        slidesPerView: 1,
        spaceBetween: 7,
        breakpoints: {
          1034: {
            spaceBetween: 10,
            slidesPerView: 4,
          },
          1253: {
            spaceBetween: 30,
            slidesPerView: 4,
          },
        },
        loop: true,
        speed: 500,
        modules: [Pagination],
        pagination: {
          el: ".swiper-pagination-1",
          clickable: true,
        },
        grabCursor: true,
      });
      swiperInstances.set(car, galSwiperInstance);
    }
    galSwiperInstance = swiperInstances.get(car);
    galSwiperInstance.update();
  };

  const hiddenItems = [...hidden.querySelectorAll(" li")];

  const nav = car.querySelector("._accord-nav-js");
  let navItems = [...nav.children];
  navItems.forEach((foo) => {
    let index = navItems.indexOf(foo);
    if (foo.classList.contains("_is-active")) {
      hiddenItems[index].classList.add("_is-active");
      car.querySelector("._accord-hidden-js").classList.add("_is-active");
      car.querySelector("._accord-hidden-js").style =
        "grid-template-rows: 1fr;";
      init(hiddenItems[index], index);
      hiddenItems[index].append(galSlider);
    }
  });

  hiddenItems.forEach((item, index) => {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (mutation.target.classList.contains("_is-active")) {
            init(item, index);
            item.append(galSlider);
            if (!swiperInstances.has(car)) {
              item.append(galSlider);
            }
          } else {
            if (item.contains(galSlider)) {
              galSlider.remove();
            }
          }
        }
      });
    });
    observer.observe(item, { attributes: true });
  });
};
