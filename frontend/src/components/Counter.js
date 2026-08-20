import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaHome,
  FaUsers,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import "../styles/Counter.css";

export default function Counter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="counter-section" ref={ref}>
      <div className="counter-container">

        {/* CARD 1 */}
        <div className="stat-card">
          <FaHome className="icon-count" />
          <h3>
            {inView && <CountUp end={500} duration={3} />}+
          </h3>
          <p>Properties</p>
        </div>

        {/* CARD 2 */}
        <div className="stat-card">
          <FaUsers className="icon-count" />
          <h3>
            {inView && <CountUp end={300} duration={3} />}+
          </h3>
          <p>Happy Clients</p>
        </div>

        {/* CARD 3 */}
        <div className="stat-card">
          <FaMapMarkerAlt className="icon-count" />
          <h3>
            {inView && <CountUp end={50} duration={3} />}+
          </h3>
          <p>Locations</p>
        </div>

        {/* CARD 4 */}
        <div className="stat-card">
          <FaBuilding className="icon-count" />
          <h3>
            {inView && <CountUp end={120} duration={3} />}+
          </h3>
          <p>Projects</p>
        </div>

      </div>
    </section>
  );
}