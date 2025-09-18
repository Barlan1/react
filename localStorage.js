//example showing localStarage and clear localstorage by clecking at the element <p>
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
      <p onClick={() => changeColor("brown")}>yes </p>
//once we clicked the above <p> element on sand box the page will allways show the changed color which is brown rather old color "blue"
  //so we have to add  clearStorage function and setColor("") empty
  
      <p onClick={clearLocalStorage}>clear</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Fun />);
