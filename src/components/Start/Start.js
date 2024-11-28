import React, { useEffect, useState } from "react";
import  styles from "./Start.module.css";
import Clock from "./Clock";
import Image from "next/image";

const Start = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  useEffect(() => {
    const startTimer = () => {
      const countDownDate = new Date("Nov 30, 2024").getTime();

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
          clearInterval(interval);
        } else {
          const days = Math.floor(distance / (24 * 60 * 60 * 1000));
          const hours = Math.floor(
            (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
          );
          const minutes = Math.floor(
            (distance % (60 * 60 * 1000)) / (60 * 1000)
          );
          const seconds = Math.floor((distance % (60 * 1000)) / 1000);

          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);

      return () => clearInterval(interval);
    };

    startTimer();
  }, []);

  return (
    <div className={styles["start"]}>
      <div className={styles["start-right"]}>
        <p>
          A day in the life. Please join us as we walk through a day of an Ed
          student. Request a tour.
        </p>
      </div>

      <div className={styles["start-left"]}>
        <p>Admissions to Competition Starts in</p>
        <Clock
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      </div>
    </div>
  );
};

export default Start;
