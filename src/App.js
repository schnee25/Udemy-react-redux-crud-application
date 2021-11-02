// import React, { Component } from "react";
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => console.log("I am changed!")} />
//       </React.Fragment>
//     );
//   }
// }

// 関数コンポーネント
import React from "react";
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};
const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
