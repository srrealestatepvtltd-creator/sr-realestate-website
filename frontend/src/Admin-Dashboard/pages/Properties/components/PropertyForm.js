import React, { useState } from "react";
import LocationPicker from "./LocationPicker";

export default function PropertyForm({
  property,
  setProperty,
  onSubmit,
}) {
  const [showMap, setShowMap] = useState(false);

  // =============================
  // Input Change
  // =============================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProperty((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =============================
  // Checkbox
  // =============================
  const handleCheckbox = (e) => {
    setProperty((prev) => ({
      ...prev,
      featured: e.target.checked,
    }));
  };

  // =============================
  // Thumbnail
  // =============================
  const handleThumbnail = (e) => {
    if (!e.target.files.length) return;

    setProperty((prev) => ({
      ...prev,
      thumbnail: e.target.files[0],
    }));
  };

  // =============================
  // Gallery Images
  // =============================
  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    setProperty((prev) => ({
      ...prev,
      images: files,
    }));
  };

  // =============================
  // Map Location Selected
  // =============================
  const handleLocationSelect = (lat, lng) => {
    setProperty((prev) => ({
      ...prev,
      latitude: lat,
      longitude: lng,
    }));

    setShowMap(false);
  };

  return (
    <>
      <form
        className="property-form"
        onSubmit={onSubmit}
      >
        <h2>Add New Property</h2>

        {/* ================= BASIC ================= */}

        <div className="form-card">
          <h3>Basic Information</h3>

          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={property.title}
            onChange={handleChange}
            required
          />

          <select
            name="listingType"
            value={property.listingType}
            onChange={handleChange}
          >
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
          </select>

          <select
            name="propertyType"
            value={property.propertyType}
            onChange={handleChange}
          >
            <option value="House">House</option>
            <option value="Land">Land</option>
            <option value="Apartment">
              Apartment
            </option>
            <option value="Commercial">
              Commercial
            </option>
          </select>

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={property.price}
            onChange={handleChange}
          />

          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={property.featured}
              onChange={handleCheckbox}
            />

            Featured Property
          </label>
        </div>

        {/* ================= LOCATION ================= */}

        <div className="form-card">
          <h3>Location</h3>

          <input
            name="province"
            placeholder="Province"
            value={property.province}
            onChange={handleChange}
          />

          <input
            name="district"
            placeholder="District"
            value={property.district}
            onChange={handleChange}
          />

          <input
            name="municipality"
            placeholder="Municipality"
            value={property.municipality}
            onChange={handleChange}
          />

          <input
            name="ward"
            placeholder="Ward"
            value={property.ward}
            onChange={handleChange}
          />

          <input
            className="full-width"
            name="address"
            placeholder="Street Address"
            value={property.address}
            onChange={handleChange}
          />
        </div>

        {/* ================= MAP ================= */}

        <div className="form-card">
          <h3>Property Location</h3>

          <input
            type="number"
            step="0.000001"
            name="latitude"
            placeholder="Latitude"
            value={property.latitude}
            onChange={handleChange}
          />

          <input
            type="number"
            step="0.000001"
            name="longitude"
            placeholder="Longitude"
            value={property.longitude}
            onChange={handleChange}
          />

          <button
            type="button"
            className="map-btn"
            onClick={() => setShowMap(true)}
          >
            📍 Pick Location From Map
          </button>

          {property.latitude &&
            property.longitude && (
              <div className="selected-location">
                <strong>
                  Selected Location
                </strong>

                <p>
                  Latitude :
                  {" "}
                  {property.latitude}
                </p>

                <p>
                  Longitude :
                  {" "}
                  {property.longitude}
                </p>
              </div>
            )}
        </div>

        {/* ================= DETAILS ================= */}

        <div className="form-card">
          <h3>Property Details</h3>

          <input
            type="number"
            name="bedrooms"
            placeholder="Bedrooms"
            value={property.bedrooms}
            onChange={handleChange}
          />

          <input
            type="number"
            name="bathrooms"
            placeholder="Bathrooms"
            value={property.bathrooms}
            onChange={handleChange}
          />

          <input
            type="number"
            name="kitchens"
            placeholder="Kitchens"
            value={property.kitchens}
            onChange={handleChange}
          />

          <input
            type="number"
            name="livingRooms"
            placeholder="Living Rooms"
            value={property.livingRooms}
            onChange={handleChange}
          />

          <input
            type="number"
            name="parking"
            placeholder="Parking"
            value={property.parking}
            onChange={handleChange}
          />

          <input
            type="number"
            name="floors"
            placeholder="Floors"
            value={property.floors}
            onChange={handleChange}
          />

          <input
            type="number"
            name="areaSqFt"
            placeholder="Area (Sq.ft)"
            value={property.areaSqFt}
            onChange={handleChange}
          />

          <input
            type="text"
            name="roadWidth"
            placeholder="Road Width"
            value={property.roadWidth}
            onChange={handleChange}
          />

          <input
            type="text"
            name="facing"
            placeholder="Facing"
            value={property.facing}
            onChange={handleChange}
          />
        </div>

        {/* ================= DESCRIPTION ================= */}

        <div className="form-card">
          <h3>Description</h3>

          <textarea
            rows="6"
            name="description"
            placeholder="Write complete property description..."
            value={property.description}
            onChange={handleChange}
          />
        </div>

        {/* ================= THUMBNAIL ================= */}

        <div className="form-card">
          <h3>Thumbnail</h3>

          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnail}
          />

          {property.thumbnail && (
            <div className="file-preview">
              <img
                src={URL.createObjectURL(
                  property.thumbnail
                )}
                alt=""
              />

              <span>
                {property.thumbnail.name}
              </span>
            </div>
          )}
        </div>

        {/* ================= GALLERY ================= */}

        <div className="form-card">
          <h3>Gallery Images</h3>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImages}
          />

          {property.images.length > 0 && (
            <div className="gallery-preview">
              {property.images.map(
                (img, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(img)}
                    alt=""
                  />
                )
              )}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="publish-btn"
        >
          Publish Property
        </button>
      </form>

      {/* ================= MAP MODAL ================= */}

      {showMap && (
        <LocationPicker
          onSelect={handleLocationSelect}
          onClose={() =>
            setShowMap(false)
          }
        />
      )}
    </>
  );
}