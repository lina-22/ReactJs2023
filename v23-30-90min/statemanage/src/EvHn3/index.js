import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ivalue: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ ivalue: e.target.value }, () => {
      console.log(this.state.ivalue);
    });
  };

  render() {
    return (
      <div>
        <p>Hello</p>
        <input type="text" onChange={this.onChangeHandler} />
        <p>{this.state.ivalue}</p>
      </div>
    );
  }
}

export default Hello;
