import React from "react";
import { Link, useParams } from "react-router-dom";

function User2() {
  const { id } = useParams();
  return (
    <div>
      <h2>This is user 2</h2>
      <p> the use User ID:{id}</p>
      <p>The world is not fair to Us we gotta prove our Metal</p>
      <Link to="/">Back to home </Link>
    </div>
  );
}

export default User2;
