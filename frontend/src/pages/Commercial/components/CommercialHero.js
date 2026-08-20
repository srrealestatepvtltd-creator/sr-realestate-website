import React from "react";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "../styles/CommercialHero.css";

export default function CommercialHero() {
  return (
    <section className="commercial-hero-section">

      <div className="commercial-hero-overlay"></div>

      <div className="commercial-hero-container">

        {/* Left Content */}

        <div className="commercial-hero-content">

          <span className="commercial-hero-tag">
            Commercial Real Estate in Nepal
          </span>

          <h1>
            Find the Right
            <span> Commercial Property </span>
            for Your Business
          </h1>

          <p>
            Explore commercial properties in prime locations across Nepal,
            including shops, offices, showrooms, buildings, and business spaces
            suitable for buying, selling, or renting.
          </p>

          <div className="commercial-hero-highlights">

            <div>
              <FaBuilding />
              <span>Shops & Offices</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Prime Locations</span>
            </div>

          </div>

          <div className="commercial-hero-actions">

            <Link
              to="/best-properties-in-nepal?propertyType=Commercial"
              className="commercial-hero-primary-btn"
            >
              Explore Commercial Properties
              <FaArrowRight />
            </Link>

            <Link
              to="/advertise-with-us"
              className="commercial-hero-secondary-btn"
            >
              List Your Property
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}