import React, { Component } from "react";

// propsは変更不可能　stateは変更可能
const App = () => <Couneter> </Couneter>;
class Couneter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    // const count = this.state.count;
    // this.setState({ count: count + 1 });
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    console.log("render");

    return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
