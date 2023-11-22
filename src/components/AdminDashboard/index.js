import { Component } from "react";
import "./index.css";

import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { MdAdminPanelSettings } from "react-icons/md";

import { Redirect } from "react-router-dom";

class AdminDashboard extends Component {
  onClickLogout = () => {
    Cookies.remove("jwt_token");
    localStorage.removeItem("user_type");
    localStorage.removeItem("is_admin");
  };

  render() {
    if (!localStorage.getItem("user_type") === "admin") {
      return <Redirect to="/" />;
    }
    return (
      <div className="staff-dashboard-container">
        <Link to="/register" className="generate-qr-btn">
          <MdAdminPanelSettings size={20} />
          <span className="qr-text">Register</span>
        </Link>
        <Link
          to="/login"
          onClick={this.onClickLogout}
          className="generate-qr-btn"
        >
          <MdAdminPanelSettings size={20} />
          <span className="qr-text">Logout</span>
        </Link>
      </div>
    );
  }
}

export default AdminDashboard;
