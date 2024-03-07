import React, { useState } from "react";
import TaskButton from "./TaskButton";

const TaskFooter = ({ onEventChange }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const onButtonClick = (clickButton) => {
    if (clickButton === "Start") {
      console.log("Click start");
      setIsStarted(true);
    }
    if (clickButton === "Stop") {
      console.log("Click stop");
      setIsStarted(false);
    }
    if (clickButton === "Pause") {
      console.log("Click pause");
      setIsPause(true);
    }
    if (clickButton === "Resume") {
      console.log("Click resume");
      setIsPause(false);
    }
    onEventChange(clickButton);
  };
  return (
    <div>
      {isStarted ? (
        <>
          <TaskButton
            name="Stop"
            css="btn btn-danger"
            onButtonClick={onButtonClick}
          />
          {isPause ? (
            <TaskButton
              name="Resume"
              css="btn btn-danger"
              onButtonClick={onButtonClick}
            />
          ) : (
            <TaskButton
              name="Pause"
              css="btn btn-danger"
              onButtonClick={onButtonClick}
            />
          )}
        </>
      ) : (
        <div>
          <TaskButton
            name="Start"
            css="btn btn-primary"
            onButtonClick={onButtonClick}
          />
        </div>
      )}
    </div>
  );
};

export default TaskFooter;
