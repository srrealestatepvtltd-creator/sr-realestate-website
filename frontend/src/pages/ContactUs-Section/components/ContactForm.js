import React, { useState } from "react";
import { motion } from "framer-motion";
import API from "../../../api/api";
import "../styles/ContactForm.css";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",

    propertyType: "House",
    preferredLocation: "",

    budget: "",

    message: "",

    leadSource: "Website",
    priority: "Medium",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,

        propertyType: formData.propertyType,

        preferredLocation: formData.preferredLocation,

        budget: formData.budget,

        message: formData.message,

        leadSource: formData.leadSource,

        priority: formData.priority,
      };

      const { data } = await API.post("/leads", payload);

      alert(data.message);

      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",

        propertyType: "House",
        preferredLocation: "",

        budget: "",

        message: "",

        leadSource: "Website",
        priority: "Medium",
      });
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="hero-form"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2>Get Free Consultation</h2>

      <p className="hero-form-subtitle">
        Our property experts will contact you shortly.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address (Optional)"
          value={formData.email}
          onChange={handleChange}
        />

        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
        >
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Land">Land</option>
          <option value="Commercial">Commercial</option>
        </select>

        <input
          type="text"
          name="preferredLocation"
          placeholder="Preferred Location"
          value={formData.preferredLocation}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="budget"
          placeholder="Your Budget (NPR)"
          value={formData.budget}
          onChange={handleChange}
          required
        />

        <textarea
          rows="4"
          className="message-input"
          name="message"
          placeholder="Tell us what kind of property you're looking for..."
          value={formData.message}
          onChange={handleChange}
        />

        {/* Hidden values for CRM */}

        <input
          type="hidden"
          name="leadSource"
          value={formData.leadSource}
        />

        <input
          type="hidden"
          name="priority"
          value={formData.priority}
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Request Callback"}
        </button>
      </form>
    </motion.div>
  );
}