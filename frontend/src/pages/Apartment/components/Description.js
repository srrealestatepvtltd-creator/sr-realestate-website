import React from "react";
import { FaBuilding, FaCheckCircle } from "react-icons/fa";
import "../styles/Description.css";

export default function ApartmentDescription() {
  return (
    <section className="apartment-description-section">

      <div className="apartment-description-container">

        <div className="apartment-description-header">

          <span className="apartment-description-tag">
            Buy Apartments in Nepal
          </span>

          <h2>
            Find the Best Apartments for Sale in Nepal
          </h2>

          <p>
            Explore premium apartments for sale in Kathmandu,
            Bhairahawa, Butwal, Pokhara, Chitwan, Lalitpur,
            Bhaktapur, and other major cities.
          </p>

        </div>

        <div className="apartment-description-content">

          <div className="apartment-description-text">

            <h3>
              Why Buy an Apartment Through SR Real Estate?
            </h3>

            <p>
              Buying an apartment is one of the smartest real estate
              investments in Nepal. We provide verified apartment
              listings, transparent pricing, and professional
              assistance throughout your buying journey.
            </p>

            <ul className="apartment-description-list">

              <li>
                <FaCheckCircle />
                Verified Apartment Listings
              </li>

              <li>
                <FaCheckCircle />
                Luxury & Affordable Apartments
              </li>

              <li>
                <FaCheckCircle />
                Prime City Locations
              </li>

              <li>
                <FaCheckCircle />
                Secure Legal Documentation
              </li>

              <li>
                <FaCheckCircle />
                Professional Buying Assistance
              </li>

              <li>
                <FaCheckCircle />
                Best Investment Opportunities
              </li>

            </ul>

          </div>

          <div className="apartment-description-card">

            <FaBuilding className="apartment-description-icon" />

            <h3>
              Looking for Your Dream Apartment?
            </h3>

            <p>
              Browse our verified apartment listings and discover
              modern apartments with premium amenities.
            </p>

            <a
              href="/best-properties-in-nepal"
              className="apartment-description-btn"
            >
              Browse Apartments
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}