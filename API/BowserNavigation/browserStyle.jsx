import react from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        {" "}
        The World is changing fast
        <br />
        If you run from the evolution it will destroy you without giving any you
        any chance about the ignorance of your knowledge about the future part
      </p>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About Me </h1>;
      <h3>This is really a greate fun to learn react from the Lord ThySelf</h3>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          margin: "10px",
          background: "#E08746",
          width: "fit-content",
        }}
      >
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/About">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
createRoot(document.getElementById("root")).render(<App />);
