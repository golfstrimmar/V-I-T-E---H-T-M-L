"use strict";
import Swiper, { Navigation, Pagination } from "swiper";

export const GalSlider = (car) => {
  // const swiperInstances = new WeakMap();
  const gal = car.querySelector("._accord-hidden-wrap");
  const hidden = car.querySelector("._accord-hidden-wrap");
  const hiddenItems = [...hidden.querySelectorAll(" li")];
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
  let duble = null;

  var cardMatches = null;

  const init = (item, i) => {
    sw.innerHTML = "";
    duble = null;
    galSwiperInstance = null;

    const ItemsApdate = () => {
      return new Promise((resolve) => {
        duble = JSON.parse(localStorage.getItem("duble"));
        const regex =
          /<div class="card">[\s\S]*?<\/div>(?=<(?:\/div|<div class="card"))/g;
        cardMatches = [...duble[i].matchAll(regex)];
        cardMatches.forEach((match) => {
          const el = document.createElement("div");
          el.classList.add("swiper-slide");
          el.innerHTML = match[0];
          sw.append(el);
        });
        resolve();
      });
    };

    ItemsApdate().then(() => {
      if (galSwiperInstance == null) {
        galSwiperInstance = new Swiper(nextSwiper, {
          spaceBetween: 30,
          slidesPerView: 4,
          loop: "true",
          speed: 300,
          modules: [Pagination, Navigation],
          navigation: {
            nextEl: ".arrow-prev-1",
            prevEl: ".arrow-next-1",
          },
          pagination: {
            el: ".swiper-pagination-1",
            type: "bullets",
            clickable: true,
          },
          grabCursor: true,
        });
      }
    });
  };

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
    if (item.classList.contains("_is-active")) {
      init(item, index);
      item.append(galSlider);
    }

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (galSwiperInstance && galSwiperInstance.destroy) {
            galSwiperInstance.destroy(true, true);
            galSlider.remove();
            galSwiperInstance = null;
          }
          if (mutation.target.classList.contains("_is-active")) {
            init(item, index);
            item.append(galSlider);
          }
        }
      });
    });
    observer.observe(item, { attributes: true });
  });
};
