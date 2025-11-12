import React, { useReducer } from "react";
import { createRoot } from "react-dom/client";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1, message: "count incresed" };
    case "decrement":
      if (state.count > 0) {
        return { ...state, count: state.count - 1, message: "count decresed" };
      } else {
        return { ...state, message: "count below zero" };
      }
    case "setUser":
      return {
        ...state,
        user: action.payload,
        message: `welcome, ${action.payload}`,
      };
    case "reset":
      return { ...state, count: 0, message: "reset done" };
    default:
      return state;
  }
}

const initialState = { count: 0, user: "Guest", message: "" };

function MultipleState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Hello, {state.user}</h2>
      <h2>Count, {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => dispatch({ type: "setUser", payload: e.target.value })}
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<MultipleState />);
