import React, { useState } from "react";

export default function FORMM() {
  const [email, setEmail] = useState("");

  const handleEmailChanged = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("Form submitted");
    let inf = {
      email: email,
    };
    console.log(inf);
    e.preventDefault();
  };

  return (
    <div>
      <h1>This is a form</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
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

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
