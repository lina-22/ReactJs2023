import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div>
      {props.t.map((todo, index) => (
        <Todo key={index} to={todo} />
      ))}
    </div>
  );
};

export default Todos;
