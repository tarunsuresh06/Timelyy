import Cookies from "js-cookie";
import "./index.css";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import QRCode from "react-qr-code";

const departmentList = [
  {
    label: "Mechanical Engineering",
    departmentId: "Mechanical",
  },
  {
    label: "Automobile Engineering",
    departmentId: "Automobile",
  },
  {
    label: "Civil Engineering",
    departmentId: "Civil",
  },
  {
    label: "Computer Science and Engineering",
    departmentId: "Computer Science",
  },
  {
    label: "Electrical Engineering",
    departmentId: "Electrical",
  },
  {
    label: "Information Technology",
    departmentId: "Information Technology",
  },
  {
    label: "Electronics and Communication Engineering",
    departmentId: "Electronics and Communication",
  },
  {
    label: "Robotics and Automation Engineering",
    departmentId: "Robotics and Automation",
  },
];

const semesterList = [
  {
    label: "Semester 1",
    semesterId: 1,
  },
  {
    label: "Semester 2",
    semesterId: 2,
  },
  {
    label: "Semester 3",
    semesterId: 3,
  },
  {
    label: "Semester 4",
    semesterId: 4,
  },
  {
    label: "Semester 5",
    semesterId: 5,
  },
  {
    label: "Semester 6",
    semesterId: 6,
  },
  {
    label: "Semester 7",
    semesterId: 7,
  },
  {
    label: "Semester 8",
    semesterId: 8,
  },
];

class GenerateQrCode extends Component {
  state = {
    department: "Mechanical",
    semester: 1,
    subjectCode: "",
    hoursTaken: 0,
    subjectList: [],
    displayQrCode: false,
    attendanceData: {},
  };

  componentDidMount() {
    this.getSubjectData();
  }

  onClickGoBack = () => {
    const { history } = this.props;
    history.replace("/staff");
  };

  getSubjectData = async () => {
    const { department, semester } = this.state;

    const subjectDetails = {
      department,
      semester,
    };

    const url = `${process.env.REACT_APP_URL}subjects`;

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(subjectDetails),
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      const subjectData = data.subjectData;

      var subjectCode;

      if (subjectData.length > 0) {
        subjectCode = subjectData[0].subject_code;
      }

      this.setState({
        subjectList: subjectData,
        subjectCode: subjectCode,
      });
    }
  };

  onChangeDepartment = (event) => {
    this.setState({ department: event.target.value }, this.getSubjectData);
  };

  onChangeSemester = (event) => {
    this.setState({ semester: event.target.value }, this.getSubjectData);
  };

  onChangeHoursTaken = (event) => {
    this.setState({ hoursTaken: event.target.value });
  };

  onChangeSubject = (event) => {
    this.setState({ subjectCode: event.target.value });
  };

  onSubmitGenerateQrForm = async (event) => {
    event.preventDefault();

    const { department, semester, subjectCode, hoursTaken } = this.state;

    const url = `${process.env.REACT_APP_URL}staff-attendance`;

    const staffAttendanceDetails = {
      department: department,
      semester: semester,
      subject_code: subjectCode,
      hours_taken: hoursTaken,
    };

    const jwtToken = Cookies.get("jwt_token");

    const options = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwtToken}`,
      },
      method: "POST",
      body: JSON.stringify(staffAttendanceDetails),
    };

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        displayQrCode: true,
        attendanceData: data.staff_attendance,
      });
    }
  };

  render() {
    const {
      subjectCode,
      hoursTaken,
      subjectList,
      displayQrCode,
      attendanceData,
    } = this.state;

    if (localStorage.getItem("user_type") === "student") {
      return <Redirect to="/" />;
    }

    const renderQrForm = () => {
      return (
        <div className="generate-qr-container">
          <h1>Generate QR Code</h1>
          <form
            className="generate-qr-form"
            onSubmit={this.onSubmitGenerateQrForm}
          >
            <label className="form-label" htmlFor="departmentInput">
              DEPARTMENT
            </label>

            <select
              id="departmentInput"
              className="form-input"
              onChange={this.onChangeDepartment}
            >
              {departmentList.map((department) => {
                return (
                  <option
                    key={department.departmentId}
                    value={department.departmentId}
                  >
                    {department.label}
                  </option>
                );
              })}
            </select>

            <label className="form-label" htmlFor="semesterInput">
              SEMESTER
            </label>

            <select
              id="semesterInput"
              className="form-input"
              onChange={this.onChangeSemester}
            >
              {semesterList.map((semester) => {
                return (
                  <option key={semester.semesterId} value={semester.semesterId}>
                    {semester.label}
                  </option>
                );
              })}
            </select>

            <label className="form-label" htmlFor="subjectInput">
              SUBJECT
            </label>

            <select
              id="subjectInput"
              className="form-input"
              onChange={this.onChangeSubject}
            >
              {subjectList.map((subject) => {
                return (
                  <option
                    key={subject.subject_code}
                    value={subject.subject_code}
                  >
                    {subject.subject_name}
                  </option>
                );
              })}
            </select>

            <label className="form-label" htmlFor="hoursTakenInput">
              TOTAL HOUR
            </label>
            <input
              id="hoursTakenInput"
              className="form-input"
              type="number"
              value={hoursTaken}
              placeholder="Total hour"
              onChange={this.onChangeHoursTaken}
              required
            />

            <button className="login-btn" type="submit">
              Generate QR
            </button>
          </form>
        </div>
      );
    };

    const renderQrCode = () => {
      // Value Format Time_Stamp - Sub_Code - Sub_Name - Staff_Id - Staff_Name - Department - hours_taken
      let value = `${attendanceData.time_stamp}-${attendanceData.subject_code}-${attendanceData.subject_name}-${attendanceData.staff_id}-${attendanceData.staff_name}-${attendanceData.department}-${attendanceData.taken_hours}-${attendanceData.semester}`;

      return (
        <div className="qr-code-container">
          <h1>Scan QR - {subjectCode}</h1>
          <div className="qr-wraper">
            <QRCode title="QRCode" value={value} />
          </div>
          <button
            className="login-btn"
            type="button"
            onClick={this.onClickGoBack}
          >
            Go Back
          </button>
        </div>
      );
    };

    return <>{displayQrCode ? renderQrCode() : renderQrForm()}</>;
  }
}

export default GenerateQrCode;
