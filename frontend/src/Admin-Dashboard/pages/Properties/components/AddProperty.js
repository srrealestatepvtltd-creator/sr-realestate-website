import React, { useState } from "react";
import axios from "axios";

import PropertyForm from "./PropertyForm";
import PropertyPreview from "./PropertyPreview";

import "../styles/AddProperty.css";

const initialProperty = {
  title: "",
  listingType: "Sale",
  propertyType: "House",

  price: "",

  province: "",
  district: "",
  municipality: "",
  ward: "",
  address: "",

  latitude: "",
  longitude: "",

  bedrooms: "",
  bathrooms: "",
  kitchens: "",
  livingRooms: "",
  parking: "",
  floors: "",

  areaSqFt: "",
  roadWidth: "",
  facing: "",

  description: "",

  featured: false,

  thumbnail: null,

  images: [],
};

export default function AddProperty() {
  const [property, setProperty] = useState(initialProperty);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Basic
      formData.append("title", property.title);
      formData.append("listingType", property.listingType);
      formData.append("propertyType", property.propertyType);
      formData.append("price", property.price);

      // Location
      formData.append("province", property.province);
      formData.append("district", property.district);
      formData.append("municipality", property.municipality);
      formData.append("ward", property.ward);
      formData.append("address", property.address);

      // Map
      formData.append("latitude", property.latitude);
      formData.append("longitude", property.longitude);

      // Details
      formData.append("bedrooms", property.bedrooms);
      formData.append("bathrooms", property.bathrooms);
      formData.append("kitchens", property.kitchens);
      formData.append("livingRooms", property.livingRooms);
      formData.append("parking", property.parking);
      formData.append("floors", property.floors);
      formData.append("areaSqFt", property.areaSqFt);
      formData.append("roadWidth", property.roadWidth);
      formData.append("facing", property.facing);

      formData.append("description", property.description);
      formData.append("featured", property.featured);

      if (property.thumbnail) {
        formData.append("thumbnail", property.thumbnail);
      }

      property.images.forEach((img) => {
        formData.append("images", img);
      });

      const res = await axios.post(
        "http://localhost:5000/api/properties",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data.message);

      // Clear form after successful upload
      setProperty(initialProperty);

    } catch (err) {
      console.log(err);
      alert("Failed to upload property");
    }
  };

  return (
    <div className="property-page">

      <PropertyForm
        property={property}
        setProperty={setProperty}
        onSubmit={handleSubmit}
      />

      <PropertyPreview
        property={property}
      />

    </div>
  );
}