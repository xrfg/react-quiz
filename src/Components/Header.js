import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h1>My little Quiz</h1>
      </Link>
      <span>check your knowledge!</span>
    </div>
  );
}
