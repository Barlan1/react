import { useState } from "react";
import { createRoot } from "react-dom/client";
function Counter() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={add}>Increament</button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Counter />);
