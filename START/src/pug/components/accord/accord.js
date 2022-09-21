"use ctrict";

export class Accord {
  constructor(button) {
    this.button = button;
    this.neibours = [...this.button.closest(".accord-header-js").children];
    this.hid = this.button.closest(".accord-header-js").nextElementSibling;
    this.hiddens = [...this.hid.children];
    this.timeout = 0;
  }

  setTime() {
    for (let i = 0; i < this.neibours.length; i++) {
      if (this.neibours[i].classList.contains("_is-active")) {
        return (this.timeout = 300);
      }
    }
  }

  resetAccord() {
    for (let i = 0; i < this.neibours.length; i++) {
      this.neibours[i].classList.remove("_is-active");
      this.hiddens[i].classList.remove("_is-active");
      this.hiddens[i].style.height = 0;
    }
  }

  start() {
    this.setTime();
    console.log("timeout" + this.timeout);
    for (let i = 0; i < this.neibours.length; i++) {
      if (
        this.neibours[i] === this.button &&
        !this.neibours[i].classList.contains("_is-active")
      ) {
        this.resetAccord();
        setTimeout(() => {
          this.neibours[i].classList.add("_is-active");
          this.hiddens[i].classList.add("_is-active");
          this.hiddens[i].style.height = this.hiddens[i].scrollHeight + "px";
        }, this.timeout);
      }
      if (
        this.neibours[i] === this.button &&
        this.neibours[i].classList.contains("_is-active")
      ) {
        setTimeout(() => {
          this.resetAccord();
        }, 0);
      }
    }
  }

  static resetAll() {
    [...document.querySelectorAll(".accord-header-item")].forEach((item) => {
      item.classList.remove("_is-active");
    });
    [...document.querySelectorAll(".accord-hidden-item")].forEach((item) => {
      item.classList.remove("_is-active");
      item.style.height = 0;
    });
  }
}

// export const Accord = (button) => {
//   const neibours = [...button.closest(".accord-header-js").children];
//   const hid = button.closest(".accord-header-js").nextElementSibling;
//   const hiddens = [...hid.children];
//   let timeout;
//   timeout = 0;

//   function setTime() {
//     for (let i = 0; i < neibours.length; i++) {
//       if (neibours[i].classList.contains("_is-active")) {
//         return (timeout = 500);
//       }
//     }
//   }

//   setTime();
// console.log("timeout is" + timeout);
//   for (let i = 0; i < neibours.length; i++) {
//     function resetAll() {
//       for (let i = 0; i < neibours.length; i++) {
//         neibours[i].classList.remove("_is-active");
//         hiddens[i].classList.remove("_is-active");
//         hiddens[i].style.height = 0;
//       }
//     }

//     function setActive() {
//       neibours[i].classList.add("_is-active");
//       hiddens[i].classList.add("_is-active");
//       hiddens[i].style.height = hiddens[i].scrollHeight + "px";
//     }

//     if (
//       neibours[i] === button &&
//       !neibours[i].classList.contains("_is-active")
//     ) {
//       resetAll();

      
//       setTimeout(() => {
//         setActive();
//       }, timeout);
//     }

//     if (
//       neibours[i] === button &&
//       neibours[i].classList.contains("_is-active")
//     ) {
//       setTimeout(() => {
//         resetAll();
//       }, 0);
//     }
//   }

// };


