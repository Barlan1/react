import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <p key={post.id}>
          {post.name}-{post.email}
        </p>
      ))}
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
