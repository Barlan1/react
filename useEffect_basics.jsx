import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component is  rendered", count);
  });

  return (
    <div>
      <h1>Hello Yogita {count}</h1>
      <button onClick={() => setCount(count + 1)}>increse</button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
