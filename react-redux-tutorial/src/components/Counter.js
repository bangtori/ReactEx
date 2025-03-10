import React from "react";

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <>
      <div>
        <h1>{number}</h1>
      </div>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </>
  );
};

export default Counter;
