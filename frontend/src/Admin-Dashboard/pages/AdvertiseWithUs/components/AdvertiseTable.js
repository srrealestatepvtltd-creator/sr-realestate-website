import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaEye,
  FaTrash,
  FaTimes,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBullhorn,
} from "react-icons/fa";

import API from "../../../../api/api";
import "../styles/AdvertiseTable.css";

export default function AdvertiseTable() {

  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [selectedRequest, setSelectedRequest] =
    useState(null);


  // =========================================
  // FETCH ADVERTISEMENT REQUESTS
  // GET /api/advertise
  // =========================================

  const fetchRequests = async () => {

    try {

      setLoading(true);

      const { data } = await API.get(
        "/advertise"
      );

      console.log(
        "Advertisement Requests:",
        data
      );

      if (data.success) {

        setRequests(
          Array.isArray(data.requests)
            ? data.requests
            : []
        );

      } else {

        setRequests([]);

      }

    } catch (error) {

      console.error(
        "Failed to fetch advertisement requests:",
        error
      );

      setRequests([]);

    } finally {

      setLoading(false);

    }

  };


  // =========================================
  // LOAD REQUESTS
  // =========================================

  useEffect(() => {

    fetchRequests();

  }, []);


  // =========================================
  // UPDATE STATUS
  // PUT /api/advertise/:id
  // =========================================

  const handleStatusChange = async (
    id,
    newStatus
  ) => {

    try {

      const { data } = await API.put(
        `/advertise/${id}`,
        {
          status: newStatus,
        }
      );

      if (data.success) {

        setRequests((prev) =>
          prev.map((request) =>
            request._id === id
              ? {
                  ...request,
                  status: newStatus,
                }
              : request
          )
        );

      }

    } catch (error) {

      console.error(
        "Failed to update status:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to update status."
      );

    }

  };


  // =========================================
  // DELETE REQUEST
  // DELETE /api/advertise/:id
  // =========================================

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this advertisement request?"
    );

    if (!confirmDelete) return;


    try {

      const { data } = await API.delete(
        `/advertise/${id}`
      );

      if (data.success) {

        setRequests((prev) =>
          prev.filter(
            (request) =>
              request._id !== id
          )
        );

        if (
          selectedRequest?._id === id
        ) {
          setSelectedRequest(null);
        }

      }

    } catch (error) {

      console.error(
        "Failed to delete request:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to delete request."
      );

    }

  };


  // =========================================
  // SEARCH
  // =========================================

  const filteredRequests =
    requests.filter((request) => {

      const searchText =
        search.toLowerCase().trim();

      if (!searchText) return true;

      return (

        request.name
          ?.toLowerCase()
          .includes(searchText) ||

        request.phone
          ?.toLowerCase()
          .includes(searchText) ||

        request.email
          ?.toLowerCase()
          .includes(searchText) ||

        request.propertyType
          ?.toLowerCase()
          .includes(searchText) ||

        request.purpose
          ?.toLowerCase()
          .includes(searchText) ||

        request.address
          ?.toLowerCase()
          .includes(searchText) ||

        request.location
          ?.toLowerCase()
          .includes(searchText)

      );

    });


  // =========================================
  // DATE FORMAT
  // =========================================

  const formatDate = (date) => {

    if (!date) return "N/A";

    return new Date(date).toLocaleDateString(
      "en-NP",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );

  };


  return (

    <div className="advertise-admin-table-card">

      {/* TOOLBAR */}

      <div className="advertise-table-toolbar">

        <div className="advertise-table-title">

          <div>

            <h2>
              Advertisement Requests
            </h2>

            <p>
              Manage property advertising inquiries
            </p>

          </div>

          <span className="advertise-request-count">

            {filteredRequests.length}{" "}

            {filteredRequests.length === 1
              ? "Request"
              : "Requests"}

          </span>

        </div>


        <div className="advertise-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Search requests..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>


      {/* LOADING */}

      {loading && (

        <div className="advertise-table-message">

          Loading advertisement requests...

        </div>

      )}


      {/* EMPTY */}

      {!loading &&
        filteredRequests.length === 0 && (

          <div className="advertise-table-empty">

            <FaBullhorn />

            <h3>
              No Advertisement Requests
            </h3>

            <p>
              Advertisement requests will
              appear here.
            </p>

          </div>

        )}


      {/* TABLE */}

      {!loading &&
        filteredRequests.length > 0 && (

          <div className="advertise-table-wrapper">

            <table className="advertise-table">

              <thead>

                <tr>

                  <th>Name</th>

                  <th>Phone</th>

                  <th>Property Type</th>

                  <th>Purpose</th>

                  <th>Location</th>

                  <th>Date</th>

                  <th>Status</th>

                  <th>Actions</th>

                </tr>

              </thead>


              <tbody>

                {filteredRequests.map(
                  (request) => (

                    <tr
                      key={request._id}
                    >

                      <td>

                        <strong>
                          {request.fullName ||
                            "N/A"}
                        </strong>

                      </td>


                      <td>

                        <span className="advertise-phone">

                          <FaPhone />

                          {request.phone ||
                            "N/A"}

                        </span>

                      </td>


                      <td>

                        <span className="advertise-property-badge">

                          {request.propertyType ||
                            "N/A"}

                        </span>

                      </td>


                      <td>

                        {request.
listingType ||
                          "N/A"}

                      </td>


                      <td>

                        <span className="advertise-location">

                          <FaMapMarkerAlt />

                          {request.address ||
                            request.location ||
                            "N/A"}

                        </span>

                      </td>


                      <td>

                        <span className="advertise-date">

                          <FaCalendarAlt />

                          {formatDate(
                            request.createdAt
                          )}

                        </span>

                      </td>


                      <td>

                        <select
                          className={`advertise-status-select advertise-status-${(
                            request.status ||
                            "New"
                          ).toLowerCase()}`}
                          value={
                            request.status ||
                            "New"
                          }
                          onChange={(e) =>
                            handleStatusChange(
                              request._id,
                              e.target.value
                            )
                          }
                        >

                          <option value="New">
                            New
                          </option>

                          <option value="Contacted">
                            Contacted
                          </option>

                          <option value="Completed">
                            Completed
                          </option>

                          <option value="Rejected">
                            Rejected
                          </option>

                        </select>

                      </td>


                      <td>

                        <div className="advertise-table-actions">

                          <button
                            type="button"
                            className="advertise-view-btn"
                            title="View Request"
                            onClick={() =>
                              setSelectedRequest(
                                request
                              )
                            }
                          >

                            <FaEye />

                          </button>


                          <button
                            type="button"
                            className="advertise-delete-btn"
                            title="Delete Request"
                            onClick={() =>
                              handleDelete(
                                request._id
                              )
                            }
                          >

                            <FaTrash />

                          </button>

                        </div>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        )}


      {/* VIEW MODAL */}

      {selectedRequest && (

        <div
          className="advertise-request-modal-overlay"
          onClick={() =>
            setSelectedRequest(null)
          }
        >

          <div
            className="advertise-request-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="advertise-modal-header">

              <div>

                <span>
                  Advertisement Request
                </span>

                <h2>
                  {selectedRequest.name ||
                    "Request Details"}
                </h2>

              </div>


              <button
                type="button"
                className="advertise-modal-close"
                onClick={() =>
                  setSelectedRequest(null)
                }
              >

                <FaTimes />

              </button>

            </div>


            <div className="advertise-modal-body">

              <p>
                <strong>
                  Phone:
                </strong>{" "}
                {selectedRequest.phone ||
                  "N/A"}
              </p>

              <p>
                <strong>
                  Email:
                </strong>{" "}
                {selectedRequest.email ||
                  "N/A"}
              </p>

              <p>
                <strong>
                  Property Type:
                </strong>{" "}
                {selectedRequest.propertyType ||
                  "N/A"}
              </p>

              <p>
                <strong>
                  Purpose:
                </strong>{" "}
                {selectedRequest.purpose ||
                  "N/A"}
              </p>

              <p>
                <strong>
                  Location:
                </strong>{" "}
                {selectedRequest.address ||
                  selectedRequest.location ||
                  "N/A"}
              </p>

              <p>
                <strong>
                  Submitted:
                </strong>{" "}
                {formatDate(
                  selectedRequest.createdAt
                )}
              </p>

              {selectedRequest.message && (

                <div className="advertise-detail-message">

                  <strong>
                    Message
                  </strong>

                  <p>
                    {selectedRequest.message}
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      )}

    </div>

  );

}