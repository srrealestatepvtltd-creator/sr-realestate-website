import React from "react";

import ContactForm from "./pages/ContactUs-Section/components/ContactForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/RequestQuote.css";

export default function RequestQuote() {
  return (
    <div>
        <Navbar />
    <section
      className="request-quote-section"
      id="request-quote"
    >

      <div className="request-quote-container">

        {/* LEFT CONTENT */}

        <div className="request-quote-content">

          <span className="request-quote-tag">
            Request a Quote
          </span>

          <h2>
            Looking for the Right Property?
            <span> Let Us Help You Find It.</span>
          </h2>

          <p>
            Tell us what you are looking for, including your
            preferred property type, location, and budget.
            Our property team will review your requirements
            and get in touch with suitable options.
          </p>

          <div className="request-quote-points">

            <div>
              <span>✓</span>
              Personalized property suggestions
            </div>

            <div>
              <span>✓</span>
              Properties based on your location
            </div>

            <div>
              <span>✓</span>
              Buy and rent options
            </div>

            <div>
              <span>✓</span>
              Quick response from our team
            </div>

          </div>

        </div>


        {/* CONTACT FORM */}

        <div className="request-quote-form-wrapper">

          <ContactForm />

        </div>

      </div>

    </section>
    <Footer />
    </div>
  );
}