import React, { useState } from "react";
import "../styles/PropertyFilter.css";

export default function PropertyFilterBar() {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    minPrice: "",
    maxPrice: "",
    beds: "",
    status: "",
  });

  return (
    <section className="filter-bar">

      <div className="filter-container">

        {/* PROPERTY TYPE */}
        <select
          onChange={(e) =>
            setFilters({ ...filters, type: e.target.value })
          }
        >
          <option>Property Type</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Land</option>
          <option>Commercial</option>
        </select>

        {/* LOCATION */}
        <select
          onChange={(e) =>
            setFilters({ ...filters, location: e.target.value })
          }
        >
          <option>Location</option>
          <option>Bhairahawa</option>
          <option>Butwal</option>
          <option>Kathmandu</option>
          <option>Pokhara</option>
        </select>

        {/* MIN PRICE */}
        <input
          type="number"
          placeholder="Min Price"
          onChange={(e) =>
            setFilters({ ...filters, minPrice: e.target.value })
          }
        />

        {/* MAX PRICE */}
        <input
          type="number"
          placeholder="Max Price"
          onChange={(e) =>
            setFilters({ ...filters, maxPrice: e.target.value })
          }
        />

        {/* BEDS */}
        <select
          onChange={(e) =>
            setFilters({ ...filters, beds: e.target.value })
          }
        >
          <option>Bedrooms</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
          <option>4+</option>
        </select>

        {/* STATUS */}
        <select
          onChange={(e) =>
            setFilters({ ...filters, status: e.target.value })
          }
        >
          <option>Status</option>
          <option>For Sale</option>
          <option>For Rent</option>
          <option>Verified</option>
        </select>

        <button className="filter-btn">
          Apply Filters
        </button>

      </div>

    </section>
  );
}