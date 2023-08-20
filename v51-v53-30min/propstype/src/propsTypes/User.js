import React from "react";
import PropTypes from "prop-types";
// console.log(PropTypes);

export default function User(props) {
  //   console.log(props.user2);
  return (
    <div>
      <h2>{props.userName2}</h2>
      <h3>{props.userId2}</h3>
      <h4>{props.user2.id}</h4>
      <h4>{props.user2.name}</h4>
    </div>
  );
}
User.propTypes = {
  //key-value
  userName2: PropTypes.string,
  userId2: PropTypes.number,
  user2: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }),
};

User.defaultProps = {
  userName2: "deafualt Name",
  userId2: 100,
};
