import React from "react";

export default function Child(props) {
  const data2 = " App: I am from child component";
  const { data } = props;
  props.onChildData(data2);
  return (
    <div>
      <p>I am child components</p>
      <p>{props.data}</p>
      <p>After distructuring: {data}</p>
    </div>
  );
}
