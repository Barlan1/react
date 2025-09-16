import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

function computeColor() {
  console.log(" this is expensive call");
  return 34;
}

function Fun() {
  const [count, setCount] = useState(() => computeColor());   
  return (
    <>
      <h2> press i am color</h2>
      <h2 onClick={() => setCount(count + 2)}>this is good {count} </h2>
    //
 Lazy initialization = giving useState a function so the calculation for initial state runs only once.
    //this will increse count every time we click on h2
    </>
  );
}

createRoot(document.getElementById("root")).render(<Fun />);
