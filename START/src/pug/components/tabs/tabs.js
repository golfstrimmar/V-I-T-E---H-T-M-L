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

    // ==closeChildrens=====
    function closeChildrens(cell) {
      const childrens = [...cell.closest(".tabs-container-js").children];
      if (childrens.length > 0) {
        childrens.forEach((el) => {
          if (el !== cell) {
            el.remAct;
            [...el.querySelectorAll(".tab-title-js")].forEach((title) => {
              title.remAct;
            });
            let temp = [...el.querySelectorAll(".tab-hidden-js")];
            temp.forEach((hidden) => {
              if (hidden.clientHeight > 5 && hidden.matches("._is-active")) {
                hidden.animate(
                  [
                    { height: `${hidden.clientHeight}` + "px" },
                    { height: 0 + "px" },
                  ],
                  { duration: 300 }
                );
                setTimeout(() => {
                  hidden.remAct;
                  hidden.style.height = 0;
                }, 250);
              } else {
                hidden.remAct;
                hidden.style.height = 0;
              }
            });
          }
        });
      }
    }
    // ==============================
    function close() {
      title.remAct;
      hidden.remAct;
      cell.remAct;
      [...hidden.querySelectorAll(".tab-title-js")].forEach((title) => {
        title.remAct;
      });
      [...hidden.querySelectorAll(".tab-hidden-js")].forEach((hidden) => {
        hidden.remAct;
        setTimeout(() => {
          hidden.style.height = 0;
        }, 250);
      });
      hidden.animate(
        [{ height: `${hidden.clientHeight}` + "px" }, { height: 0 }],
        {
          duration: 300,
        }
      );
      setTimeout(() => {
        hidden.style.height = 0;
      }, 250);
    }

    // ==openopenopenopenopenopenopen=========================
    function open() {
      if (hidden.closest(".tabs-container-js").closest(".tab-hidden-js")) {
        let temp = hidden
          .closest(".tabs-container-js")
          .closest(".tab-hidden-js");
        console.log(temp);
        temp.style.height = "auto";
      }
      hidden.style.height = ScrollHeight + "px";
      title.addAct;
      hidden.addAct;
      cell.addAct;
      closeChildrens(cell);
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
      cell.remAct;
      cell.querySelectorAll(".tab-title-js").forEach((title) => {
        title.remAct;
      });
      var temp = [...cell.querySelectorAll(".tab-hidden-js")];
      temp.forEach((hidden) => {
        hidden.remAct;
        hidden.animate(
          [{ height: `${hidden.clientHeight}` + "px" }, { height: 0 + "px" }],
          { duration: 300 }
        );
        setTimeout(() => {
          hidden.style.height = 0;
        }, 250);
      });
    });
  }
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".tab-js")) {
      closeGlobal();
    }
  });
};
