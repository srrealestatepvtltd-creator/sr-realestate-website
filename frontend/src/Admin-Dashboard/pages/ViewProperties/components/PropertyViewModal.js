import React from "react";
import {
  FaHome,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaCar,
  FaCalendarAlt,
  FaTimes,
  FaRoad,
  FaCompass,
  FaRulerCombined,
} from "react-icons/fa";

import { FaMoneyBillWave } from "react-icons/fa6";

import "../styles/PropertyViewModal.css";

export default function PropertyViewModal({
  property,
  open,
  onClose,
}) {

if (!open || !property) return null;

return (

<div className="property-modal-overlay">

    <div className="property-modal-table">

        {/* Header */}

        <div className="property-modal-header">

            <h2>Property Details</h2>

            <button
                className="close-modal"
                onClick={onClose}
            >
                <FaTimes />
            </button>

        </div>

        {/* Banner */}

        <div className="property-banner">

            <img
                src={
                    property.thumbnail ||
                    property.images?.[0] ||
                    "https://placehold.co/900x500"
                }
                alt={property.title}
            />

        </div>

        {/* Gallery */}

        {property.images?.length > 1 && (

            <div className="property-gallery">

                {property.images.map((img, index) => (

                    <img
                        key={index}
                        src={img}
                        alt={`Property ${index + 1}`}
                    />

                ))}

            </div>

        )}

        {/* Title */}

        <div className="property-title">

            <div>

                <h1>{property.title}</h1>

                <p>

                    {property.listingType} • {property.propertyType}

                </p>

            </div>

            <span
                className={`status ${property.status?.toLowerCase()}`}
            >
                {property.status}
            </span>

        </div>

        {/* Price */}

        <div className="property-price">

            <FaMoneyBillWave />

            Rs. {Number(property.price || 0).toLocaleString()}

        </div>

        {/* Property Grid */}

        <div className="property-grid">
                      <div className="info-card">

                <FaHome />

                <div>

                    <label>Property Type</label>

                    <p>{property.propertyType}</p>

                </div>

            </div>

            <div className="info-card">

                <FaMapMarkerAlt />

                <div>

                    <label>Location</label>

                    <p>
                        {property.address},{" "}
                        Ward {property.ward},{" "}
                        {property.municipality},{" "}
                        {property.district},{" "}
                        {property.province}
                    </p>

                </div>

            </div>

            <div className="info-card">

                <FaRulerCombined />

                <div>

                    <label>Area</label>

                    <p>{property.areaSqFt} Sq.ft</p>

                </div>

            </div>

            <div className="info-card">

                <FaBed />

                <div>

                    <label>Bedrooms</label>

                    <p>{property.bedrooms}</p>

                </div>

            </div>

            <div className="info-card">

                <FaBath />

                <div>

                    <label>Bathrooms</label>

                    <p>{property.bathrooms}</p>

                </div>

            </div>

            <div className="info-card">

                <FaCar />

                <div>

                    <label>Parking</label>

                    <p>{property.parking}</p>

                </div>

            </div>

            <div className="info-card">

                <FaHome />

                <div>

                    <label>Living Rooms</label>

                    <p>{property.livingRooms}</p>

                </div>

            </div>

            <div className="info-card">

                <FaHome />

                <div>

                    <label>Kitchens</label>

                    <p>{property.kitchens}</p>

                </div>

            </div>

            <div className="info-card">

                <FaRoad />

                <div>

                    <label>Road Width</label>

                    <p>{property.roadWidth} ft</p>

                </div>

            </div>

            <div className="info-card">

                <FaCompass />

                <div>

                    <label>Facing</label>

                    <p>{property.facing}</p>

                </div>

            </div>

            <div className="info-card">

                <FaCalendarAlt />

                <div>

                    <label>Created</label>

                    <p>

                        {new Date(
                            property.createdAt
                        ).toLocaleDateString()}

                    </p>

                </div>

            </div>

        </div>

        {/* Description */}

        <div className="property-section">

            <h3>Description</h3>

            <p>

                {property.description ||
                    "No description available."}

            </p>

        </div>
{/* Amenities */}

<div className="property-section">

    <h3>Amenities</h3>

    <div className="chips">

        {property.amenities?.length ? (

            property.amenities.map((item, index) => (

                <span key={index}>
                    {item}
                </span>

            ))

        ) : (

            <p>No Amenities Added</p>

        )}

    </div>

</div>

{/* Property Coordinates */}

{(property.latitude || property.longitude) && (

    <div className="property-section">

        <h3>Location Coordinates</h3>

        <div className="property-grid">

            <div className="info-card">

                <FaMapMarkerAlt />

                <div>

                    <label>Latitude</label>

                    <p>{property.latitude}</p>

                </div>

            </div>

            <div className="info-card">

                <FaMapMarkerAlt />

                <div>

                    <label>Longitude</label>

                    <p>{property.longitude}</p>

                </div>

            </div>

        </div>

    </div>

)}

{/* Property Statistics */}

<div className="property-section">

    <h3>Property Statistics</h3>

    <div className="property-grid">

        <div className="info-card">

            <FaHome />

            <div>

                <label>Views</label>

                <p>{property.views || 0}</p>

            </div>

        </div>

        <div className="info-card">

            <FaHome />

            <div>

                <label>Verified</label>

                <p>
                    {property.isVerified
                        ? "Verified"
                        : "Not Verified"}
                </p>

            </div>

        </div>

    </div>

</div>

    </div>

</div>

);
}