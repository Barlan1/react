import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import User from "./user_home1";
import User2 from "./user2_home1";
import User3 from "./user3_home1";

function Home() {
  return (
    <div>
      <h2>This is home page</h2>
      <p>This is the greatest Award show</p>
      <Link to="/user/1">User vikas</Link>|
      <Link to="/user/2">User2 Prakash</Link>|
      <Link to="/user/3">User3 jai</Link>
    </div>
  );
}

function NotFound() {
  return <h3>Use not Found</h3>;
}

function UserWrapper() {
  const { id } = useParams();

  if (id === "1") return <User />;
  if (id === "2") return <User2 />;
  if (id === "3") return <User3 />;

  return <NotFound />;
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
