import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

function computeColor() {
  console.log(" this is expensive call");
  return 34;
}

function Fun() {
  const [count, setCount] = useState(() => computeColor());

  function xxx() {
    setCount(count + 10);
  }
 
  return (
    <>
      <h2> press i am color</h2>
      <button onClick={xxx}>this is good {count} </button>
    </>
  );
}


