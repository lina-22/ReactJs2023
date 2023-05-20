import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1 className="headingStyle">To Do App</h1>
      <Card titleText="Call mother" descText="This is desc1" />;
      <Card titleText="Call father" descText="This is desc2" />;
      <Card titleText="Call mother" descText="This is desc3" />;
    </div>
  );
}

export default App;
