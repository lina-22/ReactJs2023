import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Datafetch from "./HOOKs/CustomHooks/Datafetch1";

// import UseEffectExemple from "./HOOKs/UseEffect/UseEffectExemple";

function App() {
  const handleAddNewTodo = () => {
    toast("new todo is added");
  };
  const handleDeleteNewTodo = () => {
    toast("new todo is deleted");
  };
  return (
    <div className="App">
      {/* <Datafetch /> */}
      <h2>Todo App</h2>
      <button onClick={handleAddNewTodo}>Add New Todo</button>
      <button onClick={handleDeleteNewTodo}>Delete New Todo</button>
      <ToastContainer />
    </div>
  );
}

export default App;
