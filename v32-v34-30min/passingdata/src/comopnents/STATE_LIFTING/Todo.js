import React from "react";

export default function Todo(props) {
  return (
    <div>
      <h2>I am todo</h2>
      <h3>{props.title}</h3>
    </div>
  );
}
