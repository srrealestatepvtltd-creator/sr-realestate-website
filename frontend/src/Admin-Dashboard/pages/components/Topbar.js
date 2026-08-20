import React from "react";
import {
  FaBars,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";

import "../styles/Topbar.css";

export default function Topbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sr-topbar">

      {/* LEFT */}

      <div className="sr-topbar-left">

      

        <div>
          <h2>Real EstateDashboard</h2>
          <p>Welcome back! Here's what's happening today.</p>
        </div>

      </div>

      {/* CENTER */}

      <div className="sr-search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search properties, leads, customers..."
        />

      </div>

      {/* RIGHT */}

      <div className="sr-topbar-right">

        <span className="sr-date">
          {today}
        </span>

        <button className="sr-icon-btn">
          <FaBell />
          <span className="badge">3</span>
        </button>

        <button className="sr-icon-btn">
          <FaEnvelope />
          <span className="badge">5</span>
        </button>

        <div className="sr-admin-profile">

          <FaUserCircle className="admin-avatar" />

          <div className="admin-info">

            <h4>Super Admin</h4>

            <span>Administrator</span>

          </div>

          <FaChevronDown />

        </div>

      </div>

    </header>
  );
}