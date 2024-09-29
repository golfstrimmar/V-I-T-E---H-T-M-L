"use ctrict";
export const Search = () => {
  const form = document.querySelector(".header__search");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const query = form.querySelector("#search1").value;
      const params = new URLSearchParams({
        search: query.trim(),
      });

      history.pushState(null, "", `?${params.toString()}`);

      fetch(params)
        .then((response) => response.text())
        .then((data) => {
          form.querySelector("#search1").value = "";
        })
        .catch((error) => {
          console.error("error:", error);
        });
    });
  }
};
