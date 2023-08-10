import React, { useState } from "react";

export default function LinaForm() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    console.log("Form is submitted");
    e.preventDefault();
    const userInfo = {
      name,
      email,
      password,
    };

    console.log(userInfo);
  };

  return (
    <div>
      Hello Lina
      <h1>Lina Form submit</h1>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              required
              onChange={handleName}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={handleEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              required
              onChange={handlePassword}
            />
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}
