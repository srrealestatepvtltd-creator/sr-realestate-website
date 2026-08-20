import React from "react";
import {
  FaChartLine,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

import "../styles/LandBenefits.css";

export default function LandBenefits() {
  return (
    <section className="land-benefits-section">

      <div className="land-benefits-header">

        <span className="land-benefits-tag">
          Why Choose Land?
        </span>

        <h2>
          Why Investing in Land is a Smart Decision
        </h2>

        <p>
          Land remains one of the safest long-term investments in Nepal.
          Whether you're planning to build your dream home, start a business,
          or secure your future, owning land offers lasting value and steady
          appreciation.
        </p>

      </div>

      <div className="land-benefits-grid">

        <div className="land-benefit-card">

          <FaChartLine />

          <h3>High Investment Growth</h3>

          <p>
            Land prices continue to increase over time, making it one of
            Nepal's strongest long-term investments.
          </p>

        </div>

        <div className="land-benefit-card">

          <FaMapMarkedAlt />

          <h3>Prime Locations</h3>

          <p>
            Choose residential, commercial, or agricultural land in
            rapidly developing areas across Nepal.
          </p>

        </div>

        <div className="land-benefit-card">

          <FaShieldAlt />

          <h3>Verified Documents</h3>

          <p>
            Every listed property is carefully verified to provide
            buyers with confidence and peace of mind.
          </p>

        </div>

        <div className="land-benefit-card">

          <FaMoneyBillWave />

          <h3>Affordable Options</h3>

          <p>
            From budget-friendly plots to premium investment land,
            we help you find the perfect property.
          </p>

        </div>

      </div>

    </section>
  );
}