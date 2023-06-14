import React, { Component } from "react";

class SixthState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>This is fisrt count point: {count}</h1>
        <button
          onClick={this.handleIncrement}
          disabled={count === 10 ? true : false}>
          +
        </button>
        <button
          onClick={this.handleDecrement}
          disabled={count === 0 ? true : false}>
          -
        </button>
      </div>
    );
  }
}

export default SixthState;
