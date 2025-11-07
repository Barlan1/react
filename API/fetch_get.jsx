import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) return <p>error:{error}</p>;
  if (loading) return <p>Loading..</p>;

  return (
    <div>
      <p>The post</p>
      {posts.map((post) => (
        <div key={post.id} style={{ padding: 10, marginBottom: 5,border:"1px solid gray",borderRadius:6,bottomMargin:5 }}>
          {post.title}
        </div>
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
