import React, { useState } from "react";

function CounterHOD(ButtonComponents) {
  function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 10);
    const decrement = () => setCount(count - 10);
    return (
      <ButtonComponents
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  }
  return Counter;
}

export default CounterHOD;
