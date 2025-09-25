import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function App() {
  return (
    <div>
      <h1>Now you see me</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
