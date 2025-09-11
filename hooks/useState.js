import { useState } from "react";
import { createRoot } from "react-dom/client";

function Favcolor() {
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>My favorite color is {color}</h2>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        pink
      </button>
      <button type="button" onClick={() => setColor("yelllow")}>
        yellow
      </button>
      <button type="button" onClick={() => setColor("black")}>
        black
      </button>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count:{count}
      </button>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Favcolor />);
