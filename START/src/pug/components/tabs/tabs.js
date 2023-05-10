"use ctrict";

export const MyTab = () => {
  let tabs = [...document.querySelectorAll(".tab-js")];

  tabs.forEach((cell) => {
    const title = cell.querySelector(".tab-title-js");
    const hidden = cell.querySelector(".tab-hidden-js");
    var ScrollHeight = hidden.scrollHeight;
    title.addEventListener("click", (e) => {
      function resetAll() {
        const naibous = [...cell.closest(".tabs-container-js").children];
        naibous.forEach((el) => {
          const title = el.querySelector(".tab-title-js");
          const hidden = el.querySelector(".tab-hidden-js");
          title.remAct;
          hidden.remAct;
          el.remAct;

          if (hidden.clientHeight > 0) {
            setTimeout(() => {
              hidden.animate(
                [{ height: `${hidden.clientHeight}px` }, { height: "0px" }],
                {
                  duration: 1000,
                  easing: "ease-in-out",
                }
              );
            }, 0);
            setTimeout(() => {
              hidden.style.height = 0 + "px";
            }, 1000);

            if (
              hidden.closest(".tabs-container-js").closest(".tab-hidden-js")
            ) {
              var temp = hidden
                .closest(".tabs-container-js")
                .closest(".tab-hidden-js");
   setTimeout(() => {
     temp.animate(
       [
         { height: `${temp.scrollHeight}px` },
         { height: `${temp.scrollHeight - hidden.scrollHeight}px` },
       ],
       {
         duration: 1000,
         easing: "ease-in-out",
       }
     );
   }, 0);
   setTimeout(() => {
     temp.style.height = temp.scrollHeight - hidden.scrollHeight + "px";
   }, 0);
              
            }
          }
        });
      }

      function close() {
        setTimeout(() => {
          hidden.animate(
            [
              { minHeight: `${hidden.scrollHeight}px` },
              { minHeight: 0 + "px" },
            ],
            {
              duration: 1000,
              easing: "ease-in-out",
            }
          );
          title.classList.remove("_is-active");
        }, 0);

        setTimeout(() => {
          hidden.style.height = 0 + "px";
          title.classList.remove("_is-active");
          hidden.classList.remove("_is-active");
          cell.classList.remove("_is-active");
        }, 1000);

        // const naibous = [...cell.closest(".tabs-container-js").children];

        // naibous.forEach((el) => {
        //     const title = el.querySelector(".tab-title-js");
        //     const hidden = el.querySelector(".tab-hidden-js");
        //     title.remAct;
        //     hidden.remAct;
        //     el.remAct;
        //      setTimeout(() => {
        //        hidden.animate(
        //          [
        //            { minHeight: `${hidden.scrollHeight}px` },
        //            { minHeight: "0px" },
        //          ],
        //          {
        //            duration: 1000,
        //            easing: "ease-in-out",
        //          }
        //        );
        //      }, 0);

        //      setTimeout(() => {
        //        hidden.style.minHeight = 0 + "px";
        //      }, 1000);

        //     //  if (
        //     //    hidden.closest(".tabs-container-js").closest(".tab-hidden-js")
        //     //  ) {
        //     //    var temp = hidden
        //     //      .closest(".tabs-container-js")
        //     //      .closest(".tab-hidden-js");
        //     //    var tempScrollHeight = temp.scrollHeight;
        //     //    setTimeout(() => {
        //     //      temp.animate(
        //     //        [
        //     //          { minHeight: `${tempScrollHeight}px` },
        //     //          { minHeight: `${tempScrollHeight - addition}px` },
        //     //        ],
        //     //        {
        //     //          duration: 1000,
        //     //          easing: "ease-in-out",
        //     //        }
        //     //      );
        //     //    }, 0);

        //     //    setTimeout(() => {
        //     //      temp.style.minHeight = `${tempScrollHeight - addition}px`;
        //     //      addition = 0;
        //     //    }, 1000);
        //     //  }
        // });
        // function resetAll(el) {
        //   const title = el.querySelector(".tab-title-js");
        //   const hidden = el.querySelector(".tab-hidden-js");
        //   title.remAct;
        //   hidden.remAct;
        //   el.remAct;
        //   hidden.classList.add("_not-active");
        //   // setTimeout(() => {
        //   // hidden.style.maxHeight = 0;
        //   // }, 0);
        // }
        // naibous.forEach((el) => {
        //   resetAll(el);
        // });

        // if (hidden.querySelector(".tabs-container-js")) {
        //   const childrens = [
        //     ...hidden.querySelector(".tabs-container-js").children,
        //   ];
        //   childrens.forEach((el) => {
        //     resetAll(el);
        //   });
        // }
      }

      // ===========================
      function open() {
        setTimeout(() => {
          title.classList.add("_is-active");
          hidden.classList.add("_is-active");
          cell.classList.add("_is-active");

          hidden.animate([{ height: "0px" }, { height: `${ScrollHeight}px` }], {
            duration: 1000,
            easing: "ease-in-out",
          });
        }, 0);

        setTimeout(() => {
          hidden.style.height = ScrollHeight + "px";
        }, 1000);

        if (hidden.closest(".tabs-container-js").closest(".tab-hidden-js")) {
          hidden
            .closest(".tabs-container-js")
            .closest(".tab-hidden-js").style.height =
            hidden.closest(".tabs-container-js").closest(".tab-hidden-js")
              .clientHeight +
            hidden.scrollHeight +
            "px";
        }
      }
      // ===========================

      if (!title.matches("._is-active")) {
        resetAll();
        open();
      }
      // =========================================
      if (title.matches("._is-active")) {
        close();
        cell.remAct;
      }
    });
  });

  // document.addEventListener("click", function (e) {
  //   if (!e.target.closest(".tabs-container-js")) {
  //     tabs.forEach((cell) => {
  //       cell.remAct;
  //       if (cell.querySelector(".tab-title-js").matches("._is-active")) {
  //         cell.querySelector(".tab-title-js").remAct;
  //       }
  //       if (cell.querySelector(".tab-hidden-js").matches("._is-active")) {
  //         cell.querySelector(".tab-hidden-js").remAct;
  //         cell.querySelector(".tab-hidden-js").classList.add("_not-active");
  //         // setTimeout(() => {
  //         cell.querySelector(".tab-hidden-js").style.maxHeight = 0;
  //         // }, 1000);
  //       }
  //     });
  //   }
  // });
};
// export const MyTab = () => {
//   const tabsContainers = [...document.querySelectorAll(".tabs-container-js")];

