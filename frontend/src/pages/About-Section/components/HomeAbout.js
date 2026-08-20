import React from "react";
import {
  FaHome,
  FaHandshake,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import "../styles/HomeAbout.css";

export default function HomeAbout() {
  return (
    <section className="home-about-section">
      <div className="home-about-container">

        {/* Left Side Image */}
        <div className="home-about-image">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            alt="SR Real Estate"
          />

          <div className="experience-badge">
            <h3>500+</h3>
            <p>Properties Listed</p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="home-about-content">
          <span className="about-tag">
            ABOUT SR REAL ESTATE
          </span>

          <h2>
            Helping You Find The Perfect
            <span> Property In Nepal</span>
          </h2>

          <p>
            SR Real Estate is committed to helping individuals,
            families, and investors discover the best real estate
            opportunities across Nepal. Our experienced team provides
            trusted guidance, verified listings, and personalized
            support throughout every stage of the property journey.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <FaHome className="feature-icon" />
              <span>Verified Properties</span>
            </div>

            <div className="feature-item">
              <FaHandshake className="feature-icon" />
              <span>Trusted Deals</span>
            </div>

            <div className="feature-item">
              <FaShieldAlt className="feature-icon" />
              <span>Secure Transactions</span>
            </div>

            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <span>Investment Guidance</span>
            </div>
          </div>

       
        </div>

      </div>
    </section>
  );
}