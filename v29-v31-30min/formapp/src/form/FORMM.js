import React, { useState } from "react";

export default function FORMM() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("Form submitted");
    console.log(user);
    // console.log(e.target.value);
    e.preventDefault();
  };

  return (
    <div>
      <h1>This is a form...</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name: </label>
          <input
            type="text"
            email="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">email: </label>
          <input
            type="email"
            email="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            password="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
