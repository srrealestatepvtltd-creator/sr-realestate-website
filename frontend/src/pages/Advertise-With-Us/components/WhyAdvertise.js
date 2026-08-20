import React from "react";
import {
  FaBullhorn,
  FaUsers,
  FaGlobe,
  FaHandshake,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

import "../styles/WhyAdvertise.css";

export default function WhyAdvertise() {

  const benefits = [
    {
      icon: <FaBullhorn />,
      title: "Maximum Property Exposure",
      description:
        "Your property is promoted on our website, Facebook, Instagram, and other digital marketing channels.",
    },
    {
      icon: <FaUsers />,
      title: "Verified Buyer Leads",
      description:
        "Receive inquiries from genuine buyers, tenants, and investors who are actively searching.",
    },
    {
      icon: <FaGlobe />,
      title: "Reach More Customers",
      description:
        "Expand your property's visibility to local buyers, NRNs, and international investors.",
    },
    {
      icon: <FaChartLine />,
      title: "Faster Sales & Rentals",
      description:
        "Our marketing strategy helps your property reach more people, increasing your chances of closing deals quickly.",
    },
    {
      icon: <FaHandshake />,
      title: "Professional Support",
      description:
        "Our experienced team assists you throughout the listing and inquiry process.",
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Assistance",
      description:
        "Need help? Our team is always ready to guide you and answer your questions.",
    },
  ];

  return (
    <section className="why-advertise-section">

      <div className="why-advertise-heading">

        <span className="why-advertise-tag">
          Why Choose SR Real Estate
        </span>

        <h2>
          Why Advertise With Us?
        </h2>

        <p>
          We don't just list your property—we actively market it to
          connect you with genuine buyers and tenants faster.
        </p>

      </div>

      <div className="why-advertise-grid">

        {benefits.map((item, index) => (

          <div
            className="why-advertise-card"
            key={index}
          >

            <div className="why-advertise-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}