import React, { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaMoneyBillWave,
} from "react-icons/fa6";

import API from "../../../../api/api";

import "../styles/RevenueChart.css";

export default function RevenueChart() {
  const [loading, setLoading] = useState(true);

  const [chartData, setChartData] = useState([]);

  const [summary, setSummary] = useState({
    totalRevenue: 0,
    growth: 0,
    highestMonth: "-",
    averageMonthly: 0,
  });

  useEffect(() => {
    fetchRevenueChart();
  }, []);

  const fetchRevenueChart = async () => {
    try {
      const { data } = await API.get(
        "/dashboard/revenue-chart"
      );

      if (data.success) {
        setChartData(data.chart);
        setSummary(data.summary);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="sr-chart-section">
        Loading Revenue Analytics...
      </section>
    );
  }

  return (
    <section className="sr-chart-section">

      <div className="sr-chart-header">

        <div>

          <span className="sr-chart-tag">
            Revenue Analytics
          </span>

          <h2>Monthly Revenue Growth</h2>

          <p>
            Monitor monthly revenue generated
            from sold properties.
          </p>

        </div>

        <div className="sr-chart-income">

          <div className="income-icon">
            <FaMoneyBillWave />
          </div>

          <div>

            <h3>
              Rs.
              {" "}
              {Number(
                summary.totalRevenue
              ).toLocaleString()}
            </h3>

            <span
              className={
                summary.growth >= 0
                  ? "growth-up"
                  : "growth-down"
              }
            >

              {summary.growth >= 0 ? (
                <FaArrowTrendUp />
              ) : (
                <FaArrowTrendDown />
              )}

              {summary.growth}%

            </span>

          </div>

        </div>

      </div>

      <div className="sr-chart-wrapper">

        <ResponsiveContainer
          width="100%"
          height={380}
        >

          <AreaChart data={chartData}>

            <defs>

              <linearGradient
                id="colorRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip
              formatter={(value) => [
                `Rs. ${Number(value).toLocaleString()}`,
                "Revenue",
              ]}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={4}
              fill="url(#colorRevenue)"
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#2563eb",
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      <div className="sr-chart-footer">

        <div>

          <h4>Highest Month</h4>

          <span>
            {summary.highestMonth}
          </span>

        </div>

        <div>

          <h4>Average Monthly</h4>

          <span>
            Rs.
            {" "}
            {Number(
              summary.averageRevenue
            ).toLocaleString()}
          </span>

        </div>

        <div>

          <h4>Annual Growth</h4>

          <span>
            {summary.growth}%
          </span>

        </div>

      </div>

    </section>
  );
}