import React from "react";
import {
  FaShieldAlt,
  FaBuilding,
  FaHandshake,
  FaMapMarkedAlt,
  FaUserTie,
  FaHeadset,
} from "react-icons/fa";

import "../styles/ApartmentWhyChoose.css";

export default function ApartmentWhyChoose() {
  return (
    <section className="apartment-why-section">

      <div className="apartment-why-container">

        <div className="apartment-why-header">

          <span className="apartment-why-tag">
            Why Choose SR Real Estate
          </span>

          <h2>
            The Trusted Choice for Buying Apartments in Nepal
          </h2>

          <p>
            SR Real Estate helps you discover verified apartments,
            trusted developers, and transparent pricing so you can
            invest with complete confidence.
          </p>

        </div>

        <div className="apartment-why-grid">

          <div className="apartment-why-card">
            <FaShieldAlt />
            <h3>Verified Listings</h3>
            <p>
              Every apartment is carefully verified before being
              published on our platform.
            </p>
          </div>

          <div className="apartment-why-card">
            <FaBuilding />
            <h3>Premium Apartments</h3>
            <p>
              Discover luxury, affordable, and family apartments
              across Nepal.
            </p>
          </div>

          <div className="apartment-why-card">
            <FaHandshake />
            <h3>Transparent Deals</h3>
            <p>
              No hidden information. We help buyers make informed
              decisions.
            </p>
          </div>

          <div className="apartment-why-card">
            <FaMapMarkedAlt />
            <h3>Prime Locations</h3>
            <p>
              Apartments available in Kathmandu, Butwal,
              Bhairahawa, Pokhara and other major cities.
            </p>
          </div>

          <div className="apartment-why-card">
            <FaUserTie />
            <h3>Expert Guidance</h3>
            <p>
              Professional property consultants assist you from
              inquiry to ownership transfer.
            </p>
          </div>

          <div className="apartment-why-card">
            <FaHeadset />
            <h3>Dedicated Support</h3>
            <p>
              Our team is always available to answer your questions
              and schedule property visits.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}