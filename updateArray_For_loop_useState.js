import { useState } from "react";
import { createRoot } from "react-dom/client";

function Fun() {
  const [num, setNum] = useState([1, 2, 3, 4]);

  function changeIndex2() {
    const newArray = [...num];

    for (let i = 0; i < newArray.length; i++) {
      if (i === 2) {
        newArray[i] = 100;
      }
    }
    setNum(newArray);
  }

  return (
    <div>
      <h3>show me money</h3>
      <p>{num.join(",")}</p>
      <button onClick={changeIndex2}>change 3rd number</button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Fun />);
