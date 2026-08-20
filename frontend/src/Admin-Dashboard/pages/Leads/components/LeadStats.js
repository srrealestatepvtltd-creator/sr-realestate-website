import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaUserPlus,
  FaHandshake,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaArrowTrendUp,
  FaArrowTrendDown,
} from "react-icons/fa6";

import API from "../../../../api/api";
import "../styles/LeadStats.css";

export default function LeadStats() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    qualifiedLeads: 0,
    siteVisits: 0,
    closedDeals: 0,
    conversionRate: 0,
    pendingLeads: 0,
    todayLeads: 0,
    thisWeekLeads: 0,
    thisMonthLeads: 0,
  });

  useEffect(() => {
    fetchLeadStats();
  }, []);

  const fetchLeadStats = async () => {
    try {
      const { data } = await API.get("/leads/stats");

      if (data.success) {
        setStats(data.stats);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Total Leads",
      value: stats.totalLeads,
      growth: stats.thisMonthLeads,
      label: "This Month",
      icon: <FaUsers />,
      color: "#2563EB",
    },
    {
      title: "New Leads",
      value: stats.newLeads,
      growth: stats.todayLeads,
      label: "Today",
      icon: <FaUserPlus />,
      color: "#10B981",
    },
    {
      title: "Qualified",
      value: stats.qualifiedLeads,
      growth: stats.pendingLeads,
      label: "Pending",
      icon: <FaHandshake />,
      color: "#F59E0B",
    },
    // {
    //   title: "Site Visits",
    //   value: stats.siteVisits,
    //   growth: stats.thisWeekLeads,
    //   label: "This Week",
    //   icon: <FaCalendarCheck />,
    //   color: "#8B5CF6",
    // },
    {
      title: "Closed Deals",
      value: stats.closedDeals,
      growth: stats.conversionRate,
      label: "Conversion",
      icon: <FaMoneyBillWave />,
      color: "#EF4444",
      percentage: true,
    },
  ];

  const renderGrowth = (card) => {
    const value = Number(card.growth);

    if (value > 0) {
      return (
        <div className="lead-growth positive">
          <FaArrowTrendUp />
          <span>
            {value}
            {card.percentage ? "%" : ""} {card.label}
          </span>
        </div>
      );
    }

    if (value < 0) {
      return (
        <div className="lead-growth negative">
          <FaArrowTrendDown />
          <span>
            {Math.abs(value)}
            {card.percentage ? "%" : ""} {card.label}
          </span>
        </div>
      );
    }

    return (
      <div className="lead-growth neutral">
        <span>
          0
          {card.percentage ? "%" : ""} {card.label}
        </span>
      </div>
    );
  };

  if (loading) {
    return (
      <section className="lead-stats-section">
        <div className="loading-state">
          Loading Statistics...
        </div>
      </section>
    );
  }

  return (
    <section className="lead-stats-section">

      <div className="lead-stats-header">

        <div>

          <span className="stats-tag">
            Performance Overview
          </span>

          <h2>Lead Performance Statistics</h2>

          <p>
            Monitor your sales pipeline,
            qualified leads, property visits,
            and successful conversions.
          </p>

        </div>

      </div>

      <div className="lead-stats-grid">

        {cards.map((card, index) => (

          <div
            className="lead-stat-card"
            key={index}
          >

            <div
              className="lead-stat-icon"
              style={{
                background: card.color,
              }}
            >
              {card.icon}
            </div>

            <div className="lead-stat-content">

              <h3>{card.value}</h3>

              <p>{card.title}</p>

            </div>

            {renderGrowth(card)}

          </div>

        ))}

      </div>

    </section>
  );
}