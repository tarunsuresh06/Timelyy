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
  state = {
    userDetails: {},
    attendanceList: [],
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.getUserData();
    this.getAttendanceData();
  }

  getAttendanceData = async () => {
    const jwtToken = Cookies.get("jwt_token");

    const url = `${process.env.REACT_APP_URL}attendance`;

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
      const attendanceList = data.attendanceData;
      this.setState({
        attendanceList: attendanceList,
      });
    }
  };

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
    const { userDetails, attendanceList, apiStatus } = this.state;

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
              {attendanceList.map((subject) => {
                var percentage;
                if (subject.student_hours === 0) {
                  percentage = 0;
                } else {
                  percentage = Math.round(
                    (subject.student_hours / subject.staff_hours) * 100
                  );
                }

                return (
                  <tr key={subject.subject_id}>
                    <td>{subject.subject_name}</td>
                    <td>{subject.subject_code}</td>
                    <td>{percentage}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Attendance;
