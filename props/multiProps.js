import React from "react";
import react from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./styles.css";

export default class Jeep extends React.Component {
  render() {
    return (
      <>
        <h2>
          This is a {this.props.color} jeep a product of {this.props.brand}
        </h2>
        <p>This is a {this.props.year} jeep</p>
      </>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <Jeep color="red" brand="Morris Garage" year={1997} />
);
