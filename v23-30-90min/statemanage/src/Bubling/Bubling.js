import React from "react";

export default function Bubling() {
  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log("child event", event);
  };

  const handleParentClick = (event) => {
    console.log("parent event", event);
  };

  return (
    <div className="parent" onClick={handleParentClick}>
      <h1>Welcome Everyone</h1>
      <button onClick={handleChildClick}>+</button>
    </div>
  );
}
