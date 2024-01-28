import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Logo from "../../assets/heroSectionLogo.png";

function HeroSection() {
  return (
    <section className="hero__section">
      <header>
        <nav className="navbar">
          <Link to="/get-the-app">Get the App</Link>
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
        <div className="hero__section_input_container">
          <input
            type="text"
            placeholder="Hampi-Hospet"
            className="input_container_location"
          />
          <input
            type="text"
            placeholder="Search for a restaurant, cuisine or a dish"
            className="input_container_search"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
