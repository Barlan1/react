import { useState } from "react";
import { createRoot } from "react-dom/client";
function Fun() {
  const initialColors = ["", "", "", ""];

  const [colors, setColors] = useState(initialColors);

  function changeColors() {
    const newColors = [...colors];

    for (let i = 0; i < newColors.length; i++) {
      if (i === 0) newColors[i] = "Violet";
      if (i === 1) newColors[i] = "Red";
      if (i === 2) newColors[i] = "Brown";
      if (i === 3) newColors[i] = "gray";
    }
    setColors(newColors);
  }
  return (
    <>
      {colors.map((newcolor, index) => (
        <p key={index} style={{ color: newcolor }}>
          Paragraph {index + 1} : {newcolor}{" "}
        </p>
      ))}
      <button onClick={changeColors}>Press to change </button>
    </>
  );
}
createRoot(document.getElementById("root")).render(<Fun />);
