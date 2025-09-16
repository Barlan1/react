//useEffect render automatically without using and onclick

import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
function Fun() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  useEffect(() => {
    setCount(count + 1);
    setColor("blue");
  }, []);  //use [] for rendering only once
  return (
    <>
      <h2> press i am {count}</h2>
      <h2> press i am {color}</h2>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Fun />);
