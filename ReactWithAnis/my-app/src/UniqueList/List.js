import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
  { id: uuidv4(), title: "todo1", desc: "todo1 description1" },

  { id: uuidv4(), title: "todo2", desc: "todo1 description2" },

  { id: uuidv4(), title: "todo3", desc: "todo1 description3" },

  { id: uuidv4(), title: "todo4", desc: "todo1 description4" },
];
export default function List() {
  //   console.log(uuidv4());
  return (
    <div>
      {todos.map((todo) => {
        const { id, title, desc } = todo;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
}
