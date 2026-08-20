import React, { useEffect, useState } from "react";
import {
  FaBullhorn,
  FaUsers,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";

import API from "../../../../api/api";
import "../styles/AdvertiseStats.css";

export default function AdvertiseStats() {

  const [stats, setStats] = useState({
    totalRequests: 0,
    newRequests: 0,
    contactedRequests: 0,
    completedRequests: 0,
  });

  const [loading, setLoading] = useState(true);


  // =========================================
  // FETCH ADVERTISEMENT STATS
  // =========================================

  const fetchStats = async () => {

    try {

      setLoading(true);

      const { data } = await API.get(
        "/advertise/stats"
      );

      console.log(
        "Advertisement Stats:",
        data
      );

      if (data.success) {

        setStats({
          totalRequests:
            data.stats?.totalRequests || 0,

          newRequests:
            data.stats?.newRequests || 0,

          contactedRequests:
            data.stats?.contactedRequests || 0,

          completedRequests:
            data.stats?.completedRequests || 0,
        });

      }

    } catch (error) {

      console.error(
        "Failed to fetch advertisement stats:",
        error
      );

    } finally {

      setLoading(false);

    }

  };


  // =========================================
  // LOAD STATS
  // =========================================

  useEffect(() => {
    fetchStats();
  }, []);


  // =========================================
  // STATS DATA
  // =========================================

  const statsData = [
    {
      title: "Total Requests",
      value: stats.totalRequests,
      icon: <FaUsers />,
      className: "total",
    },

    {
      title: "New Requests",
      value: stats.newRequests,
      icon: <FaBullhorn />,
      className: "new",
    },

    {
      title: "Contacted",
      value: stats.contactedRequests,
      icon: <FaPhone />,
      className: "contacted",
    },

    {
      title: "Completed",
      value: stats.completedRequests,
      icon: <FaCheckCircle />,
      className: "completed",
    },
  ];


  return (

    <div className="advertise-admin-stats">

      {statsData.map((stat) => (

        <div
          className={`advertise-stat-card advertise-stat-${stat.className}`}
          key={stat.title}
        >

          <div className="advertise-stat-icon">

            {stat.icon}

          </div>


          <div className="advertise-stat-info">

            <h3>

              {loading
                ? "..."
                : stat.value}

            </h3>

            <span>
              {stat.title}
            </span>

          </div>

        </div>

      ))}

    </div>

  );
}