import React, { useState } from "react";

export default function LinaF() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const { name, email, password } = user;

  // const onHandleName = (e) => {
  //   setUser({ name: e.target.value, email, password });
  // };

  // const onHandleEmail = (e) => {
  //   setUser({ name, email: e.target.value, password });
  // };

  // const onHandlePassword = (e) => {
  //   setUser({ name, email, password: e.target.value });
  // };

  // const handleChange = (e) => {
  //   const fieldName = e.target.name;
  //   if (fieldName === "name") {
  //     setUser({ name: e.target.value, email, password });
  //   }
  //   if (fieldName === "email") {
  //     setUser({ name, email: e.target.value, password });
  //   }
  //   if (fieldName === "password") {
  //     setUser({ name, email, password: e.target.value });
  //   }

  //   e.preventDefault();
  // };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onHandleSubmit = (e) => {
    console.log("Form has been submitted");
    e.preventDefault();

    console.log(user);
  };

  return (
    <div>
      <h1>Reistration Form</h1>
      <form onSubmit={onHandleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={handleChange}
          />
        </div>
        <button>Registration</button>
      </form>
    </div>
  );
}
