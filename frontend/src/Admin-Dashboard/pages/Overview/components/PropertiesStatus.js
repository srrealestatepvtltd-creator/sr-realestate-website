import React, { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  FaHome,
  FaCheckCircle,
  FaClock,
  FaLock,
} from "react-icons/fa";

import API from "../../../../api/api";

import "../styles/PropertiesStatus.css";

export default function PropertyStatus() {
  const [loading, setLoading] = useState(true);

  const [propertyData, setPropertyData] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    try {
      const { data } = await API.get(
        "/dashboard/property-status"
      );

      if (data.success) {
        setTotal(data.status.total);

        setPropertyData([
          {
            name: "Available",
            value: data.status.available,
            color: "#2563eb",
            icon: <FaHome />,
          },
          {
            name: "Sold",
            value: data.status.sold,
            color: "#10b981",
            icon: <FaCheckCircle />,
          },
          {
            name: "Reserved",
            value: data.status.reserved,
            color: "#f59e0b",
            icon: <FaClock />,
          },
          {
            name: "Pending",
            value: data.status.pending,
            color: "#ef4444",
            icon: <FaLock />,
          },
        ]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="property-status-section">
        <h3>Loading Property Status...</h3>
      </section>
    );
  }

  return (
    <section className="property-status-section">
      <div className="status-header">
        <div>
          <span className="status-tag">
            Property Insights
          </span>

          <h2>Property Status Overview</h2>

          <p>
            View the current distribution of all
            properties within the SR Real Estate
            portfolio.
          </p>
        </div>

        <div className="status-total">
          <h3>{total}</h3>

          <span>Total Properties</span>
        </div>
      </div>

      <div className="status-body">

        <div className="status-chart">
          <ResponsiveContainer
            width="100%"
            height={320}
          >
            <PieChart>
              <Pie
                data={propertyData}
                dataKey="value"
                innerRadius={75}
                outerRadius={110}
                paddingAngle={5}
              >
                {propertyData.map((item, index) => (
                  <Cell
                    key={index}
                    fill={item.color}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="status-list">
          {propertyData.map((item, index) => (
            <div
              className="status-card"
              key={index}
            >
              <div
                className="status-icon"
                style={{
                  background: item.color,
                }}
              >
                {item.icon}
              </div>

              <div className="status-info">
                <h4>{item.name}</h4>

                <p>{item.value} Properties</p>
              </div>

              <div
                className="status-dot"
                style={{
                  background: item.color,
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}