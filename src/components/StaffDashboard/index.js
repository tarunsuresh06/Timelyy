import { Component } from "react";
import "./index.css";

import Header from "../Header";
import { Link } from "react-router-dom";
import { BsQrCode } from "react-icons/bs";

import { Redirect } from "react-router-dom";

class StaffDashboard extends Component {
  render() {
    if (localStorage.getItem("user_type") === "student") {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Header />
        <div className="staff-dashboard-container">
          <Link to="/generate-qr-code" className="generate-qr-btn">
            <BsQrCode size={20} /> <span className="qr-text">Generate QR</span>
          </Link>
        </div>
      </>
    );
  }
}

export default StaffDashboard;
