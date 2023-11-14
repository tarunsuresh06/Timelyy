import "./index.css";
import { Component } from "react";
import Header from "../Header";
import { Redirect } from "react-router-dom";

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

class Register extends Component {
  state = {
    userType: "student",
    studentName: "",
    studentRollNo: "",
    studentEmail: "",
    semester: 1,
    studentDepartment: "Mechanical",
    studentPassword: "",
    staffName: "",
    staffEmployeeNo: "",
    staffEmail: "",
    staffDepartment: "Mechanical",
    staffPassword: "",
  };

  onChangeFormType = (event) => {
    const value = event.target.value;

    this.setState({ userType: value });
  };

  onChangeStudentName = (event) => {
    this.setState({ studentName: event.target.value });
  };

  onChangeStudentRollNumber = (event) => {
    this.setState({ studentRollNo: event.target.value });
  };

  onChangeStudentEmail = (event) => {
    this.setState({ studentEmail: event.target.value });
  };

  onChangeStudentSemester = (event) => {
    this.setState({ semester: event.target.value });
  };

  onChangeStudentDepartment = (event) => {
    this.setState({ studentDepartment: event.target.value });
  };

  onChangeStudentPassword = (event) => {
    this.setState({ studentPassword: event.target.value });
  };

  onChangeStaffName = (event) => {
    this.setState({ teacherName: event.target.value });
  };

  onChangeStaffEmployeeNumber = (event) => {
    this.setState({ teacherEmployeeNo: event.target.value });
  };

  onChangeStaffEmail = (event) => {
    this.setState({ teacherEmail: event.target.value });
  };

  onChangeStaffDepartment = (event) => {
    this.setState({ teacherDepartment: event.target.value });
  };

  onChangeStaffPassword = (event) => {
    this.setState({ teacherPassword: event.target.value });
  };

  onSubmitStaffForm = async (event) => {
    const {
      staffName,
      staffEmployeeNo,
      staffEmail,
      staffDepartment,
      staffPassword,
      userType,
    } = this.state;

    event.preventDefault();

    const url = `${process.env.REACT_APP_URL}register`;

    const staffDetails = {
      name: staffName,
      unique_no: staffEmployeeNo,
      email: staffEmail,
      department: staffDepartment,
      password: staffPassword,
      user_type: userType,
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(staffDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
  };

  onSubmitStudentForm = async (event) => {
    const {
      studentName,
      studentRollNo,
      studentEmail,
      studentDepartment,
      studentPassword,
      semester,
      userType,
    } = this.state;
    event.preventDefault();

    const url = `${process.env.REACT_APP_URL}register`;

    const studentDetails = {
      name: studentName,
      unique_no: studentRollNo,
      email: studentEmail,
      department: studentDepartment,
      semester: semester,
      password: studentPassword,
      user_type: userType,
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(studentDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
  };

  render() {
    const {
      userType,
      studentName,
      studentRollNo,
      studentEmail,
      studentPassword,
      staffName,
      staffEmployeeNo,
      staffEmail,
      staffPassword,
    } = this.state;

    const renderStudentForm = () => (
      <form className="register-form" onSubmit={this.onSubmitStudentForm}>
        <label className="form-label" htmlFor="studentNameInput">
          STUDENT NAME
        </label>
        <input
          id="studentNameInput"
          className="form-input"
          type="text"
          value={studentName}
          placeholder="Student Name"
          onChange={this.onChangeStudentName}
          required
        />

        <label className="form-label" htmlFor="studentRollNumberInput">
          ROLL NO
        </label>
        <input
          id="studentRollNumberInput"
          className="form-input"
          type="text"
          value={studentRollNo}
          placeholder="Roll Number"
          onChange={this.onChangeStudentRollNumber}
          required
        />

        <label className="form-label" htmlFor="studentEmailInput">
          STUDENT EMAIL
        </label>
        <input
          id="studentEmailInput"
          className="form-input"
          type="email"
          value={studentEmail}
          placeholder="Student Email"
          onChange={this.onChangeStudentEmail}
          required
        />

        <label className="form-label" htmlFor="studentSemesterInput">
          SEMESTER
        </label>

        <select
          id="studentSemesterInput"
          className="form-input"
          onChange={this.onChangeStudentSemester}
        >
          {semesterList.map((semester) => {
            return (
              <option key={semester.semesterId} value={semester.semesterId}>
                {semester.label}
              </option>
            );
          })}
        </select>

        <label className="form-label" htmlFor="studentDepartmentInput">
          STUDENT DEPARTMENT
        </label>

        <select
          id="studentDepartmentInput"
          className="form-input"
          onChange={this.onChangeStudentDepartment}
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

        <label className="form-label" htmlFor="studentPasswordInput">
          STUDENT PASSWORD
        </label>

        <input
          id="studentPasswordInput"
          className="form-input"
          type="text"
          value={studentPassword}
          placeholder="Student Password"
          onChange={this.onChangeStudentPassword}
          required
        />

        <button className="login-btn" type="submit">
          Add Student
        </button>
      </form>
    );

    const renderStaffForm = () => (
      <form className="register-form" onSubmit={this.onSubmitStaffForm}>
        <label className="form-label" htmlFor="staffNameInput">
          STAFF NAME
        </label>
        <input
          id="staffNameInput"
          className="form-input"
          type="text"
          value={staffName}
          placeholder="Staff Name"
          onChange={this.onChangeStaffName}
          required
        />

        <label className="form-label" htmlFor="staffEmployeeNumberInput">
          EMPLOYEE NO
        </label>
        <input
          id="staffEmployeeNumberInput"
          className="form-input"
          type="text"
          value={staffEmployeeNo}
          placeholder="Employee Number"
          onChange={this.onChangeStaffEmployeeNumber}
          required
        />

        <label className="form-label" htmlFor="teacherEmailInput">
          STAFF EMAIL
        </label>
        <input
          id="staffEmailInput"
          className="form-input"
          type="text"
          value={staffEmail}
          placeholder="Staff Email"
          onChange={this.onChangeStaffEmail}
          required
        />

        <label className="form-label" htmlFor="staffDepartmentInput">
          STAFF DEPARTMENT
        </label>
        <select id="staffDepartmentInput" className="form-input">
          {departmentList.map((department) => {
            return (
              <option
                key={department.departmentId}
                value={department.departmentId}
                onChange={this.onChangeStaffDepartment}
              >
                {department.label}
              </option>
            );
          })}
        </select>

        <label className="form-label" htmlFor="staffPasswordInput">
          STAFF PASSWORD
        </label>

        <input
          id="staffPasswordInput"
          className="form-input"
          type="text"
          value={staffPassword}
          placeholder="Staff Password"
          onChange={this.onChangeStaffPassword}
          required
        />
        <button className="login-btn" type="submit">
          Add Staff
        </button>
      </form>
    );

    if (localStorage.getItem("user_type") === "student") {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Header />
        <div className="register-bg-container">
          <div>
            <input
              className="form-type-radio-input"
              type="radio"
              value="student"
              id="student"
              checked={userType === "student"}
              onChange={this.onChangeFormType}
              required
            />
            <label className="form-type-text" htmlFor="student">
              STUDENT
            </label>
            <input
              className="form-type-radio-input"
              type="radio"
              value="staff"
              id="staff"
              checked={userType === "staff"}
              onChange={this.onChangeFormType}
              required
            />
            <label className="form-type-text" htmlFor="staff">
              STAFF
            </label>
          </div>

          {userType === "student" && renderStudentForm()}
          {userType === "staff" && renderStaffForm()}
        </div>
      </>
    );
  }
}

export default Register;
