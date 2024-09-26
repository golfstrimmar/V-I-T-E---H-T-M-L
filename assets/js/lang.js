"use strict";

export const Lang = (radio) => {
  radio.addEventListener("change", function () {
    const form = document.getElementById("languageForm");
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();

    window.history.pushState(null, "", "/search?" + queryString);

    fetch(form.action + "?" + queryString)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log("Success:");
      })
      .catch((error) => {
        console.error("error:", error);
      });
  });
};
