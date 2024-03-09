import React, { useEffect, useState } from "react";
import TaskButton from "./TaskButton";

const TaskFooter = ({ event, onEventChange }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    setIsStarted(() => event !== "Stop");
    setIsPause(() => event === "Pause");
  }, [event]);

  const onButtonClick = (clickButton) => {
    if (clickButton === "Start") {
      setIsStarted(true);
    }
    if (clickButton === "Stop") {
      setIsStarted(false);
    }
    if (clickButton === "Pause") {
      setIsPause(true);
    }
    if (clickButton === "Resume") {
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
