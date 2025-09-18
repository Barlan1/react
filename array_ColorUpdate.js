import { useState } from "react";
import { createRoot } from "react-dom/client";
function FunWithArray() {
  const initialColors = ["", "", "", ""];
  const [colors, setColors] = useState(initialColors);

  const handleClick = (index, newColor) => {
    setColors((prev) =>
      prev.map((color, i) => (i === index ? newColor : color))
    );
  };
  return (
    <>
      <p>the color are</p>
      <p onClick={() => handleClick(0, "red")} style={{ color: colors[0] }}>
        This is {colors[0]}
      </p>
      <p onClick={() => handleClick(1, "green")} style={{ color: colors[1] }}>
        This is {colors[1]}
      </p>
      <p onClick={() => handleClick(2, "Blue")} style={{ color: colors[2] }}>
        This is {colors[2]}
      </p>
      <p onClick={() => handleClick(3, "Violet")} style={{ color: colors[3] }}>
        This is {colors[3]}
      </p>
    </>
  );
}

createRoot(document.getElementById("root")).render(<FunWithArray />);
