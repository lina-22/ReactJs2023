import React, { useState } from "react";
import User from "./User.js";

export default function Users() {
  const [userName1, setUserName] = useState("Lina haque");
  const [userId1, seUserId] = useState(101);
  const [user1, setUser1] = useState({ id: 123455, name: "kaisan" });

  return (
    <>
      <User userName2={userName1} userId2={userId1} user2={user1} />
    </>
  );
}
