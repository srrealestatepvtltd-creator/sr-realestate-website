import React, { useEffect, useState } from "react";

import {
  FaHome,
  FaUsers,
  FaHandshake,
  FaMoneyBillWave,
  FaUserTie,
  FaCalendarCheck,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

import API from "../../../../api/api";

import "../styles/StatsCards.css";

export default function StatsCards() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const { data } = await API.get("/dashboard/stats");

      if (data.success) {
        setStats(data.stats);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="sr-statcards-section">
        <div className="loading-state">
          Loading Dashboard...
        </div>
      </section>
    );
  }

  if (!stats) {
    return (
      <section className="sr-statcards-section">
        No dashboard data found.
      </section>
    );
  }

  const cards = [
    {
      title: "Total Properties",
      value: stats.properties.total,
      subtitle: `${stats.properties.available} Available`,
      extra: `${stats.properties.sold} Sold`,
      color: "#2563eb",
      icon: <FaHome />,
      trend:
        stats.properties.available > 0 ? "up" : "down",
    },

    {
      title: "Active Leads",
      value: stats.leads.total,
      subtitle: `${stats.leads.new} New`,
      extra: `${stats.leads.qualified} Qualified`,
      color: "#10b981",
      icon: <FaUsers />,
      trend:
        stats.leads.new > 0 ? "up" : "down",
    },

    {
      title: "Closed Deals",
      value: stats.leads.closed,
      subtitle: `${stats.leads.siteVisit} Site Visits`,
      extra: "Completed Sales",
      color: "#f59e0b",
      icon: <FaHandshake />,
      trend:
        stats.leads.closed > 0 ? "up" : "down",
    },

    {
      title: "Revenue",

      value:
        "Rs. " +
        Number(
          stats.revenue.month
        ).toLocaleString(),

      subtitle: "Property Sales",

      extra: "Current Revenue",

      color: "#8b5cf6",

      icon: <FaMoneyBillWave />,

      trend:
        stats.revenue.month > 0
          ? "up"
          : "down",
    },

    {
      title: "Agents",

      value: stats.agents.total,

      subtitle: "Registered Agents",

      extra: "Working Team",

      color: "#06b6d4",

      icon: <FaUserTie />,

      trend:
        stats.agents.total > 0
          ? "up"
          : "down",
    },

    {
      title: "Appointments",

      value: stats.appointments.total,

      subtitle: "Scheduled",

      extra: "Follow Ups",

      color: "#ef4444",

      icon: <FaCalendarCheck />,

      trend:
        stats.appointments.total > 0
          ? "up"
          : "down",
    },
  ];

  return (
    <section className="sr-statcards-section">

      <div className="sr-statcards-header">

        <h2>Business Overview</h2>

        <p>
          Monitor property listings,
          customer inquiries,
          appointments and revenue
          in real-time.
        </p>

      </div>

      <div className="sr-statcards-grid">

        {cards.map((item, index) => (

          <div
            key={index}
            className="sr-stat-card"
          >

            <div className="sr-stat-top">

              <div
                className="sr-stat-icon"
                style={{
                  background: item.color,
                }}
              >
                {item.icon}
              </div>

              <div
                className={
                  item.trend === "up"
                    ? "trend-up"
                    : "trend-down"
                }
              >
                {item.trend === "up" ? (
                  <FaArrowUp />
                ) : (
                  <FaArrowDown />
                )}
              </div>

            </div>

            <h3>{item.value}</h3>

            <h4>{item.title}</h4>

            <p>{item.subtitle}</p>

            <small>{item.extra}</small>

            <div className="sr-progress-line">

              <span
                style={{
                  background: item.color,
                }}
              ></span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}