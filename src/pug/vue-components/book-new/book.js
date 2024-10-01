"use ctrict";

export const FormFields = () => {
  let FirstName = document.querySelector("#firstname");
  let dateIn = document.querySelector("#date-in");
  let dateOut = document.querySelector("#date-out");
  let BookForm = document.querySelector("#book-form");
  let PlaseOfLiving = document.querySelector("#plase-of-living");

  BookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let hasError = false;
    if (!FirstName.value) {
      FirstName.closest(".text-field").classList.add("_check_invalid");
      setTimeout(() => {
        window.scrollTo({
          top: 175,
          left: 0,
          behavior: "smooth",
        });
      }, 200);
      FirstName.addEventListener("input", (e) => {
        FirstName.closest(".text-field").classList.remove("_check_invalid");
      });
      hasError = true;
    } else if (
      FirstName.closest(".text-field").classList.contains("_check_invalid")
    ) {
      FirstName.closest(".text-field").classList.remove("_check_invalid");
    }

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
    } else if (dateIn.closest("._check").classList.contains("_check_invalid")) {
      dateIn.closest("._check").classList.remove("_check_invalid");
    }

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

    if (!PlaseOfLiving.value) {
      PlaseOfLiving.closest(".select").classList.add("_check_invalid");
      setTimeout(() => {
        window.scrollTo({
          top: 175,
          left: 0,
          behavior: "smooth",
        });
      }, 200);
      hasError = true;
    } else if (
      PlaseOfLiving.closest(".select").classList.contains("_check_invalid")
    ) {
      PlaseOfLiving.closest(".select").classList.remove("_check_invalid");
    }
    if (hasError == false) {
      const params = new URLSearchParams({
        name: FirstName.value.trim(),
        dateIn: dateIn.value.trim(),
        dateOut: dateOut.value.trim(),
        PlaseOfLiving: PlaseOfLiving.value.trim(),
      });
      history.pushState(null, "", `?${params.toString()}`);
      FirstName.value = "";
      dateIn.value = "";
      dateOut.value = "";
      PlaseOfLiving.value = "";
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

      let span = document.querySelector(".select span");
      span.innerHTML = "*Place of residence";
      let select = document.querySelector(".select");
      select.classList.remove("_is-filled");
      alert("Your data has been successfully added.");
      setTimeout(() => {
        window.scrollTo({
          top: 175,
          left: 0,
          behavior: "smooth",
        });
      }, 200);
    }
    // else {
    //   alert("hasError");
    // }
    // else {
    //   localStorage.removeItem("resetDatepicker");
    //   history.pushState(null, "", window.location.pathname);
    // }
  });
};
