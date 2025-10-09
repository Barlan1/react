import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function Todo() {
  const [input, setInput] = useState("");
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("board"));
    if (saved) setBoard(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);

  const addTask = () => {
    if (input.trim() === "") return;
    setBoard([...board, { text: input, done: false }]);
    setInput("");
  };

  const toggle = (index) => {
    setBoard(
      board.map((item, i) => {
        if (i === index) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };

  const removeTask = (index) => {
    setBoard(board.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>This is Vika's Todo</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>AddTask</button>
      {board.map((item, i) => (
        <li key={i}>
          <label>
            <input
              type="checkbox"
              checked={item.done}
              onClick={() => toggle(i)}
            />
            <span
              style={{ textDecoration: item.done ? "line-through" : "none" }}
            >
              {item.text}
            </span>
          </label>
          <button onClick={() => removeTask(i)}>remove</button>
        </li>
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Todo />);
