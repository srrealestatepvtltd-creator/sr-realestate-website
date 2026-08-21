import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import ContactForm from "../pages/ContactUs-Section/components/ContactForm";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            🏡 Trusted Real Estate Partner in Nepal
          </span>

          <h1>
            Find Your Dream Property With{" "}
            <span>SR Real Estate</span>
          </h1>

          <p>
            Discover premium houses, apartments, land, and commercial
            properties. Buy, sell, and invest across Nepal with trust.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => window.location.href = "/best-properties-in-nepal"}  >
              Explore Properties
            </button>

            <button className="secondary-btn" onClick={() => window.location.href = "/contact"} >
              Contact Us
            </button>
          </div>

        
         
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          // className="hero-form"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContactForm />
          {/* <h2>Get Free Consultation</h2>

          <form>
            <input type="text" placeholder="Full Name" />
            <input type="tel" placeholder="Phone Number" />

            <select>
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Land</option>
              <option>Commercial</option>
            </select>

            <input type="text" placeholder="Preferred Location" />
            <input type="text" placeholder="Your Budget" />

            <button type="submit">
              Request Callback
            </button>
          </form> */}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;