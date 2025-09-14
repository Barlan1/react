import { createRoot } from "react-dom/client";import react from "react";
const tasklist = ["apple", "banana", "cherry"];

function MyList() {
  return (
    <ul>
      {tasklist.map((t, index) => (
        <li key={index}>
          {" "}
          {index} {`=>`} {t}
        </li>
      ))}
    </ul>
  );
}
createRoot(document.getElementById("root")).render(<MyList />);
