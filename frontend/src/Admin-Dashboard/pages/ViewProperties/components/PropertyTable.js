import React, { useEffect, useState } from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaMapMarkerAlt,
  FaHome,
} from "react-icons/fa";

import API from "../../../../api/api";
import PropertyViewModal from "./PropertyViewModal";
import "../styles/PropertyTable.css";

export default function PropertyTable({
  onEdit,
  onDelete,
}) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // View Modal State
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

 const fetchProperties = async () => {
  try {
    setLoading(true);

    const response = await API.get("/properties");

    console.log("Property Response:", response.data);

    if (response.data.success) {

      // Support every possible backend response
      const propertyList =
        response.data.properties ||
        response.data.data ||
        [];

      setProperties(propertyList);

    } else {
      setProperties([]);
    }

  } catch (err) {

    console.error("Failed to load properties", err);

    setProperties([]);

  } finally {

    setLoading(false);

  }
};

  const handleView = (property) => {
    setSelectedProperty(property);
    setViewOpen(true);
  };

  const handleClose = () => {
    setViewOpen(false);
    setSelectedProperty(null);
  };

  const formatPrice = (price) => {
    if (!price) return "-";

    return Number(price).toLocaleString("en-IN");
  };

  if (loading) {
    return (
      <section className="property-table-section">
        <div className="property-loading">
          Loading Properties...
        </div>
      </section>
    );
  }

 return (
  <>
    <section className="property-table-section">

      <div className="property-table-header">
        <div>
          <h2>Property Listings</h2>
          <p>Manage every property from one place.</p>
        </div>

        <span className="property-count">
          {properties.length} Properties
        </span>
      </div>

      <div className="property-table-wrapper">

        <table>

          <thead>
            <tr>
              <th>Image</th>
              <th>Property</th>
              <th>Type</th>
              <th>Purpose</th>
              <th>Location</th>
              <th>Price</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {properties.length === 0 ? (

              <tr>
                <td
                  colSpan={9}
                  className="no-property"
                >
                  No Properties Found
                </td>
              </tr>

            ) : (

              properties.map((property) => (

                <tr key={property._id}>

                  {/* Image */}

                  <td>
                    <img
                      className="property-image-admin"
                      src={
                        property.thumbnail ||
                        property.images?.[0] ||
                        "https://placehold.co/120x80"
                      }
                      alt={property.title}
                    />
                  </td>

                  {/* Property */}

                  <td>

                    <div className="property-info">

                      <h4>{property.title}</h4>

                      <span>
                        <FaHome />
                        {property.propertyType}
                      </span>

                    </div>

                  </td>

                  {/* Type */}

                  <td>{property.propertyType}</td>

                  {/* Purpose */}

                  <td>
                    <span className="purpose-badge">
                      {property.listingType}
                    </span>
                  </td>

                  {/* Location */}

                  <td>

                    <div className="location">

                      <FaMapMarkerAlt />

                      {[
                        property.municipality,
                        property.district,
                      ]
                        .filter(Boolean)
                        .join(", ")}

                    </div>

                  </td>

                  {/* Price */}

                  <td>

                    Rs. {formatPrice(property.price)}

                  </td>

                  {/* Status */}

                  <td>

                    <span
                      className={`status ${property.status
                        ?.toLowerCase()
                        .replace(/\s/g, "-")}`}
                    >
                      {property.status}
                    </span>

                  </td>

                  {/* Created */}

                  <td>

                    {new Date(
                      property.createdAt
                    ).toLocaleDateString()}

                  </td>

                  {/* Actions */}

                  <td>

                    <div className="table-actions">

                      <button
                        className="view-btn"
                        onClick={() => handleView(property)}
                      >
                        <FaEye />
                      </button>

                      <button
                        className="edit-btn"
                        onClick={() => onEdit?.(property)}
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => onDelete?.(property)}
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </section>

    {/* KEEP THE MODAL OUTSIDE THE TABLE */}

    <PropertyViewModal
      open={viewOpen}
      property={selectedProperty}
      onClose={handleClose}
    />

  </>
);
}