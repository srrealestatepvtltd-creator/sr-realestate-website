import React from "react";
import {
  FaPhoneAlt,
  FaSearch,
  FaFileContract,
  FaKey,
} from "react-icons/fa";

import "../styles/HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaPhoneAlt />,
      title: "Get in Touch",
      desc: "Contact our real estate experts via phone, WhatsApp, or form to share your property needs or investment goals.",
    },
    {
      icon: <FaSearch />,
      title: "Find Your Property",
      desc: "We help you explore verified houses, apartments, land, and commercial spaces based on your budget and location.",
    },
    {
      icon: <FaFileContract />,
      title: "Legal Verification",
      desc: "Our team ensures all documents, ownership details, and legal papers are properly verified before proceeding.",
    },
    {
      icon: <FaKey />,
      title: "Secure Ownership Transfer",
      desc: "We assist you through safe and smooth ownership transfer so you can confidently receive your new property.",
    },
  ];

  return (
    <section className="how-section">
      <div className="how-container">

        <span className="how-tag">PROCESS</span>

        <h2>
          Simple 4-Step Process
          <br />
          to Buy Your Dream Property in Nepal
        </h2>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-icon">{step.icon}</div>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>

              <span className="step-number">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}