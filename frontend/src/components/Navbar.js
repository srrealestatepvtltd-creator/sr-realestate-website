import React, { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <a href="/" className="logo-link">
        <div className="logo">
          <img src="./images/main-logo.jpg" alt="SR RealEstate Logo" />
        </div>
      </a>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </div>

      {/* MOBILE MENU */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* CLOSE BUTTON (X) */}
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          ✕
        </div>
        <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="/about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      <li><a href="/best-properties-in-nepal" onClick={() => setMenuOpen(false)}>Properties</a></li>
      <li> <a href="/best-landcalculator" onClick={() => setMenuOpen(false)}>Land Calculator</a> </li>
      </ul>

    
      <div className="book-btn">
        <a href="/request-quote">
        <button>Request a Quote</button>
        </a>
      </div>

    </nav>
  );
}