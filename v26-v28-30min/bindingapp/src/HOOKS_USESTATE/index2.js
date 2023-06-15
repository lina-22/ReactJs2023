import React, { useState } from "react";

export default function HOOKS8USESTATE2() {
  const [count, setCount] = useState(0);

  //   const handleIncrement = () => {
  //     setCount(count + 1);
  //   };

  // change the value base on previous state
  const handleIncrement = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h1>Counting From Functional Component : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

//event.stopPropagation(); for stop to call the parent div or parent related things.
