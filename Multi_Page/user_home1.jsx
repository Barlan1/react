import React from "react";
import { Link, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div>
      <h2>This is user</h2>
      <p> the use User ID:{id}</p>
      <p>Hello mr DJ mera ganna please say</p>
      <Link to="/">Back to home </Link>
    </div>
  );
}

export default User;
