import React from "react";
import "../styles/Footer.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="ft-wrapper">

      <div className="ft-container">

        {/* Section 1 */}
        <div className="ft-box">
          <h3>About Us</h3>

          <a href="https://www.google.com/maps/place/SR+GROUP+Office/@27.5183122,83.4530363,2556m/data=!3m1!1e3!4m15!1m8!3m7!1s0x39968ff0deea2441:0x9e15e978e5e7d1ff!2sBhairahawa+Road!3b1!8m2!3d27.5778728!4d83.4084249!16s%2Fg%2F1thqf4z7!3m5!1s0x39969a46030a786b:0xe72427344b3dc498!8m2!3d27.5183954!4d83.4534469!16s%2Fg%2F11g6tz8zxf!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
            <p><FaMapMarkerAlt /> SR Real Estate <br />
            Bhairahawa, Rupandehi, Nepal</p>
          </a>

          <a href="tel:+9779857022211">
            <p><FaPhoneAlt /> +977-9857022211</p>
          </a>

          <a href="mailto:info@srgroupnepal.com">
            <p><FaEnvelope /> info@srgroupnepal.com</p>
          </a>

        

          <div className="ft-social">
            <a href="https://www.facebook.com/www.srrealestate.com.np" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/www.srrealestate.com.np" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.tiktok.com/@srrealestatepvtltd" target="_blank" rel="noreferrer">
              <SiTiktok />
            </a>
          </div>
        </div>

        {/* Section 2 */}
        <div className="ft-box">
          <h3>Properties</h3>

          <ul>
            <li><a href="/house">🏷 House</a></li>
            <li><a href="/apartment">🏷 Apartment</a></li>
            <li><a href="/land">🏷 Land</a></li>
            <li><a href="/commercial">🏷 Commercial</a></li>
           
          </ul>
        </div>

        {/* Section 3 */}
        <div className="ft-box">
          <h3>Information</h3>

          <ul>
           <li><a href="/about">About Us</a></li>
            <li><a href="/advertise-with-us">Advertise With Us</a></li>
            
          </ul>
        </div>

        {/* Section 4 */}
        <div className="ft-box">
          <h3>Resources</h3>

          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faqs">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

      </div>

      <div className="ft-bottom">
        © 2026 SR Real Estate. All Rights Reserved.
      </div>

    </footer>
  );
}