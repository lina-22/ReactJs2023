import React, { Component } from "react";

import HomePage from "./HomePage";
import LogInPage from "./LogInPage";

class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    let element;
    // if (isLoggedIn) {
    //   element = <HomePage />;
    // } else {
    //   element = <LogInPage />;
    // }

    // element = isLoggedIn ? <HomePage /> : <LogInPage />;
    // return <div>{isLoggedIn ? <HomePage /> : <LogInPage />}</div>;
    return <div>{isLoggedIn && <HomePage />}</div>; //short-curcit
  }
}

export default CONDITIONAL_RENDERING;

//first way//

// import React, { Component } from "react";

// import HomePage from "./HomePage";
// import LogInPage from "./LogInPage";

// class CONDITIONAL_RENDERING extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoggedIn: true,
//     };
//   }

//   render() {
//     if (this.state.isLoggedIn) {
//       return <HomePage />;
//     } else {
//       return <LogInPage />;
//     }
//   }
// }

// export default CONDITIONAL_RENDERING;
