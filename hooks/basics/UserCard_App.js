import React from "react";
import Header from "./header";
import UserCard from "./UserCard_message";
import { createRoot } from "react-dom/client";
function App() {
  return (
    <div>
      <h2>This is yogita </h2>
      <Header title="My Application" />
      <UserCard name="Vikas" age={32} city="Delhi" />
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
