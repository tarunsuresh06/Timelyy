import "./index.css";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../Header";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";

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
    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const jwtToken = Cookies.get("jwt_token");

    const url = `${process.env.REACT_APP_URL}profile/student`;

    const options = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      const userData = data.studentData;
      this.setState({
        userDetails: userData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  render() {
    const { userDetails, apiStatus } = this.state;

    const showLoader = apiStatus === apiStatusConstants.inProgress;

    const renderProfileView = () => {
      return (
        <div className="profile-container">
          <span>Student Name : {userDetails.student_name}</span>
          <span>Roll No : {userDetails.roll_number}</span>
          <span>Department : {userDetails.department}</span>
        </div>
      );
    };

    const renderLoaderView = () => {
      return (
        <div className="loader-container">
          <ThreeDots height="80" width="80" radius="9" color="#fff" />
        </div>
      );
    };

    if (localStorage.getItem("user_type") === "staff") {
      return <Redirect to="/staff" />;
    }

    return (
      <>
        <Header />
        <div className="attendance-bg-container">
          {showLoader ? renderLoaderView() : renderProfileView()}
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
