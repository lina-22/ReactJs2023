import React, { useState } from "react";

export default function NewTodo(props) {
  //   const { onNewTdo } = props;
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const textInfo = {
    //   text,
    // };
    // console.log(textInfo);
    props.onNewTodo(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="toDo">New To Do</label>
        <input
          type="text"
          id="toDo"
          name="toDo"
          value={text}
          onChange={handleText}
        />

        <button>Add ToDo</button>
      </form>
    </div>
  );
}
