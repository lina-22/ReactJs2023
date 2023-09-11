import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function User() {
  //const { userid } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name });
  };
  console.log(searchParams.get("id"));
  return (
    <div>
      <h1>User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Find user</button>
      </form>
      {/* <h3>{userid}</h3> */}
      <h4>{searchParams.get("id")}</h4>
      <h4>{searchParams.get("age")}</h4>
      <h4>{searchParams.get("name")}</h4>
    </div>
  );
}
