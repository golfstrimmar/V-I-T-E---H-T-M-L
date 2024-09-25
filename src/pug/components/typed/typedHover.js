import Typed from "typed.js";

export const TypedItem = (item) => {
  var text = item.querySelector("._hover-typed__text");

  var typed;
  // var selfTyped = item.querySelector("._typed");

  item.addEventListener("mouseenter", () => {
    item.querySelector(".typed-strings").style.display = "block";
    text.style.display = "none";

if (item.matches('._hover-typed--1')) {
    typed = new Typed(".typed-1", {
      stringsElement: ".typed-strings-1",
      typeSpeed: 30,
      onComplete: (self) => {
        text.style.display = "block";
        typed.destroy();
        item.querySelector(".typed-strings").style.display = "none";
      },
    });
  item.addEventListener("mouseleave", () => {
    text.style.display = "block";
    item.querySelector(".typed-strings-1").style.display = "none";
    typed.destroy();
  });
}
if (item.matches('._hover-typed--2')) {
    typed = new Typed(".typed-2", {
      stringsElement: ".typed-strings-2",
      typeSpeed: 30,
      onComplete: (self) => {
        text.style.display = "block";
        typed.destroy();
        item.querySelector(".typed-strings").style.display = "none";
      },
    });
  item.addEventListener("mouseleave", () => {
    text.style.display = "block";
    item.querySelector(".typed-strings-2").style.display = "none";
    typed.destroy();
  });
}
  });

};
