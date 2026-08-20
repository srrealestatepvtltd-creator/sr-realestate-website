import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/LandHero.css";

export default function LandHero() {
  return (
    <section className="land-hero">

      <div className="land-hero-overlay"></div>

      <div className="land-hero-container">

        <div className="land-hero-content">

          <span className="land-hero-tag">
            Buy Land in Nepal
          </span>

          <h1>
            Invest in Prime Land Across Nepal
          </h1>

          <p>
            Explore residential, commercial, agricultural and
            investment land in Bhairahawa, Butwal, Kathmandu,
            Pokhara and other major cities. Find verified plots
            with transparent pricing through SR Real Estate.
          </p>

          <div className="land-hero-points">

            <div>
              <FaCheckCircle />
              Verified Land Listings
            </div>

            <div>
              <FaCheckCircle />
              Prime Locations
            </div>

            <div>
              <FaCheckCircle />
              Legal Documentation Support
            </div>

            <div>
              <FaCheckCircle />
              Investment Guidance
            </div>

          </div>

          <div className="land-hero-buttons">

            <Link
              to="/best-properties-in-nepal?type=Land"
              className="land-btn-primary"
            >
              View Land
              <FaArrowRight />
            </Link>

            <Link
              to="/advertise-with-us"
              className="land-btn-secondary"
            >
              Sell Your Land
            </Link>

          </div>

        </div>

        <div className="land-hero-card">

          <FaMapMarkedAlt className="land-card-icon" />

          <h3>Why Invest in Land?</h3>

          <ul>

            <li>✔ High long-term value appreciation</li>

            <li>✔ Low maintenance investment</li>

            <li>✔ Residential & Commercial opportunities</li>

            <li>✔ Growing demand in developing cities</li>

            <li>✔ Secure future asset for your family</li>

          </ul>

        </div>

      </div>

    </section>
  );
}