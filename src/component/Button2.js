import React from "react";
import CounterHOD from "./CounterHOD";

function Button2(props) {
  const { count, increment, decrement } = props;
  return (
    <div className="underline">
      <div className="text-3xl font-bold">B = {count}</div>
      <button
        onClick={increment}
        className="p-3 rounded-lg w-20 h-20 bg-regal-blue"
      >
        increment
      </button>
      <button
        onClick={decrement}
        className="p-3 rounded-lg w-20 h-20 bg-regal-blue"
      >
        decrement
      </button>
    </div>
  );
}

export default CounterHOD(Button2);
