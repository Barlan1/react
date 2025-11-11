import { useReducer } from "react";
import { createRoot } from "react-dom/client";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + state.step };

    case "setCount":
      return { ...state, count: Number(action.value) };
    case "setStep":
      return { ...state, step: Number(action.value) };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Count: </h3>
      <input
        type="number"
        value={state.count}
        onChange={(e) => dispatch({ type: "setCount", value: e.target.value })}
      />
      <h3>Step:</h3>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({ type: "setStep", value: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "add" })}>+step</button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Counter />);
