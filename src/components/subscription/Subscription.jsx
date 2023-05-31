import React from "react";
import "./subscription.styles.scss";

const Subscription = () => {
  return (
    <div className="subscription">
      <h3>Newsletter</h3>
      <p>Subscribe for the latest product for your dogs</p>
      <form>
        <input
          type="email"
          placeholder="Enter your email here"
          className="subscribe-input"
        ></input>
        <button type="subscribe" className="subscribe-submit">
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Subscription;
