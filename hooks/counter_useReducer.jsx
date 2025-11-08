import { useReducer } from "react";
import { createRoot } from "react-dom/client";

function reducer(state,action){
  switch (action.type){
    case "increment":
        return {count:state.count+1};
    case "decrement":
        return {count:state.cunt-1};
    default:
        return state;        
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {count:0});

  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={add}>Increament</button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Counter />);
