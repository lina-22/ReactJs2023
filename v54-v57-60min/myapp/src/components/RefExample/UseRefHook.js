import React, { useRef } from "react";

export default function UseRefHook() {
  const userNameRef = useRef();
  const userPasswordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const userPassword = userPasswordRef.current.value;
    userNameRef.current.style.color = "red";
    console.log({ userName, userPassword });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">UserName:</label>
        <input type="text" id="userName" ref={userNameRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={userPasswordRef} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
