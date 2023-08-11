import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  //   console.log(props);
  //   const { todosSendName } = props;
  return (
    <div>
      <h6>I am Todos</h6>

      {props.todosSendName.map((oneTodosSendName, index) => (
        <Todo key={index} sendNameToTodo={oneTodosSendName} />
      ))}
    </div>
  );
}
