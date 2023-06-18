import React, { useState } from "react";

export default function FORM() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { email, password } = user;

  const handleChange = (e) => {
    const fieldName = e.target.name;
    if (fieldName === email) {
      setUser({ email: e.target.value, password });
    }
    if (fieldName === password) {
      setUser({ email, pasword: e.target.password });
    }
  };

  const handleSubmit = (e) => {
    console.log("from is submitted");

    console.log(user);
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
