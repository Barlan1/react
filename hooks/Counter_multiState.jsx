import React, { useReducer } from "react";
import { createRoot } from "react-dom/client";

const initialState = { count: 0, user: "Guest", message: "" };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: 0, message: "1 added" };
    case "setUser":
      return {
        ...state,
        user: action.payload,
        message: `welcome, ${action.payload}`,
      };
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Hello: {state.user}</h2>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>

      <input
        type="text"
        onChange={(e) => dispatch({ type: "setUser", payload: e.target.value })}
      />
    </div>
  );
}
createRoot(document.getElementById("root")).render(<Counter />);
