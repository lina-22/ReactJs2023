import logo from "./logo.svg";
import "./App.css";
import UserForm from "./components/RefExample/UserForm";
import UseRefHook from "./components/RefExample/UseRefHook";
import UseReducer from "./usereducercomponents/index";

function App() {
  return (
    <div className="App">
      {/* <UserForm /> */}
      {/* <UseRefHook /> */}
      <UseReducer />
    </div>
  );
}

export default App;
