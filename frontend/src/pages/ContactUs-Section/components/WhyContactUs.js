import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/WhyContactUs.css";

export default function WhyContactUs() {
  const features = [
    "Verified Property Listings",
    "Transparent Pricing (No Hidden Charges)",
    "Legal Documentation Support",
    "Best Market Price Negotiation",
    "Free Property Consultation",
    "Fast Response on WhatsApp",
    "Site Visit Arrangement",
    "Trusted Local Real Estate Experts",
  ];

  return (
    <section className="why-section">

      <h2>Why Choose SR Real Estate?</h2>

      <p>
        We are committed to providing trusted, transparent, and
        professional real estate services across Nepal.
      </p>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <FaCheckCircle />
            <span>{item}</span>
          </div>
        ))}
      </div>

    </section>
  );
}