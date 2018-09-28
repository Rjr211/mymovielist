import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="bg-primary nav">
    <span className="navbar-brand" to="/">
      My<span class="nav-blue">Movie</span>List
    </span>
    <div>
      <ul className="navbar-nav right">
        <li
          className={
            window.location.pathname === "/"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/movielist"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/movielist" className="nav-link">
            Your List
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
        <a className="waves-effect waves-light btn blue">Login</a>
        <a className="waves-effect waves-light btn blue">Sign Up</a>
      </ul>
    </div>
  </nav>
);

export default Nav;
