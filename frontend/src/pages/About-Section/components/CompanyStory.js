import React from "react";
import "../styles/CompanyStory.css";

export default function CompanyStory() {
  return (
    <section className="company-story">
      <div className="story-container">

        {/* TEXT SIDE */}
        <div className="story-content">
          <span className="story-tag">OUR STORY</span>

          <h2>
            Building Trust Through{" "}
            <span>Real Estate Excellence</span>
          </h2>

          <p>
            SR Real Estate was founded with a simple vision: to make
            property buying, selling, and investing easier, safer,
            and more transparent throughout Nepal.
          </p>

          <p>
            We connect clients with verified properties while providing
            professional guidance throughout the entire real estate journey.
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            alt="SR Real Estate"
          />
        </div>

      </div>
    </section>
  );
}