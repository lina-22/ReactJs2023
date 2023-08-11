import React from "react";

export default function Newtodo(props) {
  props.onHandleNewTodo({ title: "i am new todo" });

  return <div>New Todo</div>;
}
