import "./index.css";
import { Link } from "react-router-dom";

import { BsCardChecklist, BsFillCalendarCheckFill } from "react-icons/bs";
import { BiRightArrowAlt, BiTimeFive, BiNotepad } from "react-icons/bi";

import Header from "../Header";

const Home = (props) => {
  return (
    <>
      <Header />
      <div className="home-bg-container">
        <div className="home-list-group">
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

          <Link to="/attendance" className="home-list-item">
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

          <Link to="/attend" className="home-list-item">
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

          <Link to="/attend" className="home-list-item">
            <div>
              <BsFillCalendarCheckFill
                className="home-icon"
                size={20}
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
