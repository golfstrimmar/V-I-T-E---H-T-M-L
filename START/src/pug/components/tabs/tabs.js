"use ctrict";

export const MyTab = () => {
  let containers = [...document.querySelectorAll(".tabs")];

  containers.forEach((cont) => {
    let tabs = [...cont.querySelectorAll(".tab-js")];
    tabs.forEach((cell) => {
      ACTIVE(cell, tabs);
    });
  });

  function ACTIVE(cell, tabs) {
    const title = cell.querySelector(".tab-title-js");
    const hidden = cell.querySelector(".tab-hidden-js");
    var ScrollHeight = hidden.scrollHeight;

    // :==========resetAll
    function resetAll(el) {
      el.remAct;
      el.querySelectorAll(".tab-hidden-js").forEach((hidden) => {
      hidden.remAct;
// hidden.animate(
//   [
//     { height: `${hidden.clientHeight}` + "px" },
//     { height: 0 },
//   ],
//   {
//     duration: 1000
    
//   }
// );
// setTimeout(() => {
      hidden.style.height = 0;
// }, 1000);
        

        
      });
      el.querySelectorAll(".tab-title-js").forEach((title) => {
        title.remAct;
      });
    }

    // ==closeChildrens=====
    function closeChildrens(hidden) {
      const childrens = [...hidden.closest(".tabs-container-js").children];
      if (childrens.length > 0) {
        childrens.forEach((el) => {
          resetAll(el);
        });
      }
    }
    // ==============================
    function close() {
      title.remAct;
      hidden.remAct;
      cell.querySelector(".tab-hidden-js").style.height = 0;
      cell.remAct;
    }
    
    // ==openopenopenopenopenopenopen=========================
    function open() {
      tabs.forEach((cell) => {
        if (
          cell
            .querySelector(".tab-hidden-js")
            .querySelector(".tabs-container-js")
        ) {
          cell.querySelector(".tab-hidden-js").style.height = "auto";
        } else {
          cell.querySelector(".tab-hidden-js").style.height = 0;
        }
      });
      closeChildrens(hidden);
      hidden.style.height = ScrollHeight + "px";
      title.addAct;
      hidden.addAct;
      cell.addAct;
    }

    // ==============================

    title.addEventListener("click", (e) => {
      if (title.matches("._is-active")) {
        close();
      } else if (!title.matches("._is-active")) {
        open();
      }
    });
  }

  // ====================
  function closeGlobal() {
    let tabs = [...document.querySelectorAll(".tab-js")];
    tabs.forEach((cell) => {
      cell.querySelectorAll(".tab-hidden-js").forEach((hidden) => {
        hidden.style.height = 0;
        hidden.remAct;
      });
      cell.querySelectorAll(".tab-title-js").forEach((title) => {
        title.remAct;
      });
      cell.remAct;
    });
  }
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".tab-js")) {
      closeGlobal();
    }
  });
};
