import React, { Component } from "react";

class EventHanler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: "",
    };
  }

  handleChanged = (e) => {
    this.setState(
      {
        changedValue: e.target.vlaue,
      },
      () => {
        console.log(this.state.changedValue);
      }
    );
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChanged} />
        <p>{this.changedValue}</p>
      </div>
    );
  }
}

export default EventHanler;
