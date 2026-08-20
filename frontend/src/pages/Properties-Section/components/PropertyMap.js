import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ================= FIT MAP TO ALL MARKERS =================

function FitBounds({ properties }) {
  const map = useMap();
console.log("properties in FitBounds:", properties);
  useEffect(() => {
    if (!properties.length) return;

    const validLocations = properties.filter(
      (item) =>
        item.latitude &&
        item.longitude &&
        !isNaN(item.latitude) &&
        !isNaN(item.longitude)
    );

    if (!validLocations.length) return;

    const bounds = validLocations.map((item) => [
      Number(item.latitude),
      Number(item.longitude),
    ]);

    map.fitBounds(bounds, {
      padding: [50, 50],
    });
  }, [properties, map]);

  return null;
}

export default function PropertyMap({ properties = [] }) {
  return (
    <MapContainer
      center={[28.3949, 84.124]}
      zoom={7}
      scrollWheelZoom={true}
      style={{
        width: "100%",
        height: "650px",
        borderRadius: "15px",
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FitBounds properties={properties} />

      {properties.map((item) => {
        if (!item.latitude || !item.longitude) return null;

        return (
          <Marker
            key={item._id}
            position={[
              Number(item.latitude),
              Number(item.longitude),
            ]}
          >
            <Popup minWidth={260}>
              <div
                style={{
                  width: "240px",
                }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />

                <h3>{item.title}</h3>

                <p>
                  📍 {item.address}, {item.municipality},{" "}
                  {item.district}
                </p>

                <h4
                  style={{
                    color: "#0ea5e9",
                  }}
                >
                  Rs. {Number(item.price).toLocaleString()}
                </h4>

                <p>
                  🛏 {item.bedrooms} Bedroom
                </p>

                <p>
                  🛁 {item.bathrooms} Bathroom
                </p>

                <p>
                  📐 {item.areaSqFt} Sq.ft
                </p>

                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    background: "#0ea5e9",
                    color: "#fff",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginTop: "8px",
                  }}
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}