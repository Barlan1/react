import react from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function MyForm() {
  const [name, setName] = useState("vikas");
  const [email, setEmail] = useState("viraj@gmail.com");
  const [mytext, setMytext] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.name)}
        />
      </label>
      <br />
      <div>
        <label>
          Write Here:
          <textarea
            value={mytext}
            onChange={(e) => setMytext(e.target.mytext)}
          />
        </label>
      </div>
      <input type="submit" />
    </form>
  );
}
createRoot(document.getElementById("root")).render(<MyForm />);
