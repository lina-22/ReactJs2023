import React, { Component } from "react";
// Mounting- constructor, render, comonentDidMount/
//Updating-state/props-/
//Unmounting

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  //   return true;
  // }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    {
      console.log("render");
    }
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Lifecycle;
