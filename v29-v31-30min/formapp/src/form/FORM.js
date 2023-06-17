import React, { useState } from "react";

export default function FORM() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChanged = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChanged = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("from is submitted");
    let userinfo = {
      eml: email,
      pass: password,
    };
    console.log(userinfo);
    // console.log(e.target.value);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Login From Created By Lina</h1>

      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChanged}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChanged}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
