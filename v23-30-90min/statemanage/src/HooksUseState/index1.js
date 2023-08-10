import React, { useState } from "react";

export default function Index1() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrement2 = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const handleIncrement3 = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={handleIncrement}>Hoks+</button>
      <button onClick={handleIncrement2}>HoksPrev+</button>
      <button onClick={handleIncrement3}>HoksPrev+</button>
    </div>
  );
}
