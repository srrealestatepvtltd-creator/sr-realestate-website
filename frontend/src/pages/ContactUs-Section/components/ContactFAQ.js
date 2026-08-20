import React, { useState } from "react";
import "../styles/ContactFAQ.css";

export default function ContactFAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "How fast do you respond to inquiries?",
      a: "We usually respond within 10–30 minutes via WhatsApp or phone call.",
    },
    {
      q: "Do you verify all properties before listing?",
      a: "Yes, every property goes through legal and ownership verification before being listed.",
    },
    {
      q: "Can I schedule a site visit?",
      a: "Yes, we arrange free site visits for all serious buyers across Nepal.",
    },
    {
      q: "Do you charge any commission?",
      a: "We charge a minimal and transparent service fee only after successful deals.",
    },
    {
      q: "Which locations do you serve in Nepal?",
      a: "We operate in Bhairahawa, Butwal, Kathmandu, Pokhara, Chitwan, and other major cities.",
    },
    {
      q: "Can you help with property legal documentation?",
      a: "Yes, we assist with full legal paperwork and ownership transfer support.",
    },
    {
      q: "Do you help in investment properties?",
      a: "Yes, we help clients find high ROI land and investment properties in Nepal.",
    },
  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? "active" : ""}`}
          >
            <h4 onClick={() => setOpen(open === i ? null : i)}>
              {item.q}
              <span>{open === i ? "−" : "+"}</span>
            </h4>

            {open === i && <p>{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}