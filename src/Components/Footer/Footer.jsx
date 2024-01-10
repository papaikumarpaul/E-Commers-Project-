import React from "react";
import instargramIcon from "../Assets/instagram_icon.png";
import footerLogo from "../Assets/logo_big.png";
import pintesIcon from "../Assets/pintester_icon.png";
import whatshopIcon from "../Assets/whatsapp_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="footrlogo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instargramIcon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintesIcon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatshopIcon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @2023- ALL Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
