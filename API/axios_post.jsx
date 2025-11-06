import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "hello jack",
          body: "this is body",
          userId: 1,
        }
      );
      console.log("response:", res.data);
      setPosts([res.data]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>created posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid #ccc", borderRadius: 6, padding: 8 }}
        >
          {post.title}
        </div>
      ))}
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
