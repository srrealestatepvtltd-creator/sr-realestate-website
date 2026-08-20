import React from "react";
import {
  FaFilter,
  FaUndoAlt,
  FaCalendarAlt,
  FaUserTie,
  FaHome,
  FaTag,
} from "react-icons/fa";

import "../styles/LeadFilters.css";

export default function LeadFilters() {
  return (
    <section className="lead-filters">

      {/* Header */}

      <div className="filter-heading">

        <div className="filter-title">

          <FaFilter />

          <div>
            <h2>Advanced Filters</h2>
            <p>
              Filter leads by status, property type, budget,
              source, assigned agent, and follow-up date.
            </p>
          </div>

        </div>

        <button className="reset-filter-btn">
          <FaUndoAlt />
          Reset Filters
        </button>

      </div>

      {/* Filters */}

      <div className="filter-grid">

        <div className="filter-item">
          <label>Lead Status</label>

          <select>
            <option>All Status</option>
            <option>New</option>
            <option>Qualified</option>
            <option>Site Visit</option>
            <option>Negotiation</option>
            <option>Closed</option>
            <option>Lost</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Lead Source</label>

          <select>
            <option>All Sources</option>
            <option>Facebook</option>
            <option>Google</option>
            <option>Website</option>
            <option>WhatsApp</option>
            <option>Referral</option>
            <option>Walk-In</option>
          </select>
        </div>

        <div className="filter-item">
          <label>
            <FaHome />
            Property Type
          </label>

          <select>
            <option>All Properties</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Land</option>
            <option>Commercial</option>
          </select>
        </div>

        <div className="filter-item">
          <label>
            <FaTag />
            Budget
          </label>

          <select>
            <option>Any Budget</option>
            <option>Below 50 Lakh</option>
            <option>50L - 1 Crore</option>
            <option>1 - 2 Crore</option>
            <option>Above 2 Crore</option>
          </select>
        </div>

        <div className="filter-item">
          <label>
            <FaUserTie />
            Assigned Agent
          </label>

          <select>
            <option>All Agents</option>
            <option>Ram Sharma</option>
            <option>Sita Thapa</option>
            <option>Hari Gurung</option>
          </select>
        </div>

        <div className="filter-item">
          <label>
            <FaCalendarAlt />
            Follow-up
          </label>

          <input type="date" />
        </div>

      </div>

      {/* Apply */}

      <div className="filter-footer">

        <button className="apply-filter-btn">
          Apply Filters
        </button>

      </div>

    </section>
  );
}