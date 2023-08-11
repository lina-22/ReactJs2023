import "./App.css";
import Home from "./STATE_LIFTING2/Home";

//App.js -> Components -> Home.js(todos = ["item1", "item2"]) ->Todods -> Todo
//Components -> NewTodo

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
