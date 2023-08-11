import "./App.css";

import Child from "./comopnents/STATE_LIFTING/Child";
import Todo from "./comopnents/STATE_LIFTING/Todo";
import Newtodo from "./comopnents/STATE_LIFTING/Newtodo";
function App() {
  // const data = "i am from parent(app)";

  // const handleChildData = (childData) => {
  //   console.log(childData);
  // };

  const handleNewTodo = (newTodo) => {
    console.log(newTodo);
  };
  return (
    <div className="App">
      {/* <Child data={data} onChildData={handleChildData} />
      <Todo title="learn react js" /> */}
      <Newtodo onHandleNewTodo={handleNewTodo} />
    </div>
  );
}

export default App;
