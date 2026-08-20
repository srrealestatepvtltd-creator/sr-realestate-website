import React from "react";
import {
  FaUsers,
  FaRoad,
  FaCar,
  FaEye,
  FaMapMarkerAlt,
  FaChartLine,
} from "react-icons/fa";

import "../styles/CommercialLocation.css";

export default function CommercialLocation() {
  const factors = [
    {
      icon: <FaUsers />,
      title: "Customer Foot Traffic",
      text: "Locations with regular customer movement can provide better visibility and business opportunities.",
    },
    {
      icon: <FaRoad />,
      title: "Road Access",
      text: "Easy access from major roads makes it more convenient for customers, employees, and suppliers.",
    },
    {
      icon: <FaEye />,
      title: "Business Visibility",
      text: "A visible commercial location can help your business attract attention and build local presence.",
    },
    {
      icon: <FaCar />,
      title: "Parking & Accessibility",
      text: "Convenient parking and accessibility can improve the overall experience for your customers.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Strategic Location",
      text: "Choose a location close to markets, residential areas, offices, schools, or other business hubs.",
    },
    {
      icon: <FaChartLine />,
      title: "Growth Potential",
      text: "Consider developing areas where future infrastructure and business activity may increase demand.",
    },
  ];

  return (
    <section className="commercial-location-section">

      <div className="commercial-location-container">

        {/* Heading */}

        <div className="commercial-location-heading">

          <span className="commercial-location-tag">
            Smart Commercial Investment
          </span>

          <h2>
            The Right Location Can Make a Difference
          </h2>

          <p>
            Whether you are opening a new business or looking for a
            commercial investment, location plays an important role.
            Consider these key factors before choosing your property.
          </p>

        </div>


        {/* Factors */}

        <div className="commercial-location-grid">

          {factors.map((factor, index) => (

            <div
              className="commercial-location-card"
              key={index}
            >

              <div className="commercial-location-icon">
                {factor.icon}
              </div>

              <div className="commercial-location-content">

                <h3>
                  {factor.title}
                </h3>

                <p>
                  {factor.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}