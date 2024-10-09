"use ctrict";
export const HeaderForm = () => {
  const form = document.querySelector("#header-form");
  const firstName = form.querySelector("#firstname");
  const tel = form.querySelector("#tel");
  // const rating = form.querySelectorAll("[name='ratingForm']");
  // const textarea = form.querySelector("#textarea4");
  // const checkbox = form.querySelector("#agree");
  // const wal = form.querySelector("#wal button span");
  // const walInput = form.querySelector("#wal button input");
  // let selectedRating = "";

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
    // selectedRating = "";
    // rating.forEach((radio) => {
    //   if (radio.checked) {
    //     selectedRating = radio.value;
    //   }
    // });

    // if (!selectedRating) {
    //   hasError = true;
    //   alert("Пожалуйста, выберите оценку.");
    // }
    // ==================================================
    // if (!textarea.value.trim()) {
    //   textarea.closest(".textarea-field").classList.add("_check_invalid");
    //   textarea.addEventListener("input", (e) => {
    //     textarea.closest(".textarea-field").classList.remove("_check_invalid");
    //   });
    //   hasError = true;
    // } else {
    //   textarea.closest(".textarea-field").classList.remove("_check_invalid");
    // }
    // ==================================================
    // if (wal.innerHTML == "custom") {
    //   wal.closest(".send__linia").classList.add("_check_invalid");
    //   wal.addEventListener("input", (e) => {
    //     wal.closest(".send__linia").classList.remove("_check_invalid");
    //   });
    //   hasError = true;
    // } else {
    //   wal.closest(".send__linia").classList.remove("_check_invalid");
    // }
    // ==================================================
    // if (!checkbox.checked) {
    //   checkbox.closest(".fildset-checkbox").classList.add("_check_invalid");
    //   checkbox.addEventListener("change", function () {
    //     if (checkbox.checked) {
    //       checkbox
    //         .closest(".fildset-checkbox")
    //         .classList.remove("_check_invalid");
    //     }
    //   });
    //   hasError = true;
    // } else {
    //   checkbox.closest(".fildset-checkbox").classList.remove("_check_invalid");
    // }
    // ==================================================
    if (!hasError) {
      const params = new URLSearchParams({
        name: firstName.value.trim(),
        // email: email.value.trim(),
        tel: tel.value.trim(),
        // rating: selectedRating,
        // textarea: textarea.value.trim(),
        // checkbox: checkbox.checked,
        // wal: wal.innerHTML,
      });

      history.pushState(null, "", `?${params.toString()}`);

      firstName.value = "";
      // email.value = "";
      tel.value = "";
      // textarea.value = "";
      // selectedRating = "";
      // wal.innerHTML = "custom";
      // rating.forEach((radio) => {
      //   radio.checked = false;
      // });
      // checkbox.checked = false;
      // wal.closest("#wal").classList.remove("_is-filled");

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
