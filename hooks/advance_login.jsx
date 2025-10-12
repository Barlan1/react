import React, { useReducer } from "react";
import { createRoot } from "react-dom/client";

const initialState = { username: "", password: "", loggedIn: false };

function reducer(state, action) {
  switch (action.type) {
    case "setUsername":
      return { ...state, username: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "login":
      if (state.username && state.password) {
        return { ...state, loggedIn: true };
      }
      return state;
    case "logout":
      return { ...initialState };
    default:
      return state;
  }
}

function FormLogin() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.loggedIn) {
    return (
      <div
        style={{ textAlign: "center", background: "black", color: "yellow" }}
      >
        <h1>welcome, {state.username}</h1>
        <button onClick={() => dispatch({ type: "logout" })}>logout</button>
      </div>
    );
  }

  return (
    <div
      style={{
        textAlign: "center",
        background: "black",
        padding: 20,
        margin: 50,
      }}
    >
      <input
        type="text"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: "setUsername", payload: e.target.value })
        }
      />
      <br /> <br />
      <input
        type="text"
        value={state.password}
        onChange={(e) =>
          dispatch({ type: "setPassword", payload: e.target.value })
        }
      />
      <br />
      <br />
      <button onClick={() => dispatch({ type: "login" })}>login</button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<FormLogin />);
