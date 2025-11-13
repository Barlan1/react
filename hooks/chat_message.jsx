import React, { useReducer, useState } from "react";
import { createRoot } from "react-dom/client";

function reducer(state, action) {
  switch (action.type) {
    case "Add_Message":
      return [...state, action.payload];
    default:
      return state;
  }
}

const initialMessages = [];

function MessageApp() {
  const [input, setInput] = useState("");
  const [messages, dispatch] = useReducer(reducer, initialMessages);

  function handleSend() {
    if (!input.trim()) return;
    const newMessage = { id: Date.now(), user: "You", text: input.trim() };
    dispatch({ type: "Add_Message", payload: newMessage });
    setInput("");
  }

  return (
    <div>
      <h2>Simple Chat</h2>
      {messages.map((msg) => (
        <div key={msg.id}>
          <b>{msg.user}:</b>
          {msg.text}
        </div>
      ))}

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<MessageApp />);
