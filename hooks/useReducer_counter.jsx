import React, { useReducer } from "react";
import { createRoot } from "react-dom/client";

function reducer(state, action) {
  if (action.type === "increment") return state + 1;
  if (action.type === "decrement") return state - 1;
  return state;
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ textAlign: "center", font: "18px Arial" }}>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch({ type: "decrement" })}>
        --- subtract
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>
        +++ increment
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Counter />);
