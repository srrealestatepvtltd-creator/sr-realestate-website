import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";

import "../styles/FeaturedProperty.css";
import API from "../../../api/api";

export default function FeaturedProperties() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  const fetchFeaturedProperties = async () => {
    try {
      const { data } = await API.get("/properties/featured");

      if (data.success) {
        setFeatured(data.properties);
      }
    } catch (error) {
      console.error("Failed to fetch featured properties:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="featured-section">
        <div className="featured-loading">
          <h2>Loading Featured Properties...</h2>
        </div>
      </section>
    );
  }

  if (featured.length === 0) {
    return (
      <section className="featured-section">
        <div className="featured-header">
          <h2>Featured Properties</h2>
          <p>No featured properties available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>Featured Properties</h2>
        <p>Handpicked premium properties with high investment value</p>
      </div>

      <div className="featured-grid">
        {featured.map((item) => (
          <div className="featured-card" key={item._id}>
            {/* IMAGE */}
            <div className="featured-image">
              <img
                src={
                  item.thumbnail
                    ? item.thumbnail
                    : "https://via.placeholder.com/600x400?text=No+Image"
                }
                alt={item.title}
              />

              <span className="badge">Featured</span>

              <div className="price">
                Rs. {Number(item.price).toLocaleString()}
              </div>
            </div>

            {/* CONTENT */}
            <div className="featured-content">
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

              <button className="view-btn">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}