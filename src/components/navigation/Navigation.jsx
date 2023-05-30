import React from "react";
import "./navigation.style.scss";
import { ReactComponent as Logo } from "../../assets/millies_bakery_logo.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="promotion">
        <Link to="/login">
          <div className="account">
            <i class="fa-solid fa-user account-icon" />
            <h5>My Account</h5>
          </div>
        </Link>
      </div>
      <Link className="logo-section" to="/">
        <h3>Millie's</h3>
        <Logo className="logo" />
        <h3>Bakery</h3>
      </Link>
      <div className="nav-bar">
        <ul className="nav-list">
          <Link to="/" className="nav-item">
            <h5>Home</h5>
          </Link>
          <li className="nav-item">About</li>
          <li className="nav-item">Menu</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">FAQs</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
