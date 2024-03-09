import React, { useState } from "react";
import TaskTimer from "./TaskTimer";
import TaskFooter from "./TaskFooter";
import TaskRunningTimer from "./TaskRunningTimer";

const Task = () => {
  const [event, setEvent] = useState("Stop");
  const [timer, setTimer] = useState({ hour: 0, min: 0, sec: 0 });
  const [isPause, setIsPause] = useState(false);

  const onEventChange = (event) => {
    console.log("Event change to " + event);
    setEvent(event);
    if (event === "Stop") setTimer({ hour: 0, min: 0, sec: 0 });
    if (event === "Pause") setIsPause(true);
    if (event === "Resume") setIsPause(false);
  };

  const captureTimerValue = (time) => {
    setTimer({ ...time });
  };

  const updateTimer = (time) => {
    setTimer({ ...timer });
  };
  return (
    <div>
      {event === "Stop" ? (
        <TaskTimer changeTimer={captureTimerValue} />
      ) : (
        <TaskRunningTimer
          timer={timer}
          setEvent={setEvent}
          pause={isPause}
          updateTimer={updateTimer}
        />
      )}
      <TaskFooter event={event} onEventChange={onEventChange} />
    </div>
  );
};

export default Task;