//   // tabsContainers.forEach((element) => {
//   //   const tabs = [...element.querySelectorAll(".tab-js")];
//   //   tabs.forEach((tab) => {
//   //     const CloseALL = () => {
//   //       tabs.forEach((t) => {
//   //         t.querySelector(".tab-title-js").classList.remove("_is-active");
//   //         t.querySelector(".tab-hidden-js").classList.remove("_is-active");
//   //         t.querySelector(".tab-hidden-js").animate(
//   //           [
//   //             { height: `${t.querySelector(".tab-hidden-js").scrollHeight}px` },
//   //             { height: "0px" },
//   //           ],
//   //           {
//   //             duration: 1000,
//   //             easing: "ease-in-out",
//   //           }
//   //         );
//   //         setTimeout(() => {
//   //           t.querySelector(".tab-hidden-js").style.maxHeight = 0 + "px";
//   //         }, 1000);
//   //       });
//   //     };
//   //     const Close = () => {
//   //       title.classList.remove("_is-active");
//   //       hidden.animate(
//   //         [{ height: `${hidden.scrollHeight}px` }, { height: "0px" }],
//   //         {
//   //           duration: 1000,
//   //           easing: "ease-in-out",
//   //         }
//   //       );
//   //       setTimeout(() => {
//   //         hidden.style.maxHeight = 0 + "px";
//   //       }, 1000);
//   //     };
//   //     const Open = () => {
//   //       title.classList.add("_is-active");
//   //       var scroll = hidden.scrollHeight;

//   //       tab.animate(
//   //         [{ height: hidden.scrollHeight + "px" }, { height: `${scroll}px` }],
//   //         {
//   //           duration: 1000,
//   //           easing: "ease-in-out",
//   //         }
//   //       );
//   //       hidden.animate([{ height: "0px" }, { height: `${scroll}px` }], {
//   //         duration: 1000,
//   //         easing: "ease-in-out",
//   //       });
//   //       hidden.style.maxHeight = scroll + "px";
//   //     };

//   //     const title = tab.querySelector(".tab-title-js");
//   //     const hidden = tab.querySelector(".tab-hidden-js");

//   //     title.addEventListener("click", function () {
//   //       if (!title.matches("._is-active")) {
//   //         // CloseALL();
//   //         // setTimeout(() => {
//   //         Open();
//   //         // }, 1000);
//   //       } else {
//   //         Close();
//   //       }
//   //     });
//   //   });
//   // });
// };
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
