import logo from "./logo.svg";
import "./App.css";
import UserForm from "./components/RefExample/UserForm";
import UseRefHook from "./components/RefExample/UseRefHook";
import UseReducer from "./usereducercomponents/index";
import Component1 from "./prop_drilling/Component1";

function App() {
  return (
    <div className="App">
      {/* <UserForm /> */}
      {/* <UseRefHook /> */}
      {/* <UseReducer /> */}
      <Component1 />
    </div>
  );
}

export default App;
