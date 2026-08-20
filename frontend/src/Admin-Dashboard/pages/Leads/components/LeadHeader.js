import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaUsers,
} from "react-icons/fa";

import API from "../../../../api/api";
import "../styles/LeadHeader.css";

export default function LeadHeader() {

  const [search, setSearch] = useState("");
  const [totalLeads, setTotalLeads] = useState(0);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const { data } = await API.get("/leads");

      if (data.success) {
        const leads =
          data.leads ||
          data.data ||
          [];

        setTotalLeads(leads.length);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="lead-header">

      {/* LEFT */}
      <div className="lead-header-left">

        <span className="lead-tag">
          Lead Management
        </span>

        <h1>Manage Your Property Leads</h1>

        <p>
          Track, organize, and follow up with potential buyers,
          sellers, and investors from one centralized dashboard.
        </p>

      </div>

      {/* RIGHT */}
      <div className="lead-header-right">

        <div className="lead-search">

          <FaSearch />

          <input
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search by name, phone, email..."
          />

        </div>

        <div className="lead-actions">

          <button className="add-btn">
            <FaPlus />
            Add Lead
          </button>

        </div>

        <div className="lead-total">

          <FaUsers />

          <div>
            <h3>{totalLeads}</h3>
            <span>Total Leads</span>
          </div>

        </div>

      </div>

    </section>
  );
}