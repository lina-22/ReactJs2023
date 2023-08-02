import React from "react";
import Card from "./componentsArrayPropsDestructuring/Card";
import Data from "./data.json";

// console.log(Data[0]);
export default function App() {
  return (
    <div>
      <h1 className="headingStyle">Todo App</h1>
      {/* <Card
        className=""
        titleText="Call Mother"
        descriptionText="This is description 1"
      /> */}
      <Card titleText={Data[0].title} descriptionText={Data[0].desc} />
      <Card titleText={Data[1].title} descriptionText={Data[1].desc} />
    </div>
  );
}
