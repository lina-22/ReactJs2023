import React from "react";

import "./App.css";

// import DataFetch from "./components/DataFetch";
// import Button from "./components/Button";
// import Post from "./components/Post";
import ButtonStyle from "./components/ButtonStyle";

function App() {
  return (
    <div className="App">
      {/* <h1>User Management</h1>
      <DataFetch status="success" /> */}
      {/* <h1>Children Props</h1> */}
      {/* <Button>Click me</Button> */}
      {/* <Post /> */}
      <h1>Style Props</h1>
      <ButtonStyle btnStyle={{ backgroundColor: "green", color: "red" }} />
    </div>
  );
}

export default App;
