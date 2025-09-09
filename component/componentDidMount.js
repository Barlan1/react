import React from "react";
import { createRoot } from "react-dom/client";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorColor: "Pink" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favorColor: "Yellow" });
    }, 1000);
  }
  render() {
    return <h2>his is favorite color is {this.state.favorColor} </h2>;
  }
}
createRoot(document.getElementById("root")).render(<Header />);
