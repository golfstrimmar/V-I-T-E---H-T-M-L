"use strict";

export const FormFields = () => {
  let dateIn = document.querySelector("#date-in");
  let dateOut = document.querySelector("#date-out");
  let BookForm = document.querySelector("#book-form");

  if (BookForm) {
    BookForm.addEventListener("submit", (e) => {
      // Предотвращаем перезагрузку страницы
      e.preventDefault();

      // Очищаем параметры в адресной строке
      const baseUrl = window.location.pathname;
      window.history.pushState(null, "", baseUrl);

      let hasError = false;

      // Проверка поля "Дата заезда"
      if (!dateIn.value) {
        dateIn.closest(".form-field").classList.add("_check_invalid");
        hasError = true;
      } else {
        dateIn.closest(".form-field").classList.remove("_check_invalid");
      }

      // Проверка поля "Дата выезда"
      if (!dateOut.value) {
        dateOut.closest(".form-field").classList.add("_check_invalid");
        hasError = true;
      } else {
        dateOut.closest(".form-field").classList.remove("_check_invalid");
      }

      // Если есть ошибки, адресная строка остаётся очищенной и выполняем прокрутку
      if (hasError) {
        return;
      }

      // Если ошибок нет, добавляем новые параметры в адресную строку
      const params = new URLSearchParams({
        "date-in": dateIn.value,
        "date-out": dateOut.value,
      });

      history.pushState(null, "", `?${params.toString()}`);

      // const newUrl = `${baseUrl}?${params.toString()}`;
      // window.history.pushState(null, "", newUrl);
    });
  }
};
