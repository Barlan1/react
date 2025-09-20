import react from "react";
import { createRoot } from "react-dom/client";

let name = "Yogita";
const div = (
  <div>
    <button>Hello</button>
    <p>Paragraph of {2 + 2}</p>
    <p> my name is {name}</p>
    <p>Cotton Socks</p>
    <p>Price: $10</p>
    <button>Cart</button>
  </div>
);

createRoot(document.getElementById("root")).render(div);
