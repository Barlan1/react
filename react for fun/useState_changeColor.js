import { createRoot } from "react-dom/client";
import { useState } from "react";
function Fun() {
  const [color, setColor] = useState("");

  function handleColor() {
    setColor("blue");
  }
  return (
    <>
      <h2> This is the {color} </h2>
      <button onClick={handleColor}> press me</button>
    // we can also do this
    // <h2 onClick={handleColor} >This is {color}</h2>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Fun color="green" />);
