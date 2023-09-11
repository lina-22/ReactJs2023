import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/add-blog" className="nav-link">
        Add Blog
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
    </nav>
  );
}
