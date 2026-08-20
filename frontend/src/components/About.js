import React from "react";
import { useInView } from "react-intersection-observer";
import {
  FaHome,
  FaShieldAlt,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";
import "../styles/About.css";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="about" ref={ref}>
      <div className={`about-container ${inView ? "show" : ""}`}>

        {/* LEFT IMAGE SIDE */}
        <div className="about-image">
          <div className="image-card"></div>

         
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h2>
            About <span>SR Real Estate</span>
          </h2>

          <p>
            We are a modern digital real estate platform helping people
            buy, sell, and invest in properties across Nepal. Our goal is
            to make property search simple, fast, and transparent using
            technology.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <FaHome className="icon" />
              <h4>Smart Listings</h4>
              <p>Verified and updated property listings daily.</p>
            </div>

            <div className="about-card">
              <FaShieldAlt className="icon" />
              <h4>Trusted Deals</h4>
              <p>Safe and secure property transactions.</p>
            </div>

            <div className="about-card">
              <FaHandshake className="icon" />
              <h4>Easy Process</h4>
              <p>Simple buying and selling experience.</p>
            </div>

            <div className="about-card">
              <FaGlobe className="icon" />
              <h4>Digital Reach</h4>
              <p>Connecting Nepal’s property market online.</p>
            </div>
          </div>

          <button className="about-btn">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}