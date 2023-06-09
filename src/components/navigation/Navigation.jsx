import React, { useContext } from "react";
import "./navigation.style.scss";
import { ReactComponent as Logo } from "../../assets/millies_bakery_logo.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      {/* top-bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="search-bar">
            <div></div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="top-bar-right">
          {currentUser ? (
          <Link to="/user-account">
            <div className="account">
              <i class="fa-solid fa-user account-icon" />
              <h6>My Account</h6>
            </div>
          </Link>
          ) : (
          <Link to="/login">
            <div className="account">
              <i class="fa-solid fa-user account-icon" />
              <h6>Login</h6>
            </div>
          </Link>
          )}
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>

      {/* logo-section */}
      <Link className="logo-section" to="/">
        <h1>Millie's</h1>
        <Logo className="logo" />
        <h1>Bakery</h1>
      </Link>

      {/* navigation */}
      <div className="nav-bar">
        <ul className="nav-list">
          <Link to="/" className="nav-item">
            <h6>Home</h6>
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
