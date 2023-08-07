import logo from "./logo.svg";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import "./App.css";
import ReactBootstrap from "./Component/ReactBootstrap";
import Test from "./Component/Test";

function App() {
  return (
    <div className="App">
      <ReactBootstrap />
      <Test name="LinaHaque" desc="learning reacjs" />
      <button>
        <FaCanadianMapleLeaf />
      </button>
    </div>
  );
}

export default App;
