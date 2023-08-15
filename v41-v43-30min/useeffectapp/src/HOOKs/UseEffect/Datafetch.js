import React, { useEffect, useState } from "react";

export default function Datafetch() {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        //   console.log(todos);
      });
  }, []);
  return (
    <div>
      <h1>Todos Data fetch</h1>
      {todos &&
        todos.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
    </div>
  );
}
