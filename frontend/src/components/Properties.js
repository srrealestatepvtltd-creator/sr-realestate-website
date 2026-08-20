import React from "react";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaHome,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/Properties.css";

const properties = [
  {
    id: 1,
    name: "Luxury Villa in Bhairahawa",
    price: "Rs 1,50,00,000",
    location: "Bhairahawa",
    type: "Villa",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    name: "Modern Apartment in Butwal",
    price: "Rs 85,00,000",
    location: "Butwal",
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: 3,
    name: "Prime Land Plot",
    price: "Rs 45,00,000",
    location: "Rupandehi",
    type: "Land",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  },
  {
    id: 4,
    name: "Commercial Building",
    price: "Rs 2,50,00,000",
    location: "Kathmandu",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
];

export default function PropertyCard() {
  return (
    <section className="property-section">
      <div className="property-container">

        <h2 className="section-title">
          Featured Properties
        </h2>

        <p className="section-subtitle">
          Explore premium real estate deals across Nepal
        </p>

        <div className="property-grid">
          {properties.map((item) => (
            <div className="property-card" key={item.id}>

              {/* IMAGE */}
              <div className="property-image">
                <img src={item.image} alt={item.name} />

                <span className="badge">
                  <FaHome className="badge-icon" />
                  {item.type}
                </span>
              </div>

              {/* INFO */}
              <div className="property-info">
                <h3>{item.name}</h3>

                <div className="info-row">
                  <FaMapMarkerAlt className="icon" />
                  <span>{item.location}</span>
                </div>

                <div className="price-row">
                  <FaMoneyBillWave className="icon money" />
                  <span>Rs {item.price}</span>
                </div>

                <button className="quote-btn">
                  <FaPaperPlane className="btn-icon" />
                  Request a Quote
                </button>

              </div>

            </div>
          ))}
        </div>
  <div className="view-more-wrapper">
          <button className="view-more-btn" onClick={() => (window.location.href = "/best-properties-in-nepal")}>
            View More Properties
            <FaArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}