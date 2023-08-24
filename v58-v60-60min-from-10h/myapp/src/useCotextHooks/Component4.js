import React, { useContext } from "react";
import { UserCotext } from "./UserCotext";
export default function Component4() {
  const { user, text } = useContext(UserCotext);
  console.log(user);
  return (
    <div>
      <h2>{text}</h2>
      <h3>{user.id}</h3>
      <h3>{user.name}</h3>
    </div>
  );
}
