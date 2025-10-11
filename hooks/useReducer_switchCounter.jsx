import React, { useReducer } from "react";
import { createRoot } from "react-dom/client";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ textAlign: "center", font: "18px Arial" }}>
      <h1>Count:{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        ++Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        --decrement
      </button>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<Counter />);
