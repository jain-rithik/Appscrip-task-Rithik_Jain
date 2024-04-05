import React from "react";
import US_Flag from "../../assets/images/US Flag.png"
import star from "../../assets/images/Star.png"
import insta_icon from "../../assets/images/Instagram logo.png"
import LinkedIn_icon from "../../assets/images/linkedin logo.png"
import gpay_icon from "../../assets/images/Gpay logo.png"
import mastercard_icon from "../../assets/images/Mastercard logo.png"
import paypal_icon from "../../assets/images/Paypal logo.png"
import american_express_icon from "../../assets/images/American Express logo.png"
import apple_pay_icon from "../../assets/images/Apple pay logo.png"
import opay_icon from "../../assets/images/O Pay logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="left-section">
          <h1 className="footer-heading">Be the first to know</h1>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-form">
            <form>
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </form>
          </div>
        </div>

        <div className="right-section">
          <div className="contact-section">
            <h1 className="footer-heading">CONTACT US</h1>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className="currency-section">
            <h1 className="footer-heading">currency</h1>
            <div className="currency-flag">
              <img src={US_Flag} alt="Flag of the United States" />
              <img className="star" src={star} alt="star icon" />
              <h2>USD</h2>
            </div>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-left">
          <h1>mettā muse</h1>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="bottom-center">
          <h1 className="footer-heading">Quick Links</h1>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="bottom-right">
          <div className="follow-section">
            <h1 className="footer-heading">Follow Us</h1>
            <div className="social-icon-container">
              <img src={insta_icon} alt="instagram logo" />
              <div className="border">
              <img src={LinkedIn_icon} alt="LinkedIn logo" />
              </div>
            </div>
          </div>
          <div className="accepted-payment-sec">
            <h1>mettā muse Accepts</h1>
            <div className="payment-icon">
              <img src={gpay_icon} alt="Google pay logo" />
              <img src={mastercard_icon} alt="mastercard logo" />
              <img src={paypal_icon} alt="paypal logo" />
              <img src={american_express_icon} alt="american express logo" />
              <img src={apple_pay_icon} alt="apple pay logo" />
              <img src={opay_icon} alt="o pay logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright &copy; 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
