import { useState } from "react";
import { createRoot } from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }
  function Decrease() {
    setCount(count - 1);
  }
  function Reset() {
    setCount(0);
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={Increase}> increase</button> <br />
      <button onClick={Decrease}> decrease</button> <br />
      <button onClick={Reset}> reset</button>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<Counter />);
