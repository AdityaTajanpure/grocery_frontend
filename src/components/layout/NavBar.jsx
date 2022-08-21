import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          <i className="fas fa-heart"></i>
          {"  "}
          <span className="hide-sm">Wishlist</span>
        </Link>
      </li>

      <li>
        <Link to="/dashboard">
          <i className="fas fa-shopping-cart"></i>
          {"  "}
          <span className="hide-sm">Cart</span>
        </Link>
      </li>
      <li>
        <Link onClick={() => {}} to="/login">
          <i className="fas fa-sign-out-alt"></i>
          {"  "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link onClick={() => {}} to="/login">
          <i className="fas fa-sign-out-alt"></i>
          {"  "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-shopping-basket"></i> {"  "}Grocery App
        </Link>
      </h1>
      {true ? authLinks : guestLinks}
    </nav>
  );
};

export default Navbar;
