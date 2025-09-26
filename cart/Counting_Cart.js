//path in sandbox   "main": "src/cart/Counting_Cart.js",
//live at https://j98ww2.csb.app/
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./Counting_Cart.css";
function ProgramCounter({ name, price }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <h1>{name} </h1>
      <p className="price">Price: ₹{price}</p>
      <p>Quantity:{count}</p>
      <p className="total">Total Amount: &#8377;{count * price}</p>
      <div className="btn-group">
        <button onClick={() => increment()} className="btn add">
          +
        </button>
        <button onClick={() => decrement()} className="btn sub">
          -
        </button>
        <button onClick={() => reset()} className="btn reset">
          reset
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>My Shop</h1>
      <div className="products">
        <ProgramCounter name="Shirt" price={500} />
        <ProgramCounter name="Tie" price={40} />
        <ProgramCounter name="Shoe" price={1300} />
        <ProgramCounter name="Mobile" price={10000} />
        <ProgramCounter name="Helmat" price={2500} />
        <ProgramCounter name="Bottle" price={100} />
        <ProgramCounter name="Bear" price={170} />
        <ProgramCounter name="Torch" price={300} />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
