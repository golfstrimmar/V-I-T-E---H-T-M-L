"use ctrict";
export const ContactsForm = () => {
  const form = document.querySelector("#contacts-form");
  const firstName = form.querySelector("#firstname");
  const email = form.querySelector("#email");
  const subject = form.querySelector("#subject");
  const textarea = form.querySelector("#contactstextarea");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let hasError = false;

    if (!firstName.value.trim()) {
      firstName.closest(".input-field").classList.add("_check_invalid");
      hasError = true;
      firstName.addEventListener("input", (e) => {
        firstName.closest(".input-field").classList.remove("_check_invalid");
      });
    } else {
      firstName.closest(".input-field").classList.remove("_check_invalid");
    }

    if (!email.value.trim()) {
      email.closest(".input-field").classList.add("_check_invalid");
      email.addEventListener("input", (e) => {
        email.closest(".input-field").classList.remove("_check_invalid");
      });
      hasError = true;
    } else {
      email.closest(".input-field").classList.remove("_check_invalid");
    }

    if (!subject.value.trim()) {
      subject.closest(".input-field").classList.add("_check_invalid");
      subject.addEventListener("input", (e) => {
        subject.closest(".input-field").classList.remove("_check_invalid");
      });
      hasError = true;
    } else {
      subject.closest(".input-field").classList.remove("_check_invalid");
    }

    if (!textarea.value.trim()) {
      textarea.closest(".textarea-field").classList.add("_check_invalid");
      textarea.addEventListener("input", (e) => {
        textarea.closest(".textarea-field ").classList.remove("_check_invalid");
      });
      hasError = true;
    } else {
      textarea.closest(".textarea-field").classList.remove("_check_invalid");
    }

    // ==================================================
    if (hasError) {
      setTimeout(() => {
        window.scrollTo({
          top: form.offsetTop - 100,
          left: 0,
          behavior: "smooth",
        });
      }, 200);
    } else {
      const params = new URLSearchParams({
        name: firstName.value.trim(),
        email: email.value.trim(),
        subject: subject.value.trim(),
        message: textarea.value.trim(),
      });

      history.pushState(null, "", `?${params.toString()}`);
      document.querySelector(".popup ").classList.remove("_is-active");
      firstName.value = "";
      email.value = "";
      subject.value = "";
      textarea.value = "";
    }
  });
};
