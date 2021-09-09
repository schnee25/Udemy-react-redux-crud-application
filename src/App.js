import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return <div>Hello, world!</div>;
//   }
// }
class App extends Component {
  render() {
    return React.createElement("div", null, "Hello, world!!");
  }
}

export default App;
