import React from "react";
//building type: string, number, boolean, void,null
// user define type: object, array, enum,any,customtype

type UserProps = {
  name: string;
  age: number;
  isRegistered: boolean;
  lang: string[];

  user: {
    name: string;
    age: number;
    isRegistared: boolean;
    lang: string[];
  };
};
//props distructuring {name,age,isRegistered}
const User = ({ name, age, isRegistered, lang, user }: UserProps) => {
  return (
    <div style={{ border: "1px solid", margin: "0.5rem" }}>
      <h2>{name}</h2>
      <h2>{age}</h2>
      {isRegistered ? <p>already registared</p> : <p>not registered</p>}
      <p>
        Speaks:{" "}
        {lang.map((language, index) => {
          return <span key={index}>{language} </span>;
        })}
      </p>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      {isRegistered ? <p>already registared</p> : <p>not registered</p>}
      <p>
        Speaks:{" "}
        {user.lang.map((language, index) => {
          return <span key={index}>{language} </span>;
        })}
      </p>

      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      {isRegistered ? <p>already registared</p> : <p>not registered</p>}
      <p>
        Speaks:{" "}
        {user.lang.map((language, index) => {
          return <span key={index}>{language} </span>;
        })}
      </p>
    </div>
  );
};

export default User;
