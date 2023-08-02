import React from "react";
const date = "26/07/2023";
const headingStyle = {
  backgroundColor: "purple",
  color: "white",
};

const name = ["dog", "cat"];
const [dog, cat] = name;
export default function Card(props) {
  console.log(props);
  const { titleText, descriptionText } = props;
  return (
    <div>
      <h2 style={headingStyle}>{titleText}</h2>
      <h2 className="headingStyle">{props.descriptionText}</h2>
      <h4>{new Date().getFullYear()}</h4>
    </div>
  );
}
