import { Component } from "react";
import "./index.css";

import Header from "../Header";
import { Link } from "react-router-dom";
import { BsQrCode } from "react-icons/bs";

class StaffDashboard extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="staff-dashboard-container">
          <Link to="/generate-qrcode" className="generate-qr-btn">
            <BsQrCode size={20} /> <span className="qr-text">Generate QR</span>
          </Link>
        </div>
      </>
    );
  }
}

export default StaffDashboard;
