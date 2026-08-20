import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
} from "react-icons/fa";

import "../styles/PropertyGrid.css";
import API from "../../../api/api";

export default function PropertyGrid() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH PROPERTIES =================

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const { data } = await API.get("/properties");

      if (data.success) {
        setProperties(data.properties);
      }
    } catch (error) {
      console.error("Failed to fetch properties:", error);
    } finally {
      setLoading(false);
    }
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <section className="property-grid-section">
        <div className="grid-loading">
          <h2>Loading Properties...</h2>
        </div>
      </section>
    );
  }

  // ================= NO PROPERTY =================

  if (properties.length === 0) {
    return (
      <section className="property-grid-section">
        <div className="grid-header">
          <h2>All Properties</h2>
          <p>Browse verified properties across Nepal</p>
        </div>

        <div className="no-property">
          <h2>No Properties Available</h2>
        </div>
      </section>
    );
  }

  // ================= MAIN =================

  return (
    <section className="property-grid-section">
      <div className="grid-header">
        <h2>All Properties</h2>
        <p>Browse verified properties across Nepal</p>
      </div>

      <div className="grid-container">
        {properties.map((item) => (
          <div className="grid-card" key={item._id}>
            {/* ================= IMAGE ================= */}

            <div className="grid-image">
              <img
                src={
                  item.thumbnail
                    ? item.thumbnail
                    : "https://via.placeholder.com/600x400?text=No+Image"
                }
                alt={item.title}
              />

              <button className="wishlist">
                <FaHeart />
              </button>

              <span className="price">
                Rs. {Number(item.price).toLocaleString()}
              </span>
            </div>

            {/* ================= CONTENT ================= */}

            <div className="grid-content">
              <h3>{item.title}</h3>

              <div className="location">
                <FaMapMarkerAlt />

                <span>
                  {item.address}
                  {item.ward && `, Ward ${item.ward}`}
                  {item.municipality && `, ${item.municipality}`}
                  {item.district && `, ${item.district}`}
                </span>
              </div>

              <div className="features">
                <span>
                  <FaBed /> {item.bedrooms || 0}
                </span>

                <span>
                  <FaBath /> {item.bathrooms || 0}
                </span>

                <span>
                  <FaRulerCombined /> {item.areaSqFt || 0} Sq.ft
                </span>
              </div>

              <button className="details-btn">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}