import React, { useState } from "react";

//name, email, password
export default function Signup() {
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
    e.preventDefault();
    const newUser = { name, email, password };
    console.log(newUser);
  };
  return (
    <div>
      <h2>User signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleNameChange}
          value={name}
        />
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleEmailChange}
          value={email}
        />
        <label htmlFor="password"> Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <button>Signup</button>
      </form>
    </div>
  );
}
