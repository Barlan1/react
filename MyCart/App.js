sandbox//\nodebox\src\MyCart
import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import ProgramCounter from "./ProgramCounter";
import { CartProvider, CartContext } from "./CartContext";

function CartSummary() {
  const { total } = useContext(CartContext);
  return <h2>Global Cart Total: {total} </h2>;
}

function App() {
  return (
    <CartProvider>
      <div>
        <h1 style={{ textAlign: "center" }}>My Shop</h1>
        <CartSummary />

        <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
          <ProgramCounter name="Shirt" price={400} />
          <ProgramCounter name="Boot" price={900} />
          <ProgramCounter name="Light" price={200} />
          <ProgramCounter name="crackers" price={100} />
          <ProgramCounter name="racket" price={600} />
        </div>
      </div>
    </CartProvider>
  );
}
createRoot(document.getElementById("root")).render(<App />);
