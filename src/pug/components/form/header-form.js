"use ctrict";
export const HeaderForm = () => {
  const form = document.querySelector("#header-form");
  const firstName = form.querySelector("#firstname");
  const tel = form.querySelector("#tel");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let hasError;
    // ==================================================
    if (!firstName.value.trim()) {
      firstName.closest(".input-field").classList.add("_check_invalid");
      hasError = true;
      firstName.addEventListener("input", (e) => {
        firstName.closest(".input-field").classList.remove("_check_invalid");
      });
    } else {
      firstName.closest(".input-field").classList.remove("_check_invalid");
    }
    // ==================================================
    if (!tel.value.trim()) {
      tel.closest(".input-field").classList.add("_check_invalid");
      hasError = true;
    }

    tel.addEventListener("input", (e) => {
      const value = tel.value.trim();
      const regex = /^\+?\d+$/;

      if (!regex.test(value)) {
        tel.closest(".input-field").classList.add("_check_invalid");
        hasError = true;
      } else {
        tel.closest(".input-field").classList.remove("_check_invalid");
        hasError = false;
      }
    });

    // ==================================================
    if (!hasError) {
      const params = new URLSearchParams({
        name: firstName.value.trim(),
        tel: tel.value.trim(),
      });

      history.pushState(null, "", `?${params.toString()}`);

      firstName.value = "";
      tel.value = "";
      document.querySelector(".popup-js").classList.remove("_is-active");
      document
        .querySelector(".popup__content._is-active")
        .classList.remove("_is-active");

      let success = document.querySelector("#successheader");
      success.classList.add("_is-active");
      setTimeout(() => {
        document.querySelector("body").classList.remove("lock");
        success.classList.remove("_is-active");
      }, 2000);
    }
  });
};
