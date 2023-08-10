import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const onHandleChange = (e) => {
    setCount((x) => {
      return x + 1;
    });
  };

  const onHandleChange2 = (e) => {
    setCount((y) => y - 1);
  };

  const onHandleChange3 = () => {
    setCount((count) => count === 0);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <p>Count : {count}</p>
        <button onClick={onHandleChange} disabled={count === 5 ? true : false}>
          +
        </button>
        <button onClick={onHandleChange2} disabled={count === 0 ? true : false}>
          -
        </button>
        <button onClick={onHandleChange3}>0</button>
      </div>
    </div>
  );
}
