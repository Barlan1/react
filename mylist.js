import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Mylist() {
  const fruitlist = ["Banana", "Jackfruit", "Sitafal", "Ámrood"];
  return (
    <ul>
      {fruitlist.map((fruit, index, array) => {
        return (
          <li key={fruit}>
            Number:{fruit}, Index:{index}, array:{array}
          </li>
        );
      })}
    </ul>
  );
}
createRoot(document.getElementById("root")).render(<Mylist />);

                                                   
