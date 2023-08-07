import React from "react";

const headingStyle = {
  backgroundColor: "purple",
  color: "white",
};

export default function Card(props) {
  console.log(props);
  const { titleText, descriptionText } = props;
  return (
    <div>
      <h2 style={headingStyle}>{titleText}</h2>
      <h4 className="headingStyle">{descriptionText}</h4>
      {/* <h4 className="headingStyle">{props.descriptionText}</h4> */}
      <h4>{new Date().getFullYear()}</h4>
    </div>
  );
}
