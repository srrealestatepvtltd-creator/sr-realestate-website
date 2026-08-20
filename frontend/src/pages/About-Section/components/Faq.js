import React, { useState } from "react";
import {
  FaChevronDown,
} from "react-icons/fa";

import "../styles/Faq.css";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I buy property in Nepal through SR Real Estate?",
      a: "You can contact us via call or WhatsApp. Our team will understand your budget, show verified properties, arrange site visits, and help you complete safe legal documentation and ownership transfer.",
    },
    {
      q: "Are all properties listed on SR Real Estate verified?",
      a: "Yes. Every property goes through strict verification including ownership documents, location checks, and legal validation before being listed.",
    },
    {
      q: "Do you charge any commission for buying property?",
      a: "We charge a minimal and transparent service fee only after successful deals. No hidden charges are involved.",
    },
    {
      q: "Can I buy land or house for investment in Nepal?",
      a: "Yes. We help investors find high-potential land, houses, and commercial properties in fast-growing areas like Butwal, Bhairahawa, Kapilvastu, and more. We also provide insights on future growth and rental potential.",
    },
    {
      q: "How do I know if a property price is fair?",
      a: "Our experts analyze market trends, location demand, and future growth to ensure you get fair and competitive pricing.",
    },
    {
      q: "Do you help with legal paperwork and ownership transfer?",
      a: "Yes. We assist in complete documentation, legal verification, and safe ownership transfer process.",
    },
    {
      q: "Can I sell my property through SR Real Estate?",
      a: "Absolutely. You can list your property with us and we will promote it to genuine buyers across Nepal.",
    },
    {
      q: "Which locations do you cover in Nepal?",
      a: "We operate in major cities like  Bhairahawa, Butwal, Kapilvastu and expanding to other growing regions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* <span className="faq-tag">FAQ</span> */}

        <h2>
          Frequently Asked Questions
          <br />
          About Real Estate in Nepal
        </h2>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${
                openIndex === index ? "active" : ""
              }`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.q}</h3>
                <FaChevronDown className="icon" />
              </div>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}