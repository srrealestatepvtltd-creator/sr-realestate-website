import React from "react";
import {
  FaClipboardList,
  FaBullhorn,
  FaUsers,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/HowWorks.css";

export default function HowWorks() {
  const steps = [
    {
      id: "01",
      icon: <FaClipboardList />,
      title: "Submit Your Property",
      description:
        "Fill out the short advertisement form with your property details and contact information.",
    },
    {
      id: "02",
      icon: <FaBullhorn />,
      title: "We Promote It",
      description:
        "Our team publishes your property on our website and promotes it across social media platforms.",
    },
    {
      id: "03",
      icon: <FaUsers />,
      title: "Receive Genuine Leads",
      description:
        "Interested buyers and tenants contact you through our verified lead system.",
    },
    {
      id: "04",
      icon: <FaHandshake />,
      title: "Close Your Deal",
      description:
        "Connect with genuine clients and complete your sale or rental quickly and securely.",
    },
  ];

  return (
    <section className="advertise-how-section">

      <div className="advertise-how-heading">

        <span className="advertise-how-tag">
          How It Works
        </span>

        <h2>
          Advertise Your Property in 4 Simple Steps
        </h2>

        <p>
          Listing your property with SR Real Estate is simple, fast,
          and designed to help you reach more buyers and tenants.
        </p>

      </div>

      <div className="advertise-how-grid">

        {steps.map((step) => (
          <div
            className="advertise-how-card"
            key={step.id}
          >

            <div className="advertise-how-number">
              {step.id}
            </div>

            <div className="advertise-how-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

            {step.id !== "04" && (
              <div className="advertise-how-arrow">
                <FaArrowRight />
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}