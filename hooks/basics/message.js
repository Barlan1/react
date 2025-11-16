import React from "react";

export default function Message({ user, text, time }) {
  return (
    <div>
      <h2>This is Message </h2>
      <strong>{user}</strong>
      <p>{text}</p>
      <small>{time}</small>
    </div>
  );
}
