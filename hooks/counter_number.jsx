import React, { useReducer } from "react";
import { createRoot } from "react-dom/client";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.value, message: "" };

    case "decrement":
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - action.value,
          message: "",
        };
      } else {
        return { ...state, message: "value can not below zero" };
      }

    case "reset":
      return { count: 0, message: "" };
    case "setValue":
      return { ...state, count: action.value, message: "" };
    default:
      return state;
  }
}

const initialState = { count: 0, message: "" };
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>Count: {state.count}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <input
          type="number"
          value={state.count}
          onChange={(e) => dispatch({ type: "setValue", value: Number })}
        />
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          +1
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}> reset</button>
      </div>
      {state.message && (
        <p style={{ color: "red", marginTop: 20 }}>{state.message}</p>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Counter />);
