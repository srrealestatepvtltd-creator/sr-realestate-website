import React from "react";
import {
  FaShieldAlt,
  FaHandshake,
  FaHome,
  FaChartLine,
} from "react-icons/fa";

import "../styles/WhyChooseUs.css";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Only Real Listings, No Fake Deals",
      desc: "We manually verify every property before it goes live, so you don’t waste time on fake or outdated listings.",
    },
    {
      icon: <FaHandshake />,
      title: "We Negotiate Like It’s Our Own Deal",
      desc: "Our team directly works with owners to get you the best possible price without hidden charges.",
    },
    {
      icon: <FaHome />,
      title: "Properties That Actually Fit Your Lifestyle",
      desc: "From city apartments to peaceful land plots, we match properties based on how you actually live—not just budget.",
    },
    {
      icon: <FaChartLine />,
      title: "Smart Investment Insights, Not Just Selling",
      desc: "We guide you on which locations are growing, so your property becomes a long-term asset, not just a purchase.",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-container">

        <span className="why-tag">WHY SR REAL ESTATE</span>

        <h2>
          Not Just Property Deals,
          <br />
          We Build Long-Term Value
        </h2>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}