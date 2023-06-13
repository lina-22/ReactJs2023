import React, { Component } from "react";

class FourthState extends Component {
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

  render() {
    const { count } = this.state;
    return (
      <div>
        <h4>This is initial value: {count}</h4>
        <button
          onClick={this.handleIncrement}
          disabled={count === 10 ? true : false}>
          +
        </button>
      </div>
    );
  }
}

export default FourthState;
