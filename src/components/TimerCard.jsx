import React from "react";

const TimerCard = ({ time, type }) => {
  return (
    <div className="m-2 p-2">
      <p>{time}</p>
      <p>{type}</p>
    </div>
  );
};

export default TimerCard;
