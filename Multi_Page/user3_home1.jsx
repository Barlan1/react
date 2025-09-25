import React from "react";
import { Link, useParams } from "react-router-dom";

function User3() {
  const { id } = useParams();
  return (
    <div>
      <h1>I am the new Owner 3</h1>
      <h3>My Id id {id}</h3>
      <p> lets see how the task wraps</p>
      <Link to="/">Back to home </Link>
    </div>
  );
}

export default User3;
