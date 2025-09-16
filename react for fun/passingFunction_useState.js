import { createRoot } from "react-dom/client";
import { useState } from "react";

function Fun() {
  const [count, setCount] = useState(0);

  function fff() {
    setCount(count + 12);
  }

return (
    <>
      <h2 onClick={fff}> this is good {count} </h2>
    </>
  );
}
createRoot(document.getElementById("root")).render(<Fun />);
