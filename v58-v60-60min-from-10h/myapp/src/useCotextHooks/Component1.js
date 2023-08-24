import React, { useState } from "react";
import Component2 from "./Component2";
import { UserCotext } from "./UserCotext";

export default function Component1() {
  const [user, setUser] = useState({ id: 101, name: "Lina haque" });
  const [text, setText] = useState("hello world");

  return (
    <UserCotext.Provider value={{ user, text }}>
      <Component2 />
    </UserCotext.Provider>
  );
}
