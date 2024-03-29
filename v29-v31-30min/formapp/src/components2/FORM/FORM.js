import React, { useState } from "react";

export default function FORM() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("form is submitted");
    let userInfo = {
      name,
      email,
      password,
    };
    console.log(userInfo);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              placeholder="Default Input"
              type="text"
              name="name"
              id="name"
              value={name}
              required
              onChange={handleNameChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              required
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
