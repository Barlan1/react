import { useState } from "react";
import { createRoot } from "react-dom/client";
import react from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <h1>My Todo </h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter"
      />
      <button type="button" onClick={addTask}>
        AddTask{" "}
      </button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}> {t} </li>
        ))}
      </ul>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<TodoApp />);
