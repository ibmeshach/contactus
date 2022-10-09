import React from "react";
import logo1 from "../../assets/logo1.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__con">
        <img src={logo1} alt="" />
        <div className="socials">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
        </div>
        <div className="links">
          <div className="link1">
            <div className="link">
              <p className="link__head">Products</p>
              <p>How it works</p>
              <p>Features</p>
              <p>Browse Categories</p>
              <div className="last__link">
                <p>Kapitify Pro</p>
                <div className="small__info">
                  <p>Coming Soon</p>
                </div>
              </div>
            </div>

            <div className="link">
              <p className="link__head">Support & Resources</p>
              <p>Blog</p>
              <p>FAQs</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="link2">
            <div className="link">
              <p className="link__head">Legal</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright__p1">© 2022 Kapitify Labs</p>
        <p className="copyright__p2">Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
