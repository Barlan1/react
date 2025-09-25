import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is page of Student Portal</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
