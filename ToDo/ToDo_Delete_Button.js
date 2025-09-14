import { useState } from "react";
import { createRoot } from "react-dom/client";

function TodoDelete() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo with delete button</h1>
      <input
        type="text"
        value={task}
        placeholder="Enter"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t}
            <button type="button" onClick={() => deleteTask(i)}>
              Delete{" "}
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<TodoDelete />);

                                                   
