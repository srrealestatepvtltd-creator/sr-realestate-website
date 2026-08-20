import React from "react";
import {
  FaHome,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="house-hero">

      <div className="house-hero-container">

        {/* Left */}

        <div className="house-hero-content">

          <span className="house-hero-tag">
            🏠 Houses for Sale & Rent in Nepal
          </span>

          <h1>
            Find Your
            <span> Dream House </span>
            in Nepal
          </h1>

          <p>
            Browse verified houses for sale and rent across Nepal.
            Discover premium homes with genuine pricing, trusted
            listings, and expert assistance from SR Real Estate.
          </p>

          <div className="house-hero-features">

            <div>
              <FaCheckCircle />
              Verified Listings
            </div>

            <div>
              <FaCheckCircle />
              Trusted Agents
            </div>

            <div>
              <FaCheckCircle />
              Easy Documentation
            </div>

          </div>

          <div className="house-hero-buttons">

            <button className="browse-house-btn" onClick={() => window.location.href = "/best-properties-in-nepal"}>
              <FaHome />
              Browse Houses
            </button>

            <button className="contact-agent-btn" onClick={() => window.location.href = "/contact"}>
              Contact Agent
              <FaArrowRight />
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="house-hero-image">

          <img
            src="/images/house-hero.jpg"
            alt="Best Houses for Sale in Nepal"
          />

          <div className="hero-floating-card">

            <h3>500+</h3>

            <span>Verified Houses</span>

          </div>

        </div>

      </div>

    </section>
  );
}