import React from "react";
import { FaHome, FaCheckCircle } from "react-icons/fa";
import "../styles/Description.css";

export default function Description() {
  return (
    <section className="house-description-section">

      <div className="house-description-container">

        <div className="house-description-header">
          <span className="house-description-tag">
            Buy House in Nepal
          </span>

          <h2>
            Find Your Perfect House with SR Real Estate
          </h2>

          <p>
            Looking to buy a house in Nepal? SR Real Estate offers
            verified residential properties across Kathmandu,
            Bhairahawa, Butwal, Pokhara, Chitwan, Lalitpur,
            Bhaktapur, and other major cities. Whether you are
            searching for a modern family home, luxury villa,
            bungalow, duplex, or affordable residential house,
            we help you find the perfect property with complete
            transparency.
          </p>
        </div>

        <div className="house-description-content">

          <div className="house-description-text">

            <h3>
              Why Choose SR Real Estate?
            </h3>

            <p>
              Every property listed on our platform is carefully
              verified to ensure genuine ownership and accurate
              information. Our experienced team helps buyers
              throughout the entire process—from property search
              and site visits to legal documentation and final
              ownership transfer.
            </p>

            <ul className="house-description-list">

              <li>
                <FaCheckCircle />
                Verified Residential Houses
              </li>

              <li>
                <FaCheckCircle />
                Houses for Sale Across Nepal
              </li>

              <li>
                <FaCheckCircle />
                Affordable & Luxury Options
              </li>

              <li>
                <FaCheckCircle />
                Expert Property Consultation
              </li>

              <li>
                <FaCheckCircle />
                Trusted Real Estate Professionals
              </li>

            </ul>

          </div>

          <div className="house-description-card">

            <FaHome className="house-description-icon" />

            <h3>
              Looking for Your Dream House?
            </h3>

            <p>
              Browse our latest verified house listings and find
              the perfect home for your family with confidence.
            </p>

            <a
              href="/best-properties-in-nepal"
              className="house-description-btn"
            >
              Browse Houses
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}