import React, { useState } from "react";
import TaskTimer from "./TaskTimer";
import TaskFooter from "./TaskFooter";
import TaskRunningTimer from "./TaskRunningTimer";

const Task = () => {
  const [event, setEvent] = useState("Stop");
  const [timer, setTimer] = useState({});
  const onEventChange = (event) => {
    console.log("Event change to " + event);
    setEvent(event);
  };
  const captureTimerValue = (timer) => {
    // console.log("Change Value");
    // console.log(timer);
    setTimer(timer);
  };
  return (
    <div>
      {event === "Stop" ? (
        <TaskTimer changeTimer={captureTimerValue} />
      ) : (
        <TaskRunningTimer timer={timer} />
      )}
      <TaskFooter onEventChange={onEventChange} />
    </div>
  );
};

export default Task;
