import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

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
  useEffect(() => {
    fetchUsers();
  });
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>loading...</p>;
  if (error) return <p>error:{error}</p>;

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h3>This is list</h3>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 8,
          marginBottom: 15,
          width: 250,
          borderRadius: 8,
          border: "1px solid #ccc",
        }}
      />
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <p>no user found</p>
        )}
      </ul>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<UserList />);
