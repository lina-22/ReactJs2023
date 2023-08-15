import React, { useEffect, useState } from "react";
import Datafetch from "../UseEffect/Datafetch";
import useFetch from "./useFetch";

export default function Datafetch1() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const loadingMessage = <p>Todos data is loading</p>;
  const errorMessage = <p>{error}</p>;
  const todosElement =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Todos Data fetch</h1>
      {error && errorMessage}
      {/* /* 5 Error*/}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
}
