import React, { useState, useEffect } from "react";

export default function UseEffectExemple() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  //   const handleOnClick = () => {
  //     // setCount(count +1);
  //     setCount((count) => count + 1);
  //   };
  useEffect(() => {
    // calls with first render and depend on count
    console.log("useEffect");
  }, [count]);
  return (
    <div>
      {console.log("rendering")}
      <h1>Count: {count}</h1>
      {/* <button onClick={handleOnClick}>+</button> */}
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}>
        +
      </button>
      <button
        onClick={() => {
          setIsLoading(!isLoading);
        }}>
        isLoading
      </button>
    </div>
  );
}
