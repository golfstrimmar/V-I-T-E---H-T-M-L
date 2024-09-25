import Typed from "typed.js";

export const TypedItemscroll = (item) => {
  var text = item.querySelector("._scroll-typed__text");
  var typed;
  item.querySelector(".typed-strings").style.display = "block";
  text.style.display = "none";
  if (item.matches("._scroll-typed--1")) {
    typed = new Typed(".scrolledTyped-1", {
      stringsElement: ".scrolledTyped-strings--1",
      typeSpeed: 30,
      onComplete: (self) => {
        text.style.display = "block";
        typed.destroy();
        item.querySelector(".typed-strings").style.display = "none";
      },
    });
  }
  if (item.matches("._scroll-typed--2")) {
    typed = new Typed(".scrolledTyped-2", {
      stringsElement: ".scrolledTyped-strings--2",
      typeSpeed: 30,
      onComplete: (self) => {
        text.style.display = "block";
        typed.destroy();
        item.querySelector(".typed-strings").style.display = "none";
      },
    });
  }
};
