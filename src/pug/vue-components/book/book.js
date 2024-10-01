"use strict";

export const FormFields = () => {
  let dateIn = document.querySelector("#date-in");
  let dateOut = document.querySelector("#date-out");
  let BookForm = document.querySelector("#book-form");

  if (BookForm) {
    BookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let hasError = false;
      const baseUrl = window.location.pathname;
      window.history.pushState(null, "", baseUrl);

      // =========================
      if (!dateIn.value) {
        dateIn.closest("._check").classList.add("_check_invalid");
        setTimeout(() => {
          window.scrollTo({
            top: 175,
            left: 0,
            behavior: "smooth",
          });
        }, 200);

        hasError = true;
      } else if (
        dateIn.closest("._check").classList.contains("_check_invalid")
      ) {
        dateIn.closest("._check").classList.remove("_check_invalid");
      }
      // =========================
      // if (!dateOut.value) {
      //   dateOut.closest(".form-field").classList.add("_check_invalid");
      //   hasError = true;
      // } else {
      //   dateOut.closest(".form-field").classList.remove("_check_invalid");
      // }

      if (!dateOut.value) {
        dateOut.closest("._check").classList.add("_check_invalid");
        setTimeout(() => {
          window.scrollTo({
            top: 175,
            left: 0,
            behavior: "smooth",
          });
        }, 200);

        hasError = true;
      } else if (
        dateOut.closest("._check").classList.contains("_check_invalid")
      ) {
        dateOut.closest("._check").classList.remove("_check_invalid");
      }

      if (hasError == false) {
        const params = new URLSearchParams({
          dateIn: dateIn.value.trim(),
          dateOut: dateOut.value.trim(),
        });
        history.pushState(null, "", `?${params.toString()}`);
        dateIn.value = "";
        dateOut.value = "";
        let checks = document.querySelectorAll("._check");
        checks.forEach((car) => {
          car.classList.remove("_is-active");
        });

        localStorage.setItem("resetDatepickerIn", "false");
        localStorage.setItem("resetDatepickerIn", "true");
        localStorage.setItem("resetDatepickerOut", "false");
        localStorage.setItem("resetDatepickerOut", "true");

        let unvisible = document.querySelectorAll("._unvisible");
        unvisible.forEach((car) => {
          car.classList.remove("_unvisible");
        });

        alert("Your data has been successfully added.");
        setTimeout(() => {
          window.scrollTo({
            top: 175,
            left: 0,
            behavior: "smooth",
          });
        }, 200);
      }
    });
  }
};
