import React, { useEffect, useState } from "react";
import {
  FaBullhorn,
  FaHome,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import API from "../../../api/api";
import "../styles/AdvertiseTop.css";

export default function AdvertiseTop() {
  const [stats, setStats] = useState({
  properties: {
    total: 0,
    available: 0,
    sold: 0,
    rented: 0,
  },
  leads: {
    total: 0,
    new: 0,
    qualified: 0,
    siteVisit: 0,
    closed: 0,
  },
  appointments: {
    total: 0,
  },
  agents: {
    total: 0,
  },
  revenue: {
    month: 0,
  },
});

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data } = await API.get("/dashboard/stats");

      if (data.success) {
        setStats(data.stats);
      }
    } catch (err) {
      console.error("Failed to fetch dashboard stats", err);
    }
  };

  return (
    <section className="advertise-top">
      <div className="advertise-container">
        {/* Left Content */}
        <div className="advertise-left">
          <span className="advertise-tag">
            <FaBullhorn />
            Advertise With SR Real Estate
          </span>

          <h1>
            Sell or Rent Your Property
            <span> Faster Than Ever</span>
          </h1>

          <p>
            Reach genuine buyers, tenants, and investors through
            SR Real Estate. We promote your property across our
            website, social media platforms, and marketing channels
            to maximize visibility.
          </p>

          <div className="advertise-features">
            <div>
              <FaCheckCircle />
              Free Property Listing
            </div>

            <div>
              <FaCheckCircle />
              Verified Buyer Leads
            </div>

            <div>
              <FaCheckCircle />
              Social Media Promotion
            </div>

            <div>
              <FaCheckCircle />
              Featured Website Listing
            </div>
          </div>

          <a href="#advertise-form" className="advertise-btn">
            Advertise My Property
            <FaArrowRight />
          </a>
        </div>

        {/* Right Card */}
        <div className="advertise-right">
          <div className="advertise-card">
            <div className="card-header">
              <FaHome className="card-icon" />

              <div>
                <h2>Live Property Statistics</h2>
                <p>Updated from SR Real Estate Dashboard</p>
              </div>
            </div>

            <div className="advertise-stats">
              <div className="stat-item">
                <h3>{stats.properties.total}+</h3>
                <span>Total Properties</span>
              </div>

              <div className="stat-item">
                <h3>{stats.properties.available}+</h3>
                <span>Active Listings</span>
              </div>

              <div className="stat-item">
                <h3>10{stats.properties.sold}+</h3>
                <span>Properties Sold</span>
              </div>

              <div className="stat-item">
                <h3>{stats.leads.total}+</h3>
                <span>Buyer Leads</span>
              </div>
            </div>

            <div className="card-footer">
              More visibility means more inquiries for your property.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}