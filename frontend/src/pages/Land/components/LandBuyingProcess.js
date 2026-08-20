import React from "react";
import {
  FaSearchLocation,
  FaMapMarkedAlt,
  FaFileSignature,
  FaKey,
} from "react-icons/fa";

import "../styles/LandBuyingProcess.css";

export default function LandBuyingProcess() {
  return (
    <section className="land-buying-section">

      <div className="land-buying-heading">

        <span className="land-buying-tag">
          Buying Process
        </span>

        <h2>
          Buy Land in 4 Easy Steps
        </h2>

        <p>
          SR Real Estate makes buying land simple, transparent,
          and secure. From choosing the perfect plot to
          ownership transfer, we guide you through every step.
        </p>

      </div>

      <div className="land-buying-grid">

        <div className="land-buy-step">

          <div className="land-step-number">
            01
          </div>

          <FaSearchLocation />

          <h3>Choose a Plot</h3>

          <p>
            Browse verified residential,
            commercial, agricultural, and
            investment land listings.
          </p>

        </div>

        <div className="land-buy-step">

          <div className="land-step-number">
            02
          </div>

          <FaMapMarkedAlt />

          <h3>Visit the Location</h3>

          <p>
            Schedule a site visit to inspect
            the land, surroundings, road access,
            and neighborhood.
          </p>

        </div>

        <div className="land-buy-step">

          <div className="land-step-number">
            03
          </div>

          <FaFileSignature />

          <h3>Verify Documents</h3>

          <p>
            Check ownership documents,
            land certificates, and legal
            records before purchase.
          </p>

        </div>

        <div className="land-buy-step">

          <div className="land-step-number">
            04
          </div>

          <FaKey />

          <h3>Complete Ownership</h3>

          <p>
            Finalize payment, complete
            registration, and become the
            legal owner of your land.
          </p>

        </div>

      </div>

    </section>
  );
}