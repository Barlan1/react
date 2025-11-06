import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchPosts() {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      setPosts(res.data);
    } catch (err) {
      setError("failed to fetch");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            marginBottom: 10,
            padding: 10,
          }}
        >
          {post.title}{" "}
        </div>
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
