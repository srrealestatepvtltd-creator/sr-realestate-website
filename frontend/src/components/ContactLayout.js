import React from "react";
import ContactInfo from '../pages/ContactUs-Section/components/ContactInfo';
import ContactForm from '../pages/ContactUs-Section/components/ContactForm';
import "../styles/ContactLayout.css";

export default function ContactLayout() {
  return (
    <section className="contact-wrapper">
      <div className="contact-grid">

        {/* LEFT SIDE */}
        <div className="contact-left">
           <ContactForm />
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
      <ContactInfo />
        </div>

      </div>
    </section>
  );
}