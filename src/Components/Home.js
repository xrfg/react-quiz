import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <p>
        This is a quiz about HTML, CSS and Javascript, that can be used to
        repeat all the basics that are needed in everyday's life of a web
        developer.
      </p>
      <p>Find out if you know all the details!</p>
      <Link to="/game">
        <button>Let's have fun! &rarr;</button>
      </Link>
    </div>
  );
}
