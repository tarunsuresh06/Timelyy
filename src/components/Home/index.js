import "./index.css";
import { Link } from "react-router-dom";
import {
  BsQrCode,
  BsCardChecklist,
  BsFillCalendarCheckFill,
} from "react-icons/bs";
import { BiRightArrowAlt, BiTimeFive, BiNotepad } from "react-icons/bi";

import Header from "../Header";

const Home = () => {
  const renderStaffListItem = () => {
    return (
      <Link to="/generate-qr-code" className="home-list-item">
        <div>
          <BsQrCode className="home-icon" size={15} style={{ color: "fff" }} />
          <span className="home-list-text">Generate QR</span>
        </div>

        <BiRightArrowAlt
          className="home-icon"
          size={20}
          style={{ color: "fff" }}
        />
      </Link>
    );
  };

  const renderStudentListItem = () => {
    return (
      <Link to="/attendance" className="home-list-item">
        <div>
          <BsCardChecklist
            className="home-icon"
            size={20}
            style={{ color: "fff" }}
          />
          <span className="home-list-text">Attendance Tracker</span>
        </div>

        <BiRightArrowAlt
          className="home-icon"
          size={20}
          style={{ color: "fff" }}
        />
      </Link>
    );
  };

  const showStaffOption = localStorage.getItem("user_type") === "staff";
  const showStudentOption = localStorage.getItem("user_type") === "student";

  return (
    <>
      <Header />
      <div className="home-bg-container">
        <div className="home-list-group">
          {showStaffOption && renderStaffListItem()}
          {showStudentOption && renderStudentListItem()}

          <Link to="/notes" className="home-list-item">
            <div>
              <BiNotepad
                className="home-icon"
                size={20}
                style={{ color: "fff" }}
              />
              <span className="home-list-text">Notes and PDF</span>
            </div>
            <BiRightArrowAlt
              className="home-icon"
              size={20}
              style={{ color: "fff" }}
            />
          </Link>

          <Link to="/time-table" className="home-list-item">
            <div>
              <BiTimeFive
                className="home-icon"
                size={20}
                style={{ color: "fff" }}
              />
              <span className="home-list-text">Time Table</span>
            </div>
            <BiRightArrowAlt
              className="home-icon"
              size={20}
              style={{ color: "fff" }}
            />
          </Link>

          <Link to="/calender" className="home-list-item">
            <div>
              <BsFillCalendarCheckFill
                className="home-icon"
                size={15}
                style={{ color: "fff" }}
              />
              <span className="home-list-text">Calender</span>
            </div>
            <BiRightArrowAlt
              className="home-icon"
              size={20}
              style={{ color: "fff" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
