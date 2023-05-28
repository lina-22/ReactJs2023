import React from "react";
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
      <h1>Nested Lists</h1>
      {users.map((user, index) => (
        <article key={index}>
          <h3>{user.fullName}</h3>
          <p>{user.age}</p>
          {user.phones.map((phone, index) => (
            <div key={index}>
              <p>{phone.home}</p>
              <p>{phone.office}</p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}

export default App;
