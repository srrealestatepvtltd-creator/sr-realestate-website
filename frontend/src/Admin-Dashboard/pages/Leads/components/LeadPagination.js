import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "../styles/LeadPagination.css";

export default function LeadPagination() {
  return (
    <section className="lead-pagination">

      {/* Left */}

      <div className="pagination-info">

        <span>
          Showing
          <strong> 1 - 10 </strong>
          of
          <strong> 152 </strong>
          Leads
        </span>

      </div>

      {/* Center */}

      <div className="pagination-pages">

        <button className="page-btn">
          <FaChevronLeft />
        </button>

        <button className="page-btn active">
          1
        </button>

        <button className="page-btn">
          2
        </button>

        <button className="page-btn">
          3
        </button>

        <button className="page-btn">
          4
        </button>

        <button className="page-btn">
          5
        </button>

        <button className="page-btn">
          ...
        </button>

        <button className="page-btn">
          16
        </button>

        <button className="page-btn">
          <FaChevronRight />
        </button>

      </div>

      {/* Right */}

      <div className="pagination-limit">

        <label>Rows</label>

        <select>

          <option>10</option>

          <option>25</option>

          <option>50</option>

          <option>100</option>

        </select>

      </div>

    </section>
  );
}