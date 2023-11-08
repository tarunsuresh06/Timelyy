import "./index.css";
import { Component } from "react";
import Header from "../Header";
import Cookies from "js-cookie";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class Attendance extends Component {
  state = { userDetails: {}, apiStatus: apiStatusConstants.initial };

  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    const userEmail = Cookies.get("loginEmail");

    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const url = `http://localhost:3000/profile/${userEmail}`;

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const userData = data.user;
    this.setState({ userDetails: userData });
  };

  render() {
    const { userDetails } = this.state;
    console.log(userDetails);

    return (
      <>
        <Header />
        <div className="attendance-bg-container">
          <div className="profile-container">
            <span>Student Name : {userDetails.NAME}</span>
            <span>Roll No : {userDetails.ROLL_NO}</span>
            <span>Department & Year : {userDetails.DEPARTMENT}</span>
            <span>
              From {userDetails.FROM_DATE} to {userDetails.TO_DATE}
            </span>
          </div>

          <table className="attendance-table">
            <thead>
              <tr>
                <th>Subject Name</th>
                <th>Subject Code</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI in robotics</td>
                <td>RO19701</td>
                <td>75%</td>
              </tr>
              <tr>
                <td>Computer Integrated Manufacturing</td>
                <td>RO19702</td>
                <td>93%</td>
              </tr>
              <tr>
                <td>Material Handling System</td>
                <td>RO19703</td>
                <td>97%</td>
              </tr>
              <tr>
                <td>Fundamentals of Management for Engineering</td>
                <td>GE19304</td>
                <td>88%</td>
              </tr>
              <tr>
                <td>Internet of things Mechatronics</td>
                <td>MT19P72</td>
                <td>95%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Attendance;
