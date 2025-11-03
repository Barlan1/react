import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error", error);
        setLoading(false);
      });
  }, []);
  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email}-{user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<UsersList />);
