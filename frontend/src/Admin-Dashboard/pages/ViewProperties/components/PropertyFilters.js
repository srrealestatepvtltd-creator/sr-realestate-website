import React from "react";
import {
  FaSearch,
  FaHome,
  FaMapMarkerAlt,
  FaFilter,
  FaUndo,
} from "react-icons/fa";

import "../styles/PropertyFilters.css";

export default function PropertyFilters({
  filters,
  setFilters,
}) {

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const resetFilters = () => {
    setFilters({
      keyword: "",
      propertyType: "",
      listingType: "",
      district: "",
      status: "",
    });
  };

  return (

    <section className="property-filters">

      <div className="filter-header">

        <div>

          <h2>
            <FaFilter />
            Property Filters
          </h2>

          <p>
            Quickly find any property.
          </p>

        </div>

        <button
          className="reset-btn"
          onClick={resetFilters}
        >
          <FaUndo />
          Reset
        </button>

      </div>

      <div className="filter-grid">

        <div className="filter-input">

          <FaSearch />

          <input
            type="text"
            name="keyword"
            placeholder="Search property..."
            value={filters.keyword}
            onChange={handleChange}
          />

        </div>

        <div className="filter-input">

          <FaHome />

          <select
            name="propertyType"
            value={filters.propertyType}
            onChange={handleChange}
          >

            <option value="">
              Property Type
            </option>

            <option value="House">
              House
            </option>

            <option value="Apartment">
              Apartment
            </option>

            <option value="Land">
              Land
            </option>

            <option value="Commercial">
              Commercial
            </option>

          </select>

        </div>

        <div className="filter-input">

          <FaHome />

          <select
            name="listingType"
            value={filters.listingType}
            onChange={handleChange}
          >

            <option value="">
              Sale / Rent
            </option>

            <option value="Sale">
              Sale
            </option>

            <option value="Rent">
              Rent
            </option>

          </select>

        </div>

        <div className="filter-input">

          <FaMapMarkerAlt />

          <input
            type="text"
            name="district"
            placeholder="District"
            value={filters.district}
            onChange={handleChange}
          />

        </div>

        <div className="filter-input">

          <FaFilter />

          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
          >

            <option value="">
              Status
            </option>

            <option value="Available">
              Available
            </option>

            <option value="Reserved">
              Reserved
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="Sold">
              Sold
            </option>

          </select>

        </div>

      </div>

    </section>

  );
}