import React, { Component } from "react";

class Event_Handler_Class extends Component {
  //   handleClick = () => {
  //     console.log("Hello Me");
  //   };
  constructor(props) {
    super(props);

    this.state = {
      changedValue: "",
    };
  }

  handleOnChange = (e) => {
    this.setState(
      {
        changedValue: e.target.value,
      },
      () => {
        console.log(this.state.changedValue);
      }
    );
  };
  render() {
    return (
      <div>
        {/* Hello world event */}
        <input
          type="text"
          placeholder="Default Input"
          onChange={this.handleOnChange}
        />
        <p>{this.state.changedValue}</p>
        {/* <button onClick={this.handleClick}>click here</button> */}
      </div>
    );
  }
}

export default Event_Handler_Class;
