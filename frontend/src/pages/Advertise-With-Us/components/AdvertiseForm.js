import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaTag,
  FaCommentAlt,
  FaPaperPlane,
} from "react-icons/fa";

import API from "../../../api/api";

import "../styles/AdvertiseForm.css";

export default function AdvertiseForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    propertyType: "",
    listingType: "",
    location: "",
    message: "",
  });


  // =====================================
  // HANDLE INPUT CHANGE
  // =====================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // =====================================
  // SUBMIT FORM
  // =====================================

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Frontend validation

    if (
      !form.fullName.trim() ||
      !form.phone.trim() ||
      !form.propertyType ||
      !form.listingType ||
      !form.location.trim()
    ) {
      alert(
        "Please fill in all required fields."
      );

      return;
    }


    try {
      setLoading(true);


      // Payload matches advertiseModel.js

      const payload = {
        fullName: form.fullName.trim(),

        phone: form.phone.trim(),

        email: form.email.trim(),

        propertyType: form.propertyType,

        listingType: form.listingType,

        location: form.location.trim(),

        message: form.message.trim(),
      };


      console.log(
        "Advertisement Payload:",
        payload
      );


      const { data } = await API.post(
        "/advertise",
        payload
      );


      if (data.success) {

        alert(
          "Your advertisement request has been submitted successfully!"
        );


        // Reset form

        setForm({
          fullName: "",
          phone: "",
          email: "",
          propertyType: "",
          listingType: "",
          location: "",
          message: "",
        });

      } else {

        alert(
          data.message ||
            "Failed to submit request."
        );

      }

    } catch (error) {

      console.error(
        "Advertisement submission error:",
        error
      );


      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <section
      className="advertise-form-section"
      id="advertise-form"
    >

      <div className="advertise-form-container">


        {/* =====================================
            LEFT CONTENT
        ====================================== */}

        <div className="advertise-form-left">

          <span className="advertise-tag">
            Advertise Your Property
          </span>


          <h2>
            Get Genuine Buyers &{" "}
            <span>Sell Faster</span>
          </h2>


          <p>
            Tell us about your property and our
            team will contact you to discuss
            advertising and listing opportunities
            with SR Real Estate.
          </p>


          <div className="advertise-form-note">

            <strong>
              What happens next?
            </strong>

            <p>
              Our team will review your request
              and contact you using the phone
              number provided.
            </p>

          </div>

        </div>


        {/* =====================================
            FORM
        ====================================== */}

        <form
          className="advertise-form"
          onSubmit={handleSubmit}
        >


          {/* FULL NAME */}

          <div className="form-group">

            <label htmlFor="advertise-fullName">

              <FaUser />

              Full Name
              <span>*</span>

            </label>


            <input
              id="advertise-fullName"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              required
            />

          </div>


          {/* PHONE */}

          <div className="form-group">

            <label htmlFor="advertise-phone">

              <FaPhone />

              Contact Number
              <span>*</span>

            </label>


            <input
              id="advertise-phone"
              type="tel"
              name="phone"
              placeholder="98XXXXXXXX"
              value={form.phone}
              onChange={handleChange}
              required
            />

          </div>


          {/* EMAIL */}

          <div className="form-group">

            <label htmlFor="advertise-email">

              <FaEnvelope />

              Email Address

              <small>
                Optional
              </small>

            </label>


            <input
              id="advertise-email"
              type="email"
              name="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={handleChange}
            />

          </div>


          {/* LOCATION */}

          <div className="form-group">

            <label htmlFor="advertise-location">

              <FaMapMarkerAlt />

              Property Location
              <span>*</span>

            </label>


            <input
              id="advertise-location"
              type="text"
              name="location"
              placeholder="City / Municipality / Area"
              value={form.location}
              onChange={handleChange}
              required
            />

          </div>


          {/* PROPERTY TYPE */}

          <div className="form-group">

            <label htmlFor="advertise-propertyType">

              <FaHome />

              Property Type
              <span>*</span>

            </label>


            <select
              id="advertise-propertyType"
              name="propertyType"
              value={form.propertyType}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Property Type
              </option>

              <option value="House">
                House
              </option>

              <option value="Apartment">
                Apartment
              </option>

              <option value="Land">
                Land
              </option>

              <option value="Commercial">
                Commercial
              </option>

              <option value="Office">
                Office
              </option>

              <option value="Villa">
                Villa
              </option>

              <option value="Shutter">
                Shutter
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>


          {/* LISTING TYPE */}

          <div className="form-group">

            <label htmlFor="advertise-listingType">

              <FaTag />

              Listing Type
              <span>*</span>

            </label>


            <select
              id="advertise-listingType"
              name="listingType"
              value={form.listingType}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Listing Type
              </option>

              <option value="Sale">
                Sale
              </option>

              <option value="Rent">
                Rent
              </option>

            </select>

          </div>


          {/* MESSAGE */}

          <div className="form-group advertise-message-group">

            <label htmlFor="advertise-message">

              <FaCommentAlt />

              Additional Message

              <small>
                Optional
              </small>

            </label>


            <textarea
              id="advertise-message"
              name="message"
              rows="4"
              placeholder="Tell us anything important about your property..."
              value={form.message}
              onChange={handleChange}
            />

          </div>


          {/* SUBMIT */}

          <button
            type="submit"
            className="advertise-submit-btn"
            disabled={loading}
          >

            <FaPaperPlane />

            {loading
              ? "Submitting..."
              : "Submit Advertisement"}

          </button>


        </form>

      </div>

    </section>
  );
}