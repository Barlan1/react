import React from "react";
import { createRoot } from "react-dom/client";
import { Meet,Meeto } from "./components.js";
 
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
          <Meet />
          <Meeto />    
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
