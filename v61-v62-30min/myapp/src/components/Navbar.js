import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <br />
      <NavLink to="/blogs" className="nav-link">
        Blogs
      </NavLink>
      <br />
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
}
