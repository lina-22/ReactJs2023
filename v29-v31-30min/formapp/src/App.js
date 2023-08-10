import "./App.css";
// import FORM from "./components/FORM/FORM";
//import FORMM from "./components/FORM/FORMM";
// import FORM22 from "./form/FORMM";
// import Child from "./v33-34-state-lifting/ChildParentData";
// import FORM from "./components2/FORM/FORM.js";
import LinaForm from "./components2/FORM/LinaForm";

// const handleChildData = (childData) => {
//   console.log("App :" + childData);
// };

function App() {
  // const data11 = "I am from parent........";
  return (
    <div className="App">
      {/* <Child data22={data11} onChildData={handleChildData} /> */}
      <LinaForm />
    </div>
  );
}

export default App;
