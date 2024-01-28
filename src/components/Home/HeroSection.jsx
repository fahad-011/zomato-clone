import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import Logo from "../../assets/images/heroSectionLogo.png";
import mobileHand from "../../assets/icons/smartphone.png";
import SearchBar from "../../utils/SearchBar/SearchBar";
import css from "../../utils/SearchBar/SearchBar.module.css";

function HeroSection() {
  return (
    <section className="hero__section">
      <header>
        <nav className="navbar">
          <Link to="/get-the-app">
            <img
              src={mobileHand}
              alt="mobile in hand icon"
              className="mobile-hand"
            />
            Get the App
          </Link>
          <div className="navbar__menu_container">
            <Link to="/investor-relations" className="link">
              Investor Relations
            </Link>
            <Link to="/add-restaurant" className="link">
              Add restaurant
            </Link>
            <Link to="/login" className="link">
              Log in
            </Link>
            <Link to="/signup" className="link">
              Sign Up
            </Link>
            <Link to="/user" className="user__icon">
              <i className="fa-solid fa-user"></i>
            </Link>
          </div>
        </nav>
      </header>

      <div className="hero__section_container">
        <img src={Logo} alt="Zomato Logo" className="hero__section_logo" />
        <h1 className="hero__section_title">
          Discover the best food & drinks in Hampi-Hospet
        </h1>
        <div className={css.searchbar}>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
