import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p>error:{error}</p>;
  return (
    <div>
      <h3>This is list</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<UserList />);
