import React, { useState } from "react";
import Component2 from "./Component2";

export default function Component1() {
  const [user, setUser] = useState({ id: 101, name: "Lina haque" });
  return (
    <div>
      <Component2 user={user} />
    </div>
  );
}
