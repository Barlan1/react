import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  let myData = [
    { id: 1, name: "vikas meena" },
    { id: 1, name: "Divya meena" },
    { id: 1, name: "Jyaa meena" },
    { id: 1, name: "priya meena" },
  ];

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => resolve(myData), 500);
    });
    fetchData
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);
  function AddPost() {
    const newPost = {
      id: posts.length + 1,
      name: "Yogita meena",
    };
    setPosts([...posts, newPost]);
  }

  return (
    <div>
      <h1>My data</h1>
      <button onClick={AddPost}>AddPost</button>
      {posts.map((post) => (
        <p key={post.id}>{post.name}</p>
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
