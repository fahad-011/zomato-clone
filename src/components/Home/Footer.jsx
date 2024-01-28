import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Footer({ zomatoLogo, appleStore, playStore }) {
  return (
    <footer className="container footer">
      <div className="footer_section1">
        <img src={zomatoLogo} alt="zomato logo" />
        <div className="section1__buttonContainer">
          <button>
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="Indian Flag"
              style={{ width: "17px" }}
            />
            India
          </button>
          <button>
            <i className="fa fa-globe"></i>English
          </button>
        </div>
      </div>
      <div className="navigation_container">
        <div className="link__container">
          <h5>ABOUT ZOMATO</h5>
          <Link to="#" className="footer__link">
            Who we are
          </Link>
          <Link to="#" className="footer__link">
            Blogs
          </Link>
          <Link to="#" className="footer__link">
            Work with us
          </Link>
          <Link to="#" className="footer__link">
            Investor Relations
          </Link>
          <Link to="#" className="footer__link">
            Report Fraud
          </Link>
          <Link to="#" className="footer__link">
            Contact Us
          </Link>
        </div>

        <div className="link__container">
          <h5>ZOMAVERSE</h5>
          <Link to="#" className="footer__link">
            Zomato
          </Link>
          <Link to="#" className="footer__link">
            Feeding India
          </Link>
          <Link to="#" className="footer__link">
            Hyperpure
          </Link>
          <Link to="#" className="footer__link">
            Zomaland
          </Link>
          <Link to="#" className="footer__link">
            BlinkInt
          </Link>
        </div>

        <div className="link__container">
          <h5>FOR RESTAURANTS</h5>
          <Link to="#" className="footer__link">
            Partner With Us
          </Link>
          <Link to="#" className="footer__link">
            Apps For You
          </Link>
          <br />
          <h5>FOR ENTERPRISES</h5>
          <Link to="#" className="footer__link">
            Zomato For Work
          </Link>
        </div>

        <div className="link__container">
          <h5>LEARN MORE</h5>
          <Link to="#" className="footer__link">
            Privacy
          </Link>
          <Link to="#" className="footer__link">
            Security
          </Link>
          <Link to="#" className="footer__link">
            Terms
          </Link>
          <Link to="#" className="footer__link">
            Sitemap
          </Link>
        </div>

        <div className="link__container">
          <h5>Social Links</h5>
          <div className="social__links_container">
            <button>
              <i className="fa-brands fa-linkedin-in"></i>
            </button>
            <button>
              <i className="fa-brands fa-instagram"></i>
            </button>
            <button>
              <i className="fa-brands fa-twitter"></i>
            </button>
            <button>
              <i className="fa-brands fa-facebook"></i>
            </button>
            <button>
              <i className="fa-brands fa-youtube"></i>
            </button>
          </div>
          <br />
          <img
            src={appleStore}
            alt="apple store"
            className="footer__section_logos"
          />
          <img
            src={playStore}
            alt="playstore"
            className="footer__section_logos"
          />
        </div>
      </div>
      <div className="termsNConditions">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy, and Content Policies. All trademarks are
        properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
        rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
