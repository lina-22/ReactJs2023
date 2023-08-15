import React, { useEffect, useState } from "react";

const loadingMessage = <p>Todos data is loading</p>;
export default function Datafetch() {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if (!res.ok) {
            throw Error("fecthing is not successfull"); /*1 Error*/
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setTodos(data);
          //   console.log(todos);
          setIsLoading(false);
          setError(null); /*2 Error*/
        })
        .catch((error) => {
          /*3 Error*/
          setError(error.message); /*4 Error*/
          setIsLoading(false);
        });
    }, 2000);
  }, []);
  const todosElement =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Todos Data fetch</h1>
      {error && <p>{error}</p>}
      {/* /* 5 Error*/}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
}
