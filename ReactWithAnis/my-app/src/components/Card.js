import React from "react";

const toDoTitle = "Call Family";
const toDoDesc = "lorem mllkjkl kjkjklj lkkl";
const date = "26/07/2023";
const headingStyle = {
  backgroundColor: "purple",
  color: "white",
};

export default function Card() {
  return (
    <div>
      <h2 style={headingStyle}>{toDoTitle}</h2>
      <h2 className="headingStyle">{toDoDesc}</h2>
      <h4>{new Date().getFullYear()}</h4>
    </div>
  );
}
