import React, { useEffect, useState } from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaPhoneAlt,
  FaWhatsapp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import API from "../../../../api/api";
import "../styles/LeadTable.css";

export default function LeadTable() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);

  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetchLeads();
  }, [page, rows]);

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/leads", {
        params: {
          page,
          limit: rows,
        },
      });

      if (data.success) {
        setLeads(data.data);
        setTotal(data.total);
        setPages(data.pages);
      }
    } catch (err) {
      console.error(err);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  const statusClass = (status) => {
    switch (status) {
      case "New":
        return "lead-status new";

      case "Qualified":
        return "lead-status qualified";

      case "Site Visit":
        return "lead-status visit";

      case "Negotiation":
        return "lead-status negotiation";

      case "Closed":
        return "lead-status closed";

      default:
        return "lead-status";
    }
  };

  if (loading) {
    return (
      <section className="lead-table-section">
        <div className="loading-state">
          Loading Leads...
        </div>
      </section>
    );
  }

  return (
    <section className="lead-table-section">

      <div className="lead-table-header">

        <h2>Recent Property Leads</h2>

        <p>
          View and manage customer inquiries and follow-up schedules.
        </p>

      </div>

      <div className="lead-table-wrapper">

        <table>

          <thead>

            <tr>
              <th>Client</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Property</th>
              <th>Budget</th>
              <th>Message</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {leads.length === 0 ? (

              <tr>
                <td
                  colSpan="8"
                  className="empty"
                >
                  No Leads Found
                </td>
              </tr>

            ) : (

              leads.map((lead) => (

                <tr key={lead._id}>

                  <td>

                    <div className="client-info">

                      <div className="client-avatar">
                        {lead.fullName?.charAt(0).toUpperCase()}
                      </div>

                      <div>

                        <h4>{lead.fullName}</h4>

                        <span>Interested Buyer</span>

                      </div>

                    </div>

                  </td>

                  <td>{lead.phoneNumber}</td>

                  <td>{lead.email || "-"}</td>

                  <td>{lead.propertyType}</td>

                  <td>
                    Rs.{" "}
                    {Number(
                      lead.budget || 0
                    ).toLocaleString()}
                  </td>

                  <td>
                    {lead.message?.length > 40
                      ? lead.message.substring(
                          0,
                          40
                        ) + "..."
                      : lead.message}
                  </td>

                  <td>

                    <span
                      className={statusClass(
                        lead.status
                      )}
                    >
                      {lead.status}
                    </span>

                  </td>

                  <td>

                    <div className="lead-actions">

                      <button className="view">
                        <FaEye />
                      </button>

                      <button className="edit">
                        <FaEdit />
                      </button>

                      <button
                        className="call"
                        onClick={() =>
                          window.open(
                            `tel:${lead.phoneNumber}`
                          )
                        }
                      >
                        <FaPhoneAlt />
                      </button>

                      <button
                        className="whatsapp"
                        onClick={() =>
                          window.open(
                            `https://wa.me/${lead.phoneNumber}`
                          )
                        }
                      >
                        <FaWhatsapp />
                      </button>

                      <button className="delete">
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* Pagination */}

      <div className="lead-pagination">

        <div className="pagination-info">

          Showing

          <strong>
            {" "}
            {(page - 1) * rows + 1}
          </strong>

          -

          <strong>
            {" "}
            {Math.min(page * rows, total)}
          </strong>

          of

          <strong> {total}</strong>

          Leads

        </div>

        <div className="pagination-pages">

          <button
            className="page-btn"
            disabled={page === 1}
            onClick={() =>
              setPage(page - 1)
            }
          >
            <FaChevronLeft />
          </button>

          {Array.from(
            { length: pages },
            (_, i) => (
              <button
                key={i}
                className={
                  page === i + 1
                    ? "page-btn active"
                    : "page-btn"
                }
                onClick={() =>
                  setPage(i + 1)
                }
              >
                {i + 1}
              </button>
            )
          )}

          <button
            className="page-btn"
            disabled={page === pages}
            onClick={() =>
              setPage(page + 1)
            }
          >
            <FaChevronRight />
          </button>

        </div>

        <div className="pagination-limit">

          <label>Rows</label>

          <select
            value={rows}
            onChange={(e) => {
              setRows(
                Number(e.target.value)
              );
              setPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>

        </div>

      </div>

    </section>
  );
}