import React from "react";

import "./App.css";
// import User from "./components/User";
import UserDemo from "./components/UserDemo";

function App() {
  // const user1 = {
  //   id: 1,
  //   name: "Kashif",
  //   age: 11,
  //   isRegistared: false,
  //   lang: ["Germany", "English"],
  // };

  const users = [
    {
      id: 1,
      name: "Kashif1",
      age: 11,
    },
    {
      id: 2,
      name: "Kashif2",
      age: 11,
    },
    {
      id: 3,
      name: "Kashif3",
      age: 11,
    },
    {
      id: 4,
      name: "Kashif4",
      age: 11,
    },
  ];
  return (
    <div className="App">
      <h1>User Management</h1>
      {/* <User lang={["Bnagla", "English", "French", "Hindi"]}/> */}
      {/* <User name="Lina" age={32} isRegistered={true} /> */}
      {/* <User
        name="LinaHaque"
        age={32}
        isRegistered={false}
        lang={["Bnagla", "English", "French", "Hindi"]}
        user={user1}
      /> */}

      <UserDemo users={users} />
    </div>
  );
}

export default App;
