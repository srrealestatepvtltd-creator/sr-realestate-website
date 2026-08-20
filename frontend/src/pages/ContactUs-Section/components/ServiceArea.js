import React from "react";
import "../styles/ServiceArea.css";

export default function ServiceArea() {
  const areas = [
    "Bhairahawa Real Estate",
    "Butwal Property",
    "Kathmandu Homes",
    "Rupandehi Land",
    "Nepal Investment Property",
    "Pokhara Houses",
    "Chitwan Real Estate",
    "Lumbini Property Deals",
  ];

  return (
    <section className="service-areas">
      <h2>Service Areas in Nepal</h2>

      <p>
        We provide trusted real estate services across major cities and
        growing investment locations in Nepal.
      </p>

      <div className="areas">
        {areas.map((item, index) => (
          <span key={index} className="area-chip">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}