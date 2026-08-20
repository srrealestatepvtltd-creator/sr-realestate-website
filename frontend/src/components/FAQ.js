import React, { useState } from "react";
import { faqData } from "./faqData";
import { FaChevronDown } from "react-icons/fa";
import "../styles/FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const leftFAQ = faqData.slice(0, 4);
  const rightFAQ = faqData.slice(4);

  const renderFAQ = (items, offset = 0) =>
    items.map((item, index) => {
      const realIndex = index + offset;

      return (
        <div
          key={realIndex}
          className={`faq-item ${activeIndex === realIndex ? "active" : ""}`}
          onClick={() => toggleFAQ(realIndex)}
        >
          <div className="faq-question">
            <h4>{item.question}</h4>
            <FaChevronDown
              className={`icon ${
                activeIndex === realIndex ? "rotate" : ""
              }`}
            />
          </div>

          <div
            className={`faq-answer ${
              activeIndex === realIndex ? "show" : ""
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      );
    });

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* TITLE */}
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common questions about buying, selling,
            and renting properties in Nepal.
          </p>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="faq-grid">
          <div className="faq-column">
            {renderFAQ(leftFAQ, 0)}
          </div>

          <div className="faq-column">
            {renderFAQ(rightFAQ, 4)}
          </div>
        </div>

      </div>
    </section>
  );
}