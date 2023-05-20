import React from "react";
import Card from "./components/Card";
import Data from "./data.json";
import List from "./UniqueList/List";

function App() {
  // console.log(Data);
  // let items = [];
  // for (let x = 0; x < Data.length; x++) {
  //   items.push(<Card titleText={Data[x].title} descText={Data[x].desc} />);
  // }
  // items = Data.map((item) => (
  //   <Card titleText={item.title} descText={item.desc} />
  // ));

  return (
    <div>
      <h1 className="headingStyle">To Do App</h1>
      {/* {items} */}
      {Data.map((item, index) => (
        <Card key={index} titleText={item.title} descText={item.desc} />
      ))}
      {/* <Card titleText="Call mother" descText="This is desc1" />; */}
      {/* <Card titleText="Call father" descText="This is desc2" />; */}
      {/* <Card titleText={Data[0].title} descText={Data[0].desc} />;
      <Card titleText={Data[1].title} descText={Data[1].desc} />;
      <Card titleText={Data[2].title} descText={Data[2].desc} />;
      <Card titleText={Data[3].title} descText={Data[3].desc} />;
      <Card titleText={Data[4].title} descText={Data[4].desc} />; */}

      <List />
    </div>
  );
}

export default App;
