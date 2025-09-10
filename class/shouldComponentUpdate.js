import React from "react";
import { createRoot } from "react-dom/client";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favcolor: "Yellow" };
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({ favcolor: "blue" });
  };
  render() {
    return (
      <>
        <h2>This is {this.state.favcolor}</h2>
        <button type="button" onClick={this.changeColor}>
          try me
        </button>
      </>
    );
  }
}
createRoot(document.getElementById("root")).render(<Header />);
