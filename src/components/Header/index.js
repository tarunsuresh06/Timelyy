import { Link, withRouter } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Cookies from "js-cookie";

import "./index.css";

const Header = (props) => {
  const onClickLogout = () => {
    const { history } = props;

    Cookies.remove("jwt_token");
    Cookies.remove("loginEmail");

    history.replace("/login");
  };

  const renderDesktopView = () => (
    <>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/attendance">
            Attendance
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/notes">
            Notes
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/time-table">
            Time Table
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/time-table">
            Calender
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/qrcode/scan">
            QR Code
          </Link>
        </li>
      </ul>

      <button className="logout-btn" type="button" onClick={onClickLogout}>
        Logout
      </button>
    </>
  );

  const renderMobileView = () => (
    <ul className="nav-icon-container">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <AiFillHome size={25} />
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/jobs">
          <BsFillBriefcaseFill size={25} />
        </Link>
      </li>
      <li className="nav-item">
        <button
          className="logout-btn-mobile"
          type="button"
          onClick={onClickLogout}
        >
          <FiLogOut size={25} color="#ffffff" />
        </button>
      </li>
    </ul>
  );

  return (
    <nav className="header-container">
      <Link className="nav-link" to="/">
        <img
          className="nav-logo"
          src="https://res.cloudinary.com/tommy06/image/upload/v1699024193/egm92wsvgmmsnygaiqce.png"
          alt="website logo"
        />
      </Link>
      {renderDesktopView()}
      {renderMobileView()}
    </nav>
  );
};

export default withRouter(Header);
