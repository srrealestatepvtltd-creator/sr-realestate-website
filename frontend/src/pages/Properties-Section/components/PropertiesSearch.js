import React, { useState, useMemo } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaHome,
  FaMoneyBillWave,
} from "react-icons/fa";

import "../styles/PropertiesSearch.css";

export default function PropertyHeroSearch({
  properties = [],
  onSearch,
}) {
  const [filters, setFilters] = useState({
    keyword: "",
    district: "",
    propertyType: "",
    listingType: "",
    maxPrice: "",
  });

  const districts = useMemo(() => {
    if (!Array.isArray(properties)) return [];

    return [
      ...new Set(
        properties
          .map((item) => item?.district)
          .filter(Boolean)
      ),
    ].sort();
  }, [properties]);

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = () => {
    if (typeof onSearch === "function") {
      onSearch(filters);
    }
  };

  const clearFilters = () => {
    const empty = {
      keyword: "",
      district: "",
      propertyType: "",
      listingType: "",
      maxPrice: "",
    };

    setFilters(empty);

    if (typeof onSearch === "function") {
      onSearch(empty);
    }
  };

  return (
    <section className="property-hero">

      <div className="hero-overlay"></div>

      <div className="hero-content-properties">

        <h1>
          Find Your Perfect <span>Property</span>
        </h1>

        <p className="hero-subtitle">
          Search verified houses, apartments, land and commercial
          properties across Nepal.
        </p>

        <div className="search-box">

          <div className="search-grid">

            <div className="input-group keyword">
              <FaSearch />
              <input
                type="text"
                name="keyword"
                placeholder="Search title or address"
                value={filters.keyword}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <FaMapMarkerAlt />

              <select
                name="district"
                value={filters.district}
                onChange={handleChange}
              >
                <option value="">
                  All Districts
                </option>

                {districts.map((district) => (
                  <option
                    key={district}
                    value={district}
                  >
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
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

                <option value="Land">
                  Land
                </option>

                <option value="Apartment">
                  Apartment
                </option>

                <option value="Commercial">
                  Commercial
                </option>
              </select>
            </div>

            <div className="input-group">
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

            <div className="input-group">
              <FaMoneyBillWave />

              <input
                type="number"
                name="maxPrice"
                placeholder="Maximum Price"
                value={filters.maxPrice}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="button-row">

            <button
              className="search-btn"
              onClick={handleSearch}
            >
              <FaSearch />
              Search Properties
            </button>

            <button
              className="clear-btn"
              onClick={clearFilters}
            >
              Clear Filters
            </button>

          </div>

        </div>

        <div className="quick-tags">

          <span>🏡 Houses</span>
          <span>🌾 Land</span>
          <span>🏢 Apartments</span>
          <span>🏬 Commercial</span>
          <span>💰 Investment</span>

        </div>

      </div>

    </section>
  );
}