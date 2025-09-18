//eample showing localStarage and clear localstorage by clecking at the element <p>
import { useState } from "react";
import { createRoot } from "react-dom/client";

function Fun() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("color") || "blue";
  });

  function changeColor(newColor) {
    setColor(newColor);
    localStorage.setItem("color", newColor);
  }
  function clearLocalStorage() {
    setColor("");
    localStorage.clear();
  }
  return (
    <div>
      <h2>This is the {color || "no color"}</h2>
      <p>pick a color:</p>

      <span
        style={{ cursor: "pointer", color: "brown", marginRight: "10px" }}
        onClick={() => changeColor("brown")}
      >
        p{" "}
      </span>
      <span
        style={{ cursor: "pointer", color: "gray", marginRight: "10px" }}
        onClick={() => changeColor("gray")}
      >
        p{" "}
      </span>
      <span
        style={{ cursor: "pointer", color: "lightblue", marginRight: "10px" }}
        onClick={() => changeColor("lightblue")}
      >
        p{" "}
      </span>
      <div style={{ marginTop: "15px" }}>
        <span
          style={{ cursor: "pointer", color: "orange" }}
          onClick={clearLocalStorage}
        >
          clear
        </span>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Fun />);
