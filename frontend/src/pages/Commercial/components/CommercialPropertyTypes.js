import React from "react";
import {
  FaStore,
  FaBuilding,
  FaWarehouse,
  FaHotel,
  FaBriefcase,
  FaShoppingBag,
} from "react-icons/fa";

import "../styles/CommercialPropertyTypes.css";

export default function CommercialPropertyTypes() {
  const propertyTypes = [
    {
      icon: <FaStore />,
      title: "Shops",
      description:
        "Find commercial shops in busy areas, marketplaces, and growing business locations.",
    },
    {
      icon: <FaBriefcase />,
      title: "Office Spaces",
      description:
        "Professional office spaces suitable for companies, startups, agencies, and organizations.",
    },
    {
      icon: <FaShoppingBag />,
      title: "Showrooms",
      description:
        "High-visibility showroom spaces designed for retail businesses and growing brands.",
    },
    {
      icon: <FaWarehouse />,
      title: "Warehouses",
      description:
        "Commercial warehouses suitable for storage, distribution, logistics, and business operations.",
    },
    {
      icon: <FaBuilding />,
      title: "Commercial Buildings",
      description:
        "Complete commercial buildings suitable for offices, businesses, rental income, and investment.",
    },
    {
      icon: <FaHotel />,
      title: "Hotels & Business Spaces",
      description:
        "Explore properties suitable for hotels, restaurants, hospitality, and other commercial ventures.",
    },
  ];

  return (
    <section className="commercial-types-section">

      <div className="commercial-types-header">

        <span className="commercial-types-tag">
          Commercial Property
        </span>

        <h2>
          Find the Right Commercial Space for Your Business
        </h2>

        <p>
          Explore different types of commercial properties available
          for sale and rent across Nepal. Find a space that matches
          your business needs, location, and investment goals.
        </p>

      </div>

      <div className="commercial-types-grid">

        {propertyTypes.map((item, index) => (

          <div
            className="commercial-type-card"
            key={index}
          >

            <div className="commercial-type-icon">
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