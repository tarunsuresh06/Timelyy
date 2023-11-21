import "./index.css";
import { Component } from "react";
import Header from "../Header";
import RoboticsandAutomation from "../../img/RoboticsandAutomation.png";

class TimeTable extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="time-table-bg-container">
          <img
            className="time-table-image"
            src={RoboticsandAutomation}
            alt="Time Table"
          />
        </div>
      </>
    );
  }
}

export default TimeTable;
