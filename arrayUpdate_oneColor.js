import { useState } from "react";
import { createRoot } from "react-dom/client";

function FunWithArrayColor() {
  const initialArray = [""];
  const [colors, setColors] = useState(initialArray);

  const handleClick = (index, newColor) => {
    setColors((prev) =>
      prev.map((color, i) => (i === index ? newColor : color))
    );
  };

  return (
    <div>
      <p style={{ cursor: "pointer", color: "green" }}>the color is </p>

      <button
        onClick={() => handleClick(0, "brown")}
        style={{
          color: "white",
          backgroundColor: "dodgerblue",
          cursor: "pointer",
          borderRadius: "10px",
          padding: "8px",
          fontWeight: "Bold",
          border: "none",
        }}
      >
        press This{" "}
      </button>
      <p style={{ cursor: "pointer", color: colors[0] }}>
        {" "}
        this is {colors[0]}
      </p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<FunWithArrayColor />);
