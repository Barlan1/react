import { useState } from "react";
import { createRoot } from "react-dom/client";
function FunWithArray() {
  const [numbers, setNumbers] = useState([22, 33, 44, 55]);

  function changeNum() {
    setNumbers((numbers) =>
      numbers.map((arr, index) => (index === 2 ? 99 : arr))

//loop through array
//if index is 2, replace with 99;
//otherwise keep the same number

    );
  }
  return (
    <>
      <p>the numbers are</p>
      <p>{numbers.join(",")}</p>
      <button onClick={changeNum}>change number</button>
    </>
  );
}

createRoot(document.getElementById("root")).render(<FunWithArray />);
