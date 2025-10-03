import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [input, setInput] = useState("");
  const [board, setBoard] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("board");
    if (saved) {
      setBoard(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);

  const add = () => {
    if (input.trim() === "") return;
    setBoard([...board, { text: input }]);
    setInput("");
  };

  const removeTask = (index) => {
    const newBoard = board.filter((_, i) => i !== index);
    setBoard(newBoard);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Hello dear"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>Add</button>
      {board.map((item, i) => (
        <div key={i}>
          <b>{i + 1}:</b>
          {editIndex === i ? (
            <input
              value={item.text}
              onChange={(e) => {
                const newBoard = [...board];
                newBoard[i].text = e.target.value;
                setBoard(newBoard);
              }}
              onBlur={() => setEditIndex(null)}
              onKeyDown={(e) => e.key === "Enter" && setEditIndex(null)}
            />
          ) : (
            <span onClick={() => setEditIndex(i)}>{item.text}</span>
          )}
          <button onClick={() => removeTask(i)}>remove</button>
        </div>
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
