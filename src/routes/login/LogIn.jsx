import React from "react";
import LoginForm from "../../components/login-form/LoginForm";
import "./login-page.styles.scss";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

const LogIn = () => {
  return (
    <div>
      <div className="log-in-page">
        <div className="log-in-left">
          <div className="log-in-body">
            <h4>Log in or create an account</h4>
            <h6>New customers</h6>
            <p>
              By creating an account in this store you can go through the
              checkout process faster, save multiple addresses, view and track
              orders and more.
            </p>
          </div>
          <Link to="/register">
            <Button content='create an account' />
          </Link>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LogIn;
