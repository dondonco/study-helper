import React from "react";

const TaskRunningTimer = ({ timer }) => {
  return (
    <div>
      {timer.hour} : {timer.min} : {timer.sec}
    </div>
  );
};

export default TaskRunningTimer;
