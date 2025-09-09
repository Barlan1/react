import React from "react";
import { createRoot } from "react-dom/client";
export default class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Barlan",
      model: "Roadstar",
      color: "Blue",
      year: 1992,
    };
  }
  changeColorandYear = () => {
    this.setState({ color: "greslutyen" });
    this.setState({ year: 2000 });
  };

  changeModel = () => {
    this.setState({ model: "MuddyKing" });
  };

  render() {
    return (
      <div>
        <h2>
          This is {this.state.brand} {this.state.model}
        </h2>
        <h2>
          This came in {this.state.year} as {this.state.color}
        </h2>
        <button type="button" onClick={this.changeColorandYear}>
          Change color and year
        </button>
        <button type="button" onClick={this.changeModel}>
          change Model
        </button>
      </div>
    );
  }
}

//createRoot(document.getElementById("root")).render(<Car />);
