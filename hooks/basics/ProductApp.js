import React from "react";
import { createRoot } from "react-dom/client";

const products = [
    { id: 1, title: "Laptop", price: 50000 },
    { id: 2, title: "Mouse", price: 500 },
    { id: 3, title: "Keyboard", price: 1200 }
  ];

function ProductApp() {
  return (
    <div>
      <h2>ProductList</h2>
      {products.map((p) => (
        <ul>
         <li key={p.id}>
          {p.title}-{p.price}
         </li>
         </ul>
      ))}
    </div>
  );
}
createRoot(document.getElementById("root")).render(<ProductApp />);
