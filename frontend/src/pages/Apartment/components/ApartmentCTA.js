import React from "react";
import { FaBuilding, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/ApartmentCTA.css";

export default function ApartmentCTA() {
  return (
    <section className="apartment-cta-section">

      <div className="apartment-cta-container">

        <div className="apartment-cta-content">

          <span className="apartment-cta-tag">
            Looking for an Apartment?
          </span>

          <h2>
            Find Your Dream Apartment in Nepal Today
          </h2>

          <p>
            Browse verified apartments for sale and rent across
            Kathmandu, Bhairahawa, Butwal, Pokhara, Chitwan, Lalitpur,
            Bhaktapur, and other major cities with SR Real Estate.
          </p>

          <div className="apartment-cta-buttons">

            <Link
              to="/best-properties-in-nepal"
              className="apartment-primary-btn"
            >
              <FaBuilding />
              Browse Apartments
            </Link>

            <Link
              to="/contact"
              className="apartment-secondary-btn"
            >
              <FaPhoneAlt />
              Contact Us
            </Link>

          </div>

        </div>

        <div className="apartment-cta-box">

          <div className="apartment-cta-number">
            100+
          </div>

          <h3>Verified Apartment Listings</h3>

          <p>
            Explore premium apartments with trusted property
            information and professional assistance.
          </p>

          <Link
            to="/advertise-with-us"
            className="apartment-cta-link"
          >
            Advertise Your Apartment
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
}