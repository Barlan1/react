import { useRef, useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  function Increment() {
    countRef.current++;
    setCount(count + 1);
    console.log("The count is : ", countRef);
  }
  return (
    <div className="App">
      <h2>The state Count is: {count} </h2>
      <h2>the CountRef: {countRef.current}</h2>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}
