import React, { Component } from "react";

class EventHandler2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: "",
    };
  }

  onHandleChange = (e) => {
    this.setState(
      {
        changedValue: e.target.value,
      },
      () => {
        console.log(e.target.value);
      }
    );
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.onHandleChange} />
        <p>{this.state.changedValue}</p>
      </div>
    );
  }
}

export default EventHandler2;
