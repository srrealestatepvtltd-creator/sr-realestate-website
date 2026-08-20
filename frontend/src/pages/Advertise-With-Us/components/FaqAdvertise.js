import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../styles/FaqAdvertise.css";

export default function FaqAdvertise() {

  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "How can I advertise my property?",
      answer:
        "Simply complete the advertisement form with your property details. Our team will review your submission and contact you shortly.",
    },
    {
      question: "Is advertising my property free?",
      answer:
        "Basic property submission is free. Premium promotions and featured listings are available at affordable advertising packages.",
    },
    {
      question: "How long does it take for my property to be published?",
      answer:
        "Most properties are reviewed and published within 24 hours after verification.",
    },
    {
      question: "Can I advertise properties for rent and sale?",
      answer:
        "Yes. You can advertise properties for sale, rent, lease, commercial spaces, apartments, houses, land, and more.",
    },
    {
      question: "Will my property be promoted on social media?",
      answer:
        "Yes. Selected and premium listings are promoted across our Facebook, Instagram, and other marketing channels for greater visibility.",
    },
    {
      question: "How will I receive inquiries?",
      answer:
        "Interested buyers or tenants can contact you directly using the information you provide, or our team will forward verified leads to you.",
    },
    {
      question: "Can I update my property details later?",
      answer:
        "Absolutely. You can contact our team anytime to update your property's information, price, or images.",
    },
    {
      question: "Who should I contact for support?",
      answer:
        "Our SR Real Estate support team is always available to assist you with listings, promotions, and customer inquiries.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-advertise-section">

      <div className="faq-advertise-heading">

        <span className="faq-advertise-tag">
          Frequently Asked Questions
        </span>

        <h2>
          Have Questions?
        </h2>

        <p>
          Find answers to the most common questions about advertising
          your property with SR Real Estate.
        </p>

      </div>

      <div className="faq-advertise-container">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className={`faq-advertise-card ${
              active === index ? "active" : ""
            }`}
          >

            <button
              className="faq-advertise-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{faq.question}</span>

              {active === index ? (
                <FaMinus />
              ) : (
                <FaPlus />
              )}

            </button>

            <div
              className={`faq-advertise-answer ${
                active === index ? "show" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}