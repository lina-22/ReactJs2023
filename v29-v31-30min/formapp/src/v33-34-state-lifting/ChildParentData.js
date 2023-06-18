import React from "react";

export default function ChildParentData(props) {
  const data33 = "i am from child component***********";
  props.onChildData(data33);
  return (
    <div>
      <h1>helo</h1>
      <p>{props.data22}</p>
    </div>
  );
}
