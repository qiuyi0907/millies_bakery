import React from "react";
import "./navigation.style.scss";
import {ReactComponent as Logo} from "../../assets/millies_bakery_logo.svg"
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="promotion"></div>
      <Link className="logo-section" to='/'>
        <h4>Millie's</h4>
        <Logo className="logo"/>
        <h4>Bakery</h4>
      </Link>
      <div className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
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
