"use strict";

export const Lang = (radio) => {
  radio.addEventListener("change", function () {
    const form = document.getElementById("languageForm");
    const formData = new FormData(form);
    const params = new URLSearchParams(formData).toString();
    history.pushState(null, "", `?${params.toString()}`);

    fetch(form.action + "?" + params)
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
