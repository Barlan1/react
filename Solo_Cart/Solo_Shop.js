\nodebox\src\cart\Whiteboard\Solo_Shop.js

import { useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";

const CartContext = createContext();

function CartProvider({ children }) {
  const [total, setTotal] = useState(0);

  return (
    <CartContext.Provider value={{ total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
}

function ProgramCounter({ name, price }) {
  const { total, setTotal } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const add = () => {
    setTotal(total + price);
    setCount(count + 1);
  };
  const sub = () => {
    if (count > 0) {
      setTotal(total - price);
      setCount(count - 1);
    }
  };

  const reset = () => {
    setTotal(total - count * price);
    setCount(0);
  };

  return (
    <div>
      <p>{name}</p>
      <p>Price: &#8377;{price}</p>
      <p>quantity: {count}</p>
      <p>Total: &#8377;{count * price}</p>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

function Summary() {
  const { total } = useContext(CartContext);
  return <h2>Cart Total: &#8377;{total}</h2>;
}

function App() {
  return (
    <CartProvider>
      <Summary />
      <ProgramCounter name="TV" price={1200} />
      <ProgramCounter name="remote" price={200} />
    </CartProvider>
  );
}

createRoot(document.getElementById("root")).render(<App />);
