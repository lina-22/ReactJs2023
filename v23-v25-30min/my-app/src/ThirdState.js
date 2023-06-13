import React, { Component } from "react";

class ThirdState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 2,
    };
  }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h6>The initial value is : {count}</h6>
        <h4>practice Counting</h4>
        <button
          onClick={this.handleIncrement}
          disabled={count === 10 ? true : false}>
          +
        </button>
        <button>-</button>
      </div>
    );
  }
}

export default ThirdState;
