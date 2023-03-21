import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h1>IMDb MoViE fInDeR</h1>
        </Link>

        <Link to="/about">
          <p>About the website</p>
        </Link>
      </nav>
    </div>
  );
}
