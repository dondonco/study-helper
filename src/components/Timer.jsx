import React from "react";

const Timer = ({ min, max, type, value, change }) => {
  const updateValue = (e) => {
    let num = e.target.value;
    if (num > max) num = max;
    if (num < min) num = min;
    change(num, type);
  };
  return (
    <div>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={updateValue}
      />
      <h1>{type}</h1>
    </div>
  );
};

export default Timer;
