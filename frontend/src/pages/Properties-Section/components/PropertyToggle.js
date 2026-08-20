import React, { useState, useEffect } from "react";
import PropertyGrid from "./PropertyGrid";
import PropertyMap from "./PropertyMap";
import API from "../../../api/api";
import "../styles/PropertyToggle.css";

export default function PropertyViewToggle() {
  const [view, setView] = useState("grid");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const { data } = await API.get("/properties");

      if (data.success) {
        setProperties(data.properties);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="property-toggle">

      <div className="sr-toggle-header">
        <h2>
          Explore Properties in <span>Nepal</span>
        </h2>

        <p>
          Switch between Grid View and Map View.
        </p>
      </div>

      <div className="sr-toggle-buttons">

        <button
          className={view === "grid" ? "active" : ""}
          onClick={() => setView("grid")}
        >
          Grid View
        </button>

        <button
          className={view === "map" ? "active" : ""}
          onClick={() => setView("map")}
        >
          Map View
        </button>

      </div>

      <div className="sr-toggle-content">

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {view === "grid" && (
              <PropertyGrid properties={properties} />
            )}

            {view === "map" && (
              <PropertyMap properties={properties} />
            )}
          </>
        )}

      </div>

    </section>
  );
}