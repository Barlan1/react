
import React, { useReducer } from "react";
import { createRoot } from "react-dom/client";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "setStep":
      return { ...state, step: action.value };
    default:
      return state;
  }
}

function CounterWithStep() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", font: "18px Arial" }}>
      <h1>Count:{state.count}</h1>

      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({ type: "setStep", value: +e.target.value })}
      />

      <button onClick={() => dispatch({ type: "increment" })}>
        ++incrment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        --decrement
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<CounterWithStep />);
