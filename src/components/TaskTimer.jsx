import React, { useEffect, useState } from "react";
import Timer from "./Timer";

const TaskTimer = ({ changeTimer }) => {
  //   const [hour, setHour] = useState(0);
  //   const [min, setMin] = useState(0);
  //   const [sec, setSec] = useState(0);
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });
  //   useEffect(() => {
  //     value(hour, min, sec);
  //   }, [hour, min, sec, value]);
  //   const timerChange = () => {
  //     value(timer);
  //   };
  const onValueChange = (value, type) => {
    // if (toChange === "Hour") setHour(value);
    // if (toChange === "Min") setMin(value);
    // if (toChange === "Sec") setSec(value);
    setTime((prev) => {
      const newTimer = { ...prev, [type]: Number(value) };
      console.log(newTimer);
      changeTimer(newTimer);
      return newTimer;
    });
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <Timer
          min={0}
          max={24}
          type={"hour"}
          value={time.hour}
          change={onValueChange}
        />
        <Timer
          min={0}
          max={60}
          type={"min"}
          value={time.min}
          change={onValueChange}
        />
        <Timer
          min={0}
          max={60}
          type={"sec"}
          value={time.sec}
          change={onValueChange}
        />
      </div>
    </div>
  );
};

export default TaskTimer;
