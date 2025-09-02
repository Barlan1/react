import React from "react";
import { createRoot } from 'react-dom/client';
import "./styles.css";
function App() {
    let  x="Banana";
    const y= 4;
    if(y>10){
        x="Orange";
    }
    else x= "Buffalo";
 return (
    <div className="App">
      <h1>Hello World</h1>
          <p> hi there the fruit is {x}</p>
    </div>
  );
}
const myElement= document.getElementById("root");
const root = createRoot(myElement);
root.render(<App />);
