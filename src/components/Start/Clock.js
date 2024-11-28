import React from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <div className="clock-container">
      <p>
        <span>{timerDays}</span> : <span>{timerHours}</span> :{" "}
        <span>{timerMinutes}</span> : <span>{timerSeconds}</span>{" "}
      </p>
    </div>
  );
};

Clock.defaultProps = {
  timerDays: 0,
  timerHours: 0,
  timerMinutes: 0,
  timerSeconds: 0,
};

export default Clock;
