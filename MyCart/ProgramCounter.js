\nodebox\src\MyCart\ProgramCounter.js
import React, { useContext, useState } from "react";

import { CartContext } from "./CartContext";

export default function ProgramCounter({ name, price }) {
  const [count, setCount] = useState(0);
  const { total, setTotal } = useContext(CartContext);

  const increment = () => {
    setCount((prev) => prev + 1);
    setTotal((prev) => prev + price);
  };
  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - +1);
      setTotal((prev) => prev - price);
    }
  };
  const reset = () => {
    setTotal((prev) => prev - price * count);
    setCount(0);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1>{name}</h1>
      <p> Price: {price}</p>
      <p>Quantity: {count}</p>
      <p> Total Cost: {price * count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
