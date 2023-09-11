import "./App.css";
import React, { useCallback, useState } from "react";
import Message from "./components/Message";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const handleIncrementMessage = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  console.log("App rendering");
  return (
    <div className="App">
      {toggle ? "on" : "off"}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}>
        Toggole
      </button>

      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}>
        Increment
      </button>
      <Message
        numberOfMessages={count}
        onHandleIncrement={handleIncrementMessage}
      />
    </div>
  );
}

export default App;
