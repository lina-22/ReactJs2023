import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo.js";

// App.js->components->Home.js(todos=["item1","item2"])->Todos->Todo

const dummyTodos = ["todo1", "todo2"];
export default function Home() {
  const [todos, setTodos] = useState(dummyTodos);
  const handlenewtodo = (newwTOdo) => {
    console.log(newwTOdo);
    setTodos([...todos, newwTOdo]);
  };

  return (
    <div>
      <NewTodo onNewTodo={handlenewtodo} />
      <Todos todosSendName={todos} />
    </div>
  );
}
