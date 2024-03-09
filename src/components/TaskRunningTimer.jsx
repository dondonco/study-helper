import React, { useEffect, useState } from "react";
import TimerCard from "./TimerCard";

const TaskRunningTimer = ({ timer, setEvent, pause, updateTimer }) => {
  // const [hour, setHour] = useState(timer.hour);
  // const [min, setMin] = useState(timer.min);
  // const [sec, setSec] = useState(timer.sec);
  const [time, setTime] = useState({ ...timer });
  // const timerInMilliseconds =
  //   1_000 *
  //   Number(currentTimer.hour * 60 + currentTimer.min * 60 + currentTimer.sec);
  // const timerExpired = new Date().getMilliseconds() + timerInMilliseconds;
  // const [currentDate, setCurrentDate] = useState(new Date().toUTCString());

  console.log("h: ", time.hour, "m: ", time.min, "s: ", time.sec);
  useEffect(() => {
    const interval = pause
      ? () => updateTimer(time)
      : setInterval(() => {
          setTime({ ...time, sec: [time.sec] - 1 });
          if (time.sec === 0 && time.min === 0 && time.hour === 0) {
            alert("Timer finished");
            setEvent("Stop");
          }
          if (time.sec === 0 && time.min === 0 && time.hour !== 0) {
            setTime({ ...time, hour: [time.hour] - 1, min: 59, sec: 59 });
          }
          if (time.sec === 0 && time.min !== 0) {
            setTime({ ...time, min: [time.min] - 1, sec: 59 });
          }
        }, 1000);
    return () => clearInterval(interval);
    // }, [hour, min, sec, setEvent]);
  }, [time, setEvent, pause]);

  return (
    <div className="d-flex justify-content-center">
      {/* {hour}:{min}:{sec} */}
      <TimerCard time={time.hour} type={"Hour"} />
      <TimerCard time={time.min} type={"Minutes"} />
      <TimerCard time={time.sec} type={"Seconds"} />
      {/* <TimerCard time={hour} type={"Hour"} />
      <TimerCard time={min} type={"Minutes"} />
      <TimerCard time={sec} type={"Seconds"} /> */}
      {/* {`current: ${currentDate}`}
      {`expired: ${timerExpired} timer: ${timerInMilliseconds}`} */}
    </div>
  );
};

export default TaskRunningTimer;
