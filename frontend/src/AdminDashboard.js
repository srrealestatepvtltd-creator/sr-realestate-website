import React from "react";
import {
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  FaChartPie,
  FaPlusSquare,
  FaUsers,
  FaSignOutAlt,
  FaBuilding,
} from "react-icons/fa";

import Overview from "./Admin-Dashboard/pages/components/Overview";
import AddProperty from "./Admin-Dashboard/pages/components/PropertySection";
import Leads from "./Admin-Dashboard/pages/components/Leads";
import ViewProperty from "./Admin-Dashboard/pages/components/ViewProperty";
import AdvertiseWithUs from "./Admin-Dashboard/pages/components/AdvertiseWithUs";
import "./styles/AdminDashboard.css";

export default function AdminDashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
    navigate("/login-admin-dashboard");
  };

  return (

    <div className="admin-wrapper">

      {/* Sidebar */}

      <aside className="admin-sidebar">

        <div className="admin-logo">

          <div className="logo-circle">
            <img className="logo-img" src="/images/Main-logo.jpg" alt="Logo" />
          </div>

          <h2>SR Real Estate</h2>

          <span>Admin Dashboard</span>

        </div>

        <nav className="admin-menu">

  <NavLink
    to="/admin"
    end
    className={({ isActive }) =>
      isActive ? "admin-link active" : "admin-link"
    }
  >
    <FaChartPie />
    <span>Overview</span>
  </NavLink>
 <NavLink
    to="/admin/leads"
    className={({ isActive }) =>
      isActive ? "admin-link active" : "admin-link"
    }
  >
    <FaUsers />
    <span>Manage Leads</span>
  </NavLink>
  <NavLink
    to="/admin/viewproperty"
    className={({ isActive }) =>
      isActive ? "admin-link active" : "admin-link"
    }
  >
    <FaBuilding />
    <span>View Property</span>
  </NavLink>
  <NavLink
    to="/admin/addproperty"
    className={({ isActive }) =>
      isActive ? "admin-link active" : "admin-link"
    }
  >
    <FaPlusSquare />
    <span>Add Property</span>
  </NavLink>
 <NavLink
    to="/admin/advertisewithus"
    className={({ isActive }) =>
      isActive ? "admin-link active" : "admin-link"
    }
  >
    <FaChartPie />
    <span>Advertise With Us</span>
  </NavLink>

  <button
    className="logout-btn"
    onClick={handleLogout}
  >
    <FaSignOutAlt />
    <span>Logout</span>
  </button>

</nav>

      

      </aside>

      {/* Content */}

      <main className="admin-content">

        <Routes>

          <Route
            path="/"
            element={<Overview />}
          />

          <Route
            path="/addproperty"
            element={<AddProperty />}
          />

          <Route
            path="/leads"
            element={<Leads />}
          />
          <Route 
          path="/viewproperty"
          element={<ViewProperty />}
          />
<Route
            path="/advertisewithus"
            element={<AdvertiseWithUs />}
          />
        </Routes>

      </main>

    </div>

  );
}