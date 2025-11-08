import { useReducer } from "react";
import { createRoot } from "react-dom/client";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<Counter />);
