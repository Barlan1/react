import { useState } from "react";
import { createRoot } from "react-dom/client";
function ChangeState() {
  const [brand, setBrand] = useState("Mahindra");
  const [model, setModel] = useState("3X0");
  const [year, setFood] = useState(2024);
  const [color, setColor] = useState("Black");

  return (
    <h2>
      I have a {color} {brand} {model} purchased in {year}.
    </h2>
  );
}

createRoot(document.getElementById("root")).render(<ChangeState />);
