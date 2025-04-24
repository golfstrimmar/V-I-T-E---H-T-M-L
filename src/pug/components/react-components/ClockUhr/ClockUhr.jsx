"use client";
import React, { useState, useEffect } from "react";
import styles from "./ClockUhr.module.scss";

const ClockUhr = ({ value, onChange }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);
  // Функция для поиска ближайшей минуты
  const getClosestMinute = (min) => {
    return minutes.reduce((prev, curr) =>
      Math.abs(curr - min) < Math.abs(prev - min) ? curr : prev
    );
  };
  // Инициализация состояний с проверкой value
  const [hour, setHour] = useState(() => {
    if (value && value.includes(":")) {
      return String(Number(value.split(":")[0])).padStart(2, "0");
    }
    return "00";
  });
  const [minute, setMinute] = useState(() => {
    if (value && value.includes(":")) {
      const minValue = Number(value.split(":")[1]);
      return String(getClosestMinute(minValue)).padStart(2, "0");
    }
    return "00";
  });
  const [time, setTime] = useState(value || "00:00");

  // Обновление состояния при изменении value
  useEffect(() => {
    console.log("==value ClockUhr==", value);
    if (value && value.includes(":")) {
      const [h, m] = value.split(":").map(Number);
      setHour(String(h).padStart(2, "0"));
      setMinute(String(getClosestMinute(m)).padStart(2, "0"));
      setTime(value);
    } else {
      setHour("00");
      setMinute("00");
      setTime("00:00");
    }
  }, [value]);

  // Вычисление позиции элементов на циферблате
  const getPosition = (index, total, radius) => {
    const angle = (index / total) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    return { x, y };
  };

  // Обработчик выбора времени
  const handleTimeClick = (hour, minute) => {
    const formattedHour = String(hour).padStart(2, "0");
    const formattedMinute = String(minute).padStart(2, "0");
    const newTime = `${formattedHour}:${formattedMinute}`;

    // Формируем синтетическое событие
    const syntheticEvent = {
      target: {
        value: newTime,
        name: "time", // Добавляем name для совместимости с формами
      },
    };

    setHour(formattedHour);
    setMinute(formattedMinute);
    setTime(newTime);
    onChange(syntheticEvent);
  };

  return (
    <div className={styles["timeUhr"]}>
      <div className={styles["clock-picker"]}>
        <div className={styles["clock-face"]}>
          <div className={styles["clock-face-display"]}>
            <div
              className={`${styles["time-display"]} ${styles["time-display-hour"]}`}
            >
              {hour}
            </div>
            <span>:</span>
            <div className={styles["time-display"]}>{minute}</div>
          </div>
          {hours.map((h) => {
            const { x, y } = getPosition(h, 24, 80);
            return (
              <div
                key={h}
                className={`${styles.hour} ${
                  String(h).padStart(2, "0") === hour ? styles.selected : ""
                }`}
                style={{
                  left: `calc(50% + ${Math.round(x * 1.4)}px)`,
                  top: `calc(50% + ${Math.round(y * 1.4)}px)`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => handleTimeClick(h, Number(minute))}
              >
                {h}
              </div>
            );
          })}
        </div>
        <div className={styles["minutes-face"]}>
          <div className={styles["clock-face-display"]}>
            <div className={styles["time-display"]}>{hour}</div>
            <span>:</span>
            <div
              className={`${styles["time-display"]} ${styles["time-display-hour"]}`}
            >
              {minute}
            </div>
          </div>
          {minutes.map((m) => {
            const { x, y } = getPosition(m / 5, 12, 80);
            return (
              <div
                key={m}
                className={`${styles.minute} ${
                  String(m).padStart(2, "0") === minute ? styles.selected : ""
                }`}
                style={{
                  left: `calc(50% + ${Math.round(x)}px)`,
                  top: `calc(50% + ${Math.round(y)}px)`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => handleTimeClick(Number(hour), m)}
              >
                {m}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClockUhr;
