import React from "react";
import Card from "./componentsArrayPropsDestructuring/Card";
import Data from "./data.json";
import List from "./UniqueList/List";

// console.log(Data[0]);
export default function App() {
  let items = [];
  // for (let x = 0; x < Data.length; x++) {
  //   items.push(
  //     <Card titleText={Data[x].title} descriptionText={Data[x].desc} />
  //   ); }

  items = Data.map((item, index) => (
    <Card key={index} titleText={item.title} descriptionText={item.desc} />
  ));

  return (
    <div>
      {/* <h1 className="headingStyle">Todo App</h1> */}
      {/* <Card
        className=""
        titleText="Call Mother"
        descriptionText="This is description 1"
      /> */}
      {/* <Card titleText={Data[0].title} descriptionText={Data[0].desc} />
      <Card titleText={Data[1].title} descriptionText={Data[1].desc} /> */}
      {/* {items} */}
      {/* {Data.map((item, index) => (
        <Card titleText={item.title} descriptionText={item.desc} />
      ))} */}

      <List />
    </div>
  );
}
