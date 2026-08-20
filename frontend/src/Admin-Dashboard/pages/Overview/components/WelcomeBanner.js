import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaUsers,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import API from "../../../../api/api";

import "../styles/WelcomeBanner.css";

export default function WelcomeBanner() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    properties: {
      total: 0,
    },
    leads: {
      new: 0,
    },
  });

  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const { data } = await API.get(
        "/dashboard/stats"
      );

      if (data.success) {
        setStats(data.stats);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="welcome-banner">

      {/* LEFT */}

      <div className="welcome-left">

        <span className="welcome-tag">
          🏡 SR Real Estate Admin Dashboard
        </span>

        <h1>
          {greeting},
          <span> Admin</span>
        </h1>

        <p>
          Manage properties, customer
          inquiries, appointments,
          agents and monitor your
          business performance from
          one centralized dashboard.
        </p>

        <div className="welcome-date">
          {today}
        </div>

        <div className="welcome-actions">

          <button
            className="primary-btn"
            onClick={() =>
              navigate("/admin/addproperty")
            }
          >
            <FaPlus />
            Add Property
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              navigate("/admin/leads")
            }
          >
            View Leads
            <FaArrowRight />
          </button>

        </div>

      </div>

      {/* RIGHT */}

      <div className="welcome-right">

        <div className="mini-card">

          <div className="mini-icon">
            <FaHome />
          </div>

          <div>

            <h2>
              {stats.properties?.total ?? 0}
            </h2>

            <p>Total Properties</p>

          </div>

        </div>

        <div className="mini-card">

          <div className="mini-icon users">
            <FaUsers />
          </div>

          <div>

            <h2>
              {stats.leads?.new ?? 0}
            </h2>

            <p>New Leads</p>

          </div>

        </div>

      </div>

    </section>
  );
}