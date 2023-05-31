import React from "react";
import Subscription from "../subscription/Subscription";
import CopyRight from "../copy-right/CopyRight";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Subscription />
      <div className="footer-body">
        <div className="social-media">
          <h6>Find us from here</h6>
          <div className="social-media-container">
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
        <div className="useful-link">
          <h6>Useful Links</h6>
          <div className="links-container">
            <p>Home</p>
            <p>Ingradients</p>
            <p>About</p>
            <p>Cart</p>
            <p>Cake</p>
            <p>Washlist</p>
          </div>
        </div>
        <div className="contact">
          <h6>Contact</h6>
          <div className="address contact-item-container">
            <i class="fa-solid fa-location-dot"></i>
            <p>50 George Butchart Dr</p>
          </div>
          <div className="phone contact-item-container">
            <i class="fa-solid fa-phone"></i>
            <p>(613)-583-6190</p>
          </div>
          <div className="email contact-item-container">
            <i class="fa-solid fa-envelope"></i>
            <p>wqysdmn0907@gmail.com</p>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
};

export default Footer;
