import { useState, useEffect } from "react";
import "./book.scss";
import Calendar from "@/pug/components/react-components/Calendar/Calendar";
import ClockUhr from "@/pug/components/react-components/ClockUhr/ClockUhr";

export default function Book() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Обнуляем время
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [checkIn, setCheckIn] = useState(today.toLocaleDateString("de-DE")); // Формат DD.MM.YYYY
  const [checkOut, setCheckOut] = useState(
    tomorrow.toLocaleDateString("de-DE")
  );
  const [checkInTime, setCheckInTime] = useState("00:00"); // Время заезда
  const [checkOutTime, setCheckOutTime] = useState("00:00"); // Время выезда
  const [guests, setGuests] = useState(0);
  const [errors, setErrors] = useState("");
  const [openCalendarIn, setOpenCalendarIn] = useState(false);
  const [openCalendarOut, setOpenCalendarOut] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !checkIn ||
      !checkOut ||
      !checkInTime ||
      !checkOutTime ||
      guests === 0
    ) {
      setErrors("Заполните, пожалуйста, все поля формы.");
      setTimeout(() => {
        setErrors("");
      }, 2000);
      return;
    }
    const params = new URLSearchParams({
      checkin: checkIn,
      checkin_time: checkInTime,
      checkout: checkOut,
      checkout_time: checkOutTime,
      guests: guests.toString(),
    });
    window.history.pushState(null, "", `?${params.toString()}`);
    setCheckIn(today.toLocaleDateString("de-DE"));
    setCheckOut(tomorrow.toLocaleDateString("de-DE"));
    setCheckInTime("00:00");
    setCheckOutTime("00:00");
    setGuests(0);
    setOpenCalendarIn(false);
    setOpenCalendarOut(false);
  };

  useEffect(() => {
    if (errors !== "") {
      setTimeout(() => {
        setErrors("");
      }, 2000);
    }
    // if (
    //   (openCalendarIn &&
    //     errors === "" &&
    //     checkIn !== today.toLocaleDateString("de-DE")) ||
    //   (openCalendarOut &&
    //     errors === "" &&
    //     checkOut !== tomorrow.toLocaleDateString("de-DE"))
    // ) {
    //   setOpenCalendarIn(false);
    //   setOpenCalendarOut(false);
    // }
  }, [errors, openCalendarIn, openCalendarOut, checkIn, checkOut]);

  return (
    <div className="book">
      <div className="container">
        {errors && <h3 className="errors center">{errors}</h3>}
        <div className="book__wrap">
          <h2>Бронирование</h2>
          <form className="book__date" onSubmit={handleSubmit}>
            <div
              className="book__section"
              onClick={() => {
                setOpenCalendarIn((prev) => !prev);
                setOpenCalendarOut(false);
              }}
            >
              <div className="input-field">
                <input
                  id="In"
                  type="text"
                  name="checkin"
                  value={`${checkIn} ${checkInTime}`}
                  onChange={(e) => setCheckIn(e.target.value)}
                  placeholder="Дата и время заезда"
                  readOnly
                />
                <label className="text-field__label" htmlFor="In">
                  Заезд
                </label>
              </div>
              {openCalendarIn && (
                <div className="calendar">
                  <Calendar
                    setErrors={setErrors}
                    setDate={setCheckIn}
                    closeCalendar={() => setOpenCalendarIn(false)}
                    minDate={new Date()}
                    initialDate={
                      new Date(checkIn.split(".").reverse().join("-"))
                    }
                  />
                  <ClockUhr
                    value={checkInTime}
                    onChange={(e) => setCheckInTime(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div
              className="book__section"
              onClick={() => {
                setOpenCalendarIn(false);
                setOpenCalendarOut((prev) => !prev);
              }}
            >
              <div className="input-field">
                <input
                  id="Out"
                  type="text"
                  name="checkout"
                  value={`${checkOut} ${checkOutTime}`}
                  onChange={(e) => setCheckOut(e.target.value)}
                  placeholder="Дата и время выезда"
                  readOnly
                />
                <label className="text-field__label" htmlFor="Out">
                  Выезд
                </label>
              </div>
              {openCalendarOut && (
                <div className="calendar">
                  <Calendar
                    setErrors={setErrors}
                    setDate={setCheckOut}
                    closeCalendar={() => setOpenCalendarOut(false)}
                    minDate={
                      checkIn
                        ? new Date(checkIn.split(".").reverse().join("-"))
                        : new Date()
                    }
                    initialDate={
                      new Date(checkOut.split(".").reverse().join("-"))
                    }
                  />
                  <ClockUhr
                    value={checkOutTime}
                    onChange={(e) => setCheckOutTime(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div
              className="book__section"
              onClick={() => {
                setOpenCalendarIn(false);
                setOpenCalendarOut(false);
              }}
            >
              <div className="input-field">
                <input
                  id="Guests"
                  type="number"
                  name="guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  placeholder="Количество гостей"
                  min="0"
                />
                <label className="text-field__label" htmlFor="Guests">
                  Гости
                </label>
              </div>
            </div>
            <button className="btn btn-success form-button" type="submit">
              Найти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
