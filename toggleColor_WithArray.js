import { useState } from "react";
import { createRoot } from "react-dom/client";

function FunWithArray() {
  const [color, setColor] = useState("blue");

  function toggleColor() {
    setColor((prev) => (prev === "blue" ? "brown" : "blue"));
  }
  return (
    <div>
      <p style={{ color: color }}>This is the color {color}</p>
      <button onClick={toggleColor} style={{ cursor: "pointer" }}>
        Press me
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<FunWithArray />);
