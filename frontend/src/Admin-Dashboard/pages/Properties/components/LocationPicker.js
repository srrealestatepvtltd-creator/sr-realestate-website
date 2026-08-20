import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

// ================================
// Fix Leaflet marker issue
// ================================

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ======================================
// Click Marker Component
// ======================================

function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position ? (
    <Marker position={position} />
  ) : null;
}

export default function LocationPicker({
  onSelect,
  onClose,
}) {
  const [position, setPosition] = useState({
    lat: 27.7172,
    lng: 85.3240,
  });

  return (
    <div className="map-modal">

      <div className="map-container">

        {/* ================= Header ================= */}

        <div className="map-header">

          <h2>Select Property Location</h2>

          <button
            className="close-map"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        {/* ================= Map ================= */}

        <MapContainer
          center={[27.7172, 85.324]}
          zoom={8}
          style={{
            width: "100%",
            height: "500px",
          }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationMarker
            position={position}
            setPosition={setPosition}
          />
        </MapContainer>

        {/* ================= Coordinates ================= */}

        <div className="coordinate-box">

          <div>

            <strong>Latitude</strong>

            <p>{position.lat}</p>

          </div>

          <div>

            <strong>Longitude</strong>

            <p>{position.lng}</p>

          </div>

        </div>

        {/* ================= Buttons ================= */}

        <div className="map-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="select-btn"
            onClick={() =>
              onSelect(
                position.lat,
                position.lng
              )
            }
          >
            Use This Location
          </button>

        </div>

      </div>

    </div>
  );
}