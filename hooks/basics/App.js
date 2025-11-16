import React from "react";
import Header from "./header";
import Message from "./message";
import { createRoot } from "react-dom/client";
function App() {
  return (
    <div>
      <h2>This is yogita </h2>
      <Header title="My Application" />
      <Message user="Vikas" text="Hello world" time="01:23 Am" />
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
