import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
function Blog() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  const myData = [
    { id: 1, title: "This is first" },
    { id: 2, title: "This is second" },
    { id: 3, title: "This is third" },
  ];

  useEffect(() => {
    const p = new Promise((resolve) => {
      setTimeout(() => resolve(myData), 500);
    });
    p.then((data) => setPosts(data)).catch((err) => console.log(err));
  }, []);

  function addPost() {
    if (newTitle.trim == "") return;
    let newPost = {
      id: posts.length,
      title: newTitle,
    };
    setPosts([...posts, newPost]);
    setNewTitle("");
  }

  return (
    <div>
      <h1>We add new Post by input</h1>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={addPost}>AddPost</button>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
createRoot(document.getElementById("root")).render(<Blog />);
