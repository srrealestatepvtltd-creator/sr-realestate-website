import React from "react";
import {
  FaShieldAlt,
  FaHome,
  FaSearchLocation,
  FaHandshake,
} from "react-icons/fa";

import "../styles/WhyToChoose.css";

export default function WhyToChoose() {
  return (
    <section className="house-why-section">

      <div className="house-why-heading">

        <span className="house-why-tag">
          Why Choose SR Real Estate
        </span>

        <h2>
          Nepal's Trusted Real Estate Partner for Buying Houses
        </h2>

        <p>
          SR Real Estate helps families, investors, and first-time
          buyers find verified houses for sale across Nepal. Whether
          you're searching for a modern home, luxury villa, or
          affordable family house, we make property buying simple,
          secure, and transparent.
        </p>

      </div>

      <div className="house-why-grid">

        <div className="house-why-card">

          <div className="house-why-icon">
            <FaShieldAlt />
          </div>

          <h3>Verified Properties</h3>

          <p>
            Every property is carefully verified before listing,
            giving you confidence while buying your next home.
          </p>

        </div>

        <div className="house-why-card">

          <div className="house-why-icon">
            <FaSearchLocation />
          </div>

          <h3>Prime Locations</h3>

          <p>
            Browse houses located in Bhairahawa, Butwal,
            Kathmandu, Pokhara and other fast-growing cities.
          </p>

        </div>

        <div className="house-why-card">

          <div className="house-why-icon">
            <FaHandshake />
          </div>

          <h3>Trusted Guidance</h3>

          <p>
            Our experienced team helps you from property selection
            to negotiation and documentation.
          </p>

        </div>

        <div className="house-why-card">

          <div className="house-why-icon">
            <FaHome />
          </div>

          <h3>Wide House Collection</h3>

          <p>
            Explore affordable homes, premium villas, family houses,
            and investment properties suitable for every budget.
          </p>

        </div>

      </div>

    </section>
  );
}