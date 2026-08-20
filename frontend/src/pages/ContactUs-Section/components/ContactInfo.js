import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/ContactInfo.css";

export default function ContactInfo() {
  return (
    <div className="contact-info">

      <a href="tel:+9779857022211" className="info-card">
        <div className="icon-box">
          <FaPhoneAlt />
        </div>
        <h3>Call Us</h3>
        <p>+977-9857022211</p>
      </a>

      <a
        href="https://wa.me/9857022211"
        target="_blank"
        rel="noreferrer"
        className="info-card"
      >
        <div className="icon-box whatsapp">
          <FaWhatsapp />
        </div>
        <h3>WhatsApp</h3>
        <p>Chat instantly for property details</p>
      </a>

      <a href="mailto:info@srrealestate.com" className="info-card">
        <div className="icon-box email">
          <FaEnvelope />
        </div>
        <h3>Email Us</h3>
        <p>info@srrealestate.com</p>
      </a>

      <a
        href="https://maps.app.goo.gl/jtuHbx3rUkfWH1m96"
        target="_blank"
        rel="noreferrer"
        className="info-card"
      >
        <div className="icon-box map">
          <FaMapMarkerAlt />
        </div>
        <h3>Office Location</h3>
        <p>Bhairahawa, Nepal</p>
      </a>

    </div>
  );
}