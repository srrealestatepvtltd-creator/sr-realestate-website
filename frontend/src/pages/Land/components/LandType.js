import React from "react";
import {
  FaHome,
  FaBuilding,
  FaSeedling,
  FaIndustry,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "../styles/LandType.css";

export default function LandType() {
  return (
    <section className="land-types-section">

      <div className="land-types-heading">

        <span className="land-types-tag">
          Explore Categories
        </span>

        <h2>Choose the Right Type of Land</h2>

        <p>
          Whether you're building your dream home, expanding your business,
          investing for the future, or starting agricultural projects,
          SR Real Estate offers verified land listings across Nepal.
        </p>

      </div>

      <div className="land-types-grid">

        <div className="land-type-card">

          <FaHome />

          <h3>Residential Land</h3>

          <p>
            Perfect for building houses, villas, apartments, and
            family homes in growing residential communities.
          </p>

        </div>

        <div className="land-type-card">

          <FaBuilding />

          <h3>Commercial Land</h3>

          <p>
            Ideal for offices, shopping complexes, hotels,
            restaurants, and business developments.
          </p>

        </div>

        <div className="land-type-card">

          <FaSeedling />

          <h3>Agricultural Land</h3>

          <p>
            Suitable for farming, livestock, orchards,
            and long-term agricultural investments.
          </p>

        </div>

        <div className="land-type-card">

          <FaIndustry />

          <h3>Industrial Land</h3>

          <p>
            Large plots designed for factories,
            warehouses, production units, and logistics.
          </p>

        </div>

      </div>

      <div className="land-types-button">

        <Link
          to="/best-properties-in-nepal?propertyType=Land"
          className="land-types-btn"
        >
          Browse All Land
          <FaArrowRight />
        </Link>

      </div>

    </section>
  );
}