import React from "react";
import style from "./form.moudle.css";
import { useState } from "react";

export default function FORM() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChanged = (e) => {
    setName(e.target.value);
  };

  const handleEmailChanged = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChanged = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("form is submitted");
    let userInfo = {
      name: name,
      password: password,
      email: email,
    };
    console.log(userInfo);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChanged}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">email: </label>
          <input
            type="text"
            email="email"
            id="email"
            value={email}
            onChange={handleEmailChanged}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            password="password"
            id="password"
            value={password}
            onChange={handlePasswordChanged}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
