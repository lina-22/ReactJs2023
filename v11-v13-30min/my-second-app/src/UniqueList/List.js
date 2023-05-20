import * as React from "react";
import { v4 as uuidv4 } from "uuid";
const todos = [
  {
    id: uuidv4(),
    title: "todo1",
    desc: "todo1 description1",
  },
  {
    id: uuidv4(),
    title: "todo2",
    desc: "todo2 description 2",
  },
  {
    id: uuidv4(),
    title: "todo3",
    desc: "todo3 description 3",
  },
  {
    id: uuidv4(),
    title: "todo4",
    desc: "todo4 description 4",
  },
];

const List = () => {
  console.log(uuidv4());
  return (
    <div>
      {todos.map((todo) => {
        const { id, title, desc } = todo;
        return (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
