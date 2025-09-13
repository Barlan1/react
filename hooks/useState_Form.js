{
  /* here is a form application takes input from user
like email, password, submit, and feedback */
}

import { useState } from "react";
import { createRoot } from "react-dom/client";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();

    if (email === "dev@gmail.com" && password === "password") {
      setTimeout(() => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
      }, 2000);
    } else {
      setTimeout(() => {
        setError(true);
        setTimeout(() => setError(false), 2000);
      }, 2000);
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      {success && <p> welcome back Vikas!</p>}
      {error && <p> Are you a hacker or just forgetful?😁</p>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

