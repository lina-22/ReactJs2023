import React, { Component } from "react";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";

class CONDITIONAL_REDARING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    let element;

    element = isLoggedIn ? <Homepage /> : <LoginPage />;

    return <div>{element}</div>;
    // return <div>{isLoggedIn && <Homepage />}</div>;

    //   render() {
    //     // const { isLoggedIn } = this.state;
    //     // let element;
    //     // if (isLoggedIn) {
    //     //   element = <Homepage />;
    //     // } else {
    //     //   element = <LoginPage />;
    //     // }
    //     // return <div>{element}</div>;
  }
}

export default CONDITIONAL_REDARING;
