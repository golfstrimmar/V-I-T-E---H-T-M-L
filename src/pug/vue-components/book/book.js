"use ctrict";

export const FormFields = () => {
  let FirstName = document.querySelector("#firstname");
  let dateIn = document.querySelector("#date-in");
  let dateOut = document.querySelector("#date-out");
  let BookForm = document.querySelector("#book-form");
  let PlaseOfLiving = document.querySelector("#plase-of-living");

  BookForm.addEventListener("submit", (e) => {
    if (!FirstName.value) {
      FirstName.closest(".text-field").classList.add("_check_invalid");
      setTimeout(() => {
        window.scrollTo({
          top: 175,
          left: 0,
          behavior: "smooth",
        });
      }, 200);

      e.preventDefault();
    } else if (
      FirstName.closest(".text-field").classList.contains("_check_invalid")
    ) {
      FirstName.closest(".text-field").classList.remove("_check_invalid");
    }

    if (!dateIn.value) {
      dateIn.closest(".form-field").classList.add("_check_invalid");
      setTimeout(() => {
        window.scrollTo({
          top: 175,
          left: 0,
          behavior: "smooth",
        });
      }, 200);

      e.preventDefault();
    } else if (
      dateIn.closest(".form-field").classList.contains("_check_invalid")
    ) {
      dateIn.closest(".form-field").classList.remove("_check_invalid");
    }

    if (!dateOut.value) {
      dateOut.closest(".form-field").classList.add("_check_invalid");
      setTimeout(() => {
        window.scrollTo({
          top: 175,
          left: 0,
          behavior: "smooth",
        });
      }, 200);

      e.preventDefault();
    } else if (
      dateOut.closest(".form-field").classList.contains("_check_invalid")
    ) {
      dateOut.closest(".form-field").classList.remove("_check_invalid");
    }

    if (!PlaseOfLiving.value) {
      PlaseOfLiving.closest(".form-field").classList.add("_check_invalid");
      setTimeout(() => {
        window.scrollTo({
          top: 175,
          left: 0,
          behavior: "smooth",
        });
      }, 200);

      e.preventDefault();
    } else if (
      PlaseOfLiving.closest(".form-field").classList.contains("_check_invalid")
    ) {
      PlaseOfLiving.closest(".form-field").classList.remove("_check_invalid");
    }
  });
};
