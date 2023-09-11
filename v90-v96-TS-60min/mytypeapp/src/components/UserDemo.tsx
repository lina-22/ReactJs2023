import React from "react";
type UserDemoProps = {
  users: {
    id: number;
    name: string;
    age: number;
  }[];
};

const UserDemo = ({ users }: UserDemoProps) => {
  console.log(users);
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
};

export default UserDemo;
