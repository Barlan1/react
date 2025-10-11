import React, { useReducer } from "react";
import { createRoot } from "react-dom/client";

function reducer(state, action) {
  if (action.type === "toggle") return !state;
}

function LightSwitch() {
  const [isOn, dispatch] = useReducer(reducer, false);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>The light is {isOn ? "ON" : "OFF"}</h2>
      <button onClick={() => dispatch({ type: "toggle" })}>toggle</button>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<LightSwitch />);
