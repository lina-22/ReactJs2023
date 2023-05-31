import React, { useEffect } from "react";

const getData = () => {
  fetch("http://localhost:8080/users")
    .then((response) => response.json())
    .then((data) => console.log("test data : ", data));
};
const addData = () => {
  let user = {
    username: "testmail@mail.com",
    password: "testmail@mail.com1",
  };
  fetch("http://localhost:8080/users/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: user,
  }).then((data) => console.log(data));
};
// (async () => {
//   const rawResponse = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ a: 1, b: "Textual content" }),
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// })();
const TestC = () => {
  useEffect(() => {
    getData();
    addData();
  }, []);
  return <div>test..</div>;
};

export default TestC;
