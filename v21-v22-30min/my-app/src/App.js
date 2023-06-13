import logo from "./logo.svg";
import "./App.css";
import ReactBootstrap from "./Component/ReactBootstrap";
import Test from "./Component/Test";

function App() {
  return (
    <div className="App">
      <ReactBootstrap />
      <Test name="LinaHaque" desc="learning reacjs" />
    </div>
  );
}

export default App;
