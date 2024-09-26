"use ctrict";
export const Search = () => {
  const form = document.querySelector(".header__search");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("search1").value;

    // Обновляем URL в адресной строке с содержимым инпута
    const newUrl = form.action + "?query=" + encodeURIComponent(query);
    window.history.pushState({ path: newUrl }, "", newUrl);

    // AJAX-запрос с использованием fetch
    fetch(newUrl)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("search1").value = "";
      })
      .catch((error) => {
        console.error("error:", error);
      });
  });
};
