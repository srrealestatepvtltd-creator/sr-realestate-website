import React from "react";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

import "../styles/MissionVision.css";

export default function MissionVision() {
  const data = [
    {
      icon: <FaBullseye />,
      title: "Our Mission",
      desc: "Our mission is to simplify the real estate journey in Nepal by offering transparent property listings, verified ownership details, and expert guidance. We aim to remove confusion, reduce risks, and make property buying and selling smooth for everyone—from first-time buyers to experienced investors.",
    },
    {
      icon: <FaEye />,
      title: "Our Vision",
      desc: "Our vision is to become Nepal’s most trusted digital real estate platform, empowering people with data-driven property insights, fair pricing, and secure transactions. We aim to transform how real estate is experienced in Nepal through technology and trust.",
    },
    {
      icon: <FaHandshake />,
      title: "Our Commitment",
      desc: "We are committed to building long-term relationships with our clients by offering honest advice, fair negotiations, and continuous support even after the deal is completed. Your trust is our most valuable asset.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Our Responsibility",
      desc: "We ensure every property listed is carefully verified to protect buyers and investors from fraud. We prioritize legal clarity, documentation support, and safe property transactions at every step.",
    },
  ];

  return (
    <section className="mission-section">
      <div className="mission-container">

        <span className="mission-tag">
          MISSION • VISION • VALUES
        </span>

        <h2>
          Driving Trust, Transparency
          <br />
          and Smart Property Investment in Nepal
        </h2>

        <div className="mission-grid">
          {data.map((item, index) => (
            <div className="mission-card" key={index}>
              <div className="mission-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}