import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <p>welcome to the Student portal</p>
      <Link to="/about">Go to about Page</Link>
    </div>
  );
}
