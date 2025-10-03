//edit input text
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function EditInput() {
  const [input, setInput] = useState("");
  const [board, setBoard] = useState([]);

  const [editingIndex, setEditingIndex] = useState(null);
  //save tasks from localStorage when app starts
  useEffect(() => {
    setBoard(JSON.parse(localStorage.getItem("board")));
  }, []);
  //save tasks to local Storage whenever board changes
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
        placeholder="type here"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>Add</button>

      {board.map((item, i) => (
        <div key={i}>
          <b>{i + 1}Task:</b>
          {editingIndex === i ? (
            <input
              value={item.text}
              onChange={(e) => {
                const newBoard = [...board];
                newBoard[i].text = e.target.value;
                setBoard(newBoard);
              }}
              onBlur={() => setEditingIndex(null)}
              onKeyDown={(e) => e.key === "Enter" && setEditingIndex(null)}
            />
          ) : (
            <span onClick={() => setEditingIndex(i)}>{item.text}</span>
          )}
          <button onClick={() => removeTask(i)}>removeTask</button>
        </div>
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<EditInput />);
