import React from "react";
import {
  FaBed,
  FaBath,
  FaCar,
  FaMapMarkerAlt,
  FaExpandArrowsAlt,
  FaHome,
} from "react-icons/fa";
import "../styles/PropertyPreview.css";
export default function PropertyPreview({ property }) {
  const thumbnailPreview = property.thumbnail
    ? URL.createObjectURL(property.thumbnail)
    : null;

  return (
    <div className="property-preview">

      <h2>Live Property Preview</h2>

      <div className="preview-card">

        {/* IMAGE */}
        <div className="preview-image">

          {thumbnailPreview ? (
            <img
              src={thumbnailPreview}
              alt="Thumbnail Preview"
            />
          ) : (
            <div className="image-placeholder">
              No Thumbnail Selected
            </div>
          )}

          <div className="preview-badge">
            {property.listingType || "Sale"}
          </div>

        </div>

        {/* CONTENT */}
        <div className="preview-content">

          <h3>
            {property.title || "Property Title"}
          </h3>

          <div className="preview-type">
            <FaHome />
            <span>
              {property.propertyType || "Property Type"}
            </span>
          </div>

          <div className="preview-location">
            <FaMapMarkerAlt />

            <span>
              {[
                property.address,
                property.ward,
                property.municipality,
                property.district,
                property.province,
              ]
                .filter(Boolean)
                .join(", ") || "Property Location"}
            </span>
          </div>

          <h2 className="preview-price">
            Rs. {property.price || "0"}
          </h2>

          {/* FEATURES */}

          <div className="preview-features">

            <span>
              <FaBed />
              {property.bedrooms || 0} Beds
            </span>

            <span>
              <FaBath />
              {property.bathrooms || 0} Baths
            </span>

            <span>
              <FaCar />
              {property.parking || 0} Parking
            </span>

            <span>
              <FaExpandArrowsAlt />
              {property.areaSqFt || 0} Sq.ft
            </span>

          </div>

          <div className="preview-extra">

            <p>
              <strong>Road Width:</strong>{" "}
              {property.roadWidth || "-"}
            </p>

            <p>
              <strong>Facing:</strong>{" "}
              {property.facing || "-"}
            </p>

            <p>
              <strong>Latitude:</strong>{" "}
              {property.latitude || "-"}
            </p>

            <p>
              <strong>Longitude:</strong>{" "}
              {property.longitude || "-"}
            </p>

          </div>

          <div className="preview-description">

            <h4>Description</h4>

            <p>
              {property.description ||
                "Property description will appear here..."}
            </p>

          </div>

          {/* Gallery Preview */}

          {property.images.length > 0 && (

            <div className="gallery-preview">

              <h4>Gallery Images</h4>

              <div className="gallery-grid">

                {property.images.map((image, index) => (

                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Gallery ${index}`}
                  />

                ))}

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}