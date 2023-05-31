import React from "react";
import TestC from "./TestC";
const users = [
  {
    fullName: "Fahinur Haque",
    age: 32,
    phones: [{ home: "01224455" }, { office: "01224455" }],
  },

  {
    fullName: "Fahinur2 Haque2",
    age: 33,
    phones: [{ home: "01224455" }, { office: "01224455" }],
  },
];

function App() {
  return (
    <div className="App">
      <TestC />
    </div>
  );
}

export default App;
