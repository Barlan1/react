import React from "react";
import { createRoot } from "react-dom/client";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favcolor: "green" };
  }

  static getDerivedStateFromProps(props, state) {
    return { favcolor: props.favcol };
  }
  render() {
    return <h2>My fav color is {this.state.favcolor}</h2>;
  }
}
createRoot(document.getElementById("root")).render(<Header favcol="black" />);
