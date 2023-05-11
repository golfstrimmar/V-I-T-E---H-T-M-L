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
    localStorage.setItem("SH", 0);

    // :==========resetAll
    function resetAll(el) {
      cell.remAct;
      el.querySelectorAll(".tab-hidden-js").forEach((hidden) => {
        hidden.style.height = 0;
        hidden.remAct;
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
    function close() {
      cell.querySelector(".tab-hidden-js").style.height = 0;
      title.remAct;
      hidden.remAct;
      cell.remAct;
    }
    // ==============================

    title.addEventListener("click", (e) => {
      if (title.matches("._is-active")) {
        close();
      } else if (!title.matches("._is-active")) {
        open();
      }
    });
  };

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
    if (!e.target.closest(".tabs-container-js")) {
      closeGlobal();
    }
  });
};
