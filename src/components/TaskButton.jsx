import React from "react";

const TaskButton = ({ name, css, onButtonClick }) => {
  return (
    <button className={css} onClick={() => onButtonClick(name)}>
      {name}
    </button>
  );
};

export default TaskButton;
