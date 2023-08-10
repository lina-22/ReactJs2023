import React, { Component } from "react";

class EvHnCl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: "",
    };
  }

  onChangeHandler = (e) => {
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
        <input type="text" onChange={this.onChangeHandler} />
        <p>{this.state.changedValue}</p>
      </div>
    );
  }
}

export default EvHnCl;
