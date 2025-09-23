import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <div>
      <h1>This is Api call</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.address.suite}</li>
          //here we have dug info of person with Id. 
          // so inside object there is id of person and address path has more details 
        ))}
      </ul>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
