import React from "react";
import { useState } from "react";

export default function FORMM() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChanged = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChanged = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("form is submitted");
    let userInfo = {
      email: email,
      password: password,
    };
    console.log(userInfo);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChanged}
          />
        </div>

        <div>
          <label htmlFor="passwor">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChanged}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
