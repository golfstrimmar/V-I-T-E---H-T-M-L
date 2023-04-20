"use ctrict";

export const MyTab = () => {
  let tabs = [...document.querySelectorAll(".tab-js")];

  tabs.forEach((cell) => {
    const title = cell.querySelector(".tab-title-js");
    const hidden = cell.querySelector(".tab-hidden-js");
    let addition = 0;


    title.addEventListener("click", (e) => {
      function close() {
        const naibous = [...cell.closest(".tabs-container-js").children];
        function resetAll(el) {
          const title = el.querySelector(".tab-title-js");
          const hidden = el.querySelector(".tab-hidden-js");
          title.remAct;
          hidden.remAct;
          hidden.classList.add("_not-active");
          hidden.style.maxHeight = 0;
        }
        naibous.forEach((el) => {
         resetAll(el);
        });
        if (hidden.querySelector(".tabs-container-js")) {
          const childrens = [
            ...hidden.querySelector(".tabs-container-js").children,
          ];
          childrens.forEach((el) => {
          resetAll(el);
          });
        }
      }

      if (!title.matches("._is-active")) {
        close();
        setTimeout(() => {
          addition = hidden.scrollHeight;
          title.addAct;
          hidden.classList.remove("_not-active");
          hidden.addAct;
          hidden.style.maxHeight = addition + "px";
          if (cell.closest(".tab-hidden-js")) {
            const parent = cell.closest(".tab-hidden-js");
            parent.style.maxHeight = "300px";
          }
        }, 0);
      }

      if (title.matches("._is-active")) {
        close();
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".tabs-container-js") && !e.target.closest("#sand")) {
      tabs.forEach((cell) => {
        if (cell.querySelector(".tab-title-js").matches("._is-active")) {
          cell.querySelector(".tab-title-js").remAct;
        }
        if (cell.querySelector(".tab-hidden-js").matches("._is-active")) {
          cell.querySelector(".tab-hidden-js").remAct;
          cell.querySelector(".tab-hidden-js").classList.add("_not-active");
          cell.querySelector(".tab-hidden-js").style.maxHeight = 0;
        }
      });
    }
  });
};

// export class Tab {
//   constructor(tab) {
//     this.tab = tab;
//     this.neibours = [...tab.closest(".tabs-container-js").children];
//     this.hidden = tab.querySelector(".tab-hidden-js");
//   }

//   activeAdd(arg) {
//     arg.classList.add("_is-active");
//   }
//   notActiveAdd(arg) {
//     arg.classList.remove("_is-active");
//   }

//   start() {
//     //  Tab.resetAll();
//     this.neibours.forEach((cell) => {
//       if (cell.classList.contains("_is-active")) {
//         cell.classList.remove("_is-active");
//       }
//     });

//     this.neibours.forEach((cell) => {
//       if (cell == this.tab) {
//         this.activeAdd(this.tab);
//         this.hidden.style.height = this.hidden.scrollHeight + "px";
//       } else {
//         this.notActiveAdd(cell);
//         cell.querySelector(".tab-hidden-js").style.height = "0px";
//       }
//     });
//   }

//   stop() {
//     this.notActiveAdd(this.tab);
//     this.hidden.style.height = "0px";
//   }

//   static resetAll() {
//     document.querySelectorAll(".tab-js").forEach((cell) => {
//       cell.classList.remove("_is-active");
//     });
//     document.querySelectorAll(".tab-hidden-js").forEach((cell) => {
//       cell.classList.remove("_is-active");
//       cell.style.height = "0px";
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   let All = document.querySelectorAll(".tabs-container-js");
//   if (All.length > 0) {
//     All.forEach((cell) => {
//       cell.addEventListener("click", (e) => {

//       });
//     });

//     document.addEventListener("click", (e) => {
//       let target;
//       if (e.target.closest(".tab-js")) {
//         target = e.target.closest(".tab-js");

//         if (e.target.closest(".tab-title-js")) {
//           const tab = new Tab(target);
//           !target.classList.contains("_is-active") ? tab.start() : tab.stop();
//         }
//       } else {
//         Tab.resetAll();
//       }
//     });
//   }
// });

// class Tab {
//   constructor(cell, e) {
//     this.tabContainer = cell;
//     this.tabs = [...this.tabContainer.children];
//     this.target = e.target;
//   }

//   start() {
//     Tab.stopAll();
//     let title = this.target.closest(".tab-title-js");
//     let tab = this.target.closest(".tab-js");
//     let hidden = tab.querySelector(".tab-hidden-js");
//     if (title) {
//       this.tabs.forEach((cell) => {
//         if (cell == tab) {
//           cell.classList.contains("_is-active")
//             ? (cell.classList.remove("_is-active"), (hidden.style.height = 0))
//             : (cell.classList.add("_is-active"),
//               (hidden.style.height = hidden.scrollHeight + "px"));
//         } else {
//           cell.classList.remove("_is-active");
//           cell.querySelector(".tab-hidden-js").style.height = 0;
//         }
//       });
//     }
//   }

//   stop() {
//     this.tabs.forEach((cell) => {
//       cell.classList.remove("_is-active");
//       cell.querySelector(".tab-hidden-js").style.height = 0;
//     });
//   }

//   static stopAll() {
//     document.querySelectorAll(".tab-js").forEach((cell) => {
//       cell.classList.remove("_is-active");
//     });
//     document.querySelectorAll(".tab-hidden-js").forEach((cell) => {
//       cell.style.height = 0;
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   let All = document.querySelectorAll(".tabs-container-js");
//   if (All.length > 0) {
//     All.forEach((cell) => {
//       cell.addEventListener("click", (e) => {
//         const tab = new Tab(cell, e);

//         tab.start();
//       });
//     });
//     document.addEventListener("click", (e) => {
//       if (!e.target.closest(".tabs-container-js")) {
//         Tab.stopAll();
//       }
//     });
//   }
// });
