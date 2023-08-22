import React from "react";

export default function Component4({ user }) {
  return (
    <div>
      <h3>{user.id}</h3>
      <h3>{user.name}</h3>
    </div>
  );
}
