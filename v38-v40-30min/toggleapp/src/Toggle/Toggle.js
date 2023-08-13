import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  return (
    <div style={{ margin: "1rem", backgroundColor: "blue", padding: "1rem" }}>
      {toggle && (
        <p>loremkkgvfjgvkfjvkf nfgvklfjvkfgvkfj kkdfjvkfjv jkljklefvjklf</p>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}>
          {toggle ? "Hide" : "Show"}
        </button>
        {/* <button
          onClick={() => {
            setToggle(false);
          }}>
          Hide
        </button> */}
      </div>
    </div>
  );
}
