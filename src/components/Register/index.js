import "./index.css";
import { Component } from "react";
import Header from "../Header";

class Register extends Component {
  state = {
    formType: "student",
    studentName: "",
    studentRollNo: "",
    studentEmail: "",
    studentDepartment: "",
    teacherName: "",
    teacherEmployeeNo: "",
    teacherEmail: "",
    teacherDepartment: "",
  };

  onChangeFormType = (event) => {
    const value = event.target.value;

    this.setState({ formType: value });
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

  onChangeStudentDepartment = (event) => {
    this.setState({ studentDepartment: event.target.value });
  };

  onChangeTeacherName = (event) => {
    this.setState({ teacherName: event.target.value });
  };

  onChangeTeacherEmployeeNumber = (event) => {
    this.setState({ teacherEmployeeNo: event.target.value });
  };

  onChangeTeacherEmail = (event) => {
    this.setState({ teacherEmail: event.target.value });
  };

  onChangeTeacherDepartment = (event) => {
    this.setState({ teacherDepartment: event.target.value });
  };

  render() {
    const {
      formType,
      studentName,
      studentRollNo,
      studentEmail,
      studentDepartment,
      teacherName,
      teacherEmployeeNo,
      teacherEmail,
      teacherDepartment,
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
          type="text"
          value={studentEmail}
          placeholder="Student Email"
          onChange={this.onChangeStudentEmail}
          required
        />

        <label className="form-label" htmlFor="studentDepartmentInput">
          STUDENT DEPARTMENT
        </label>
        <input
          id="studentDepartmentInput"
          className="form-input"
          type="text"
          value={studentDepartment}
          placeholder="Student Department"
          onChange={this.onChangeStudentDepartment}
          required
        />
        <button className="login-btn" type="submit">
          Add Student
        </button>
      </form>
    );

    const renderTeacherForm = () => (
      <form className="register-form" onSubmit={this.onSubmitStudentForm}>
        <label className="form-label" htmlFor="teacherNameInput">
          TEACHER NAME
        </label>
        <input
          id="teacherNameInput"
          className="form-input"
          type="text"
          value={teacherName}
          placeholder="Teacher Name"
          onChange={this.onChangeTeacherName}
          required
        />

        <label className="form-label" htmlFor="teacherEmployeeNumberInput">
          EMPLOYEE NO
        </label>
        <input
          id="teacherEmployeeNumberInput"
          className="form-input"
          type="text"
          value={teacherEmployeeNo}
          placeholder="Employee Number"
          onChange={this.onChangeTeacherEmployeeNumber}
          required
        />

        <label className="form-label" htmlFor="teacherEmailInput">
          TEACHER EMAIL
        </label>
        <input
          id="teacherEmailInput"
          className="form-input"
          type="text"
          value={teacherEmail}
          placeholder="Teacher Email"
          onChange={this.onChangeTeacherEmail}
          required
        />

        <label className="form-label" htmlFor="teacherDepartmentInput">
          TEACHER DEPARTMENT
        </label>
        <input
          id="teacherDepartmentInput"
          className="form-input"
          type="text"
          value={teacherDepartment}
          placeholder="Teacher Department"
          onChange={this.onChangeTeacherDepartment}
          required
        />
        <button className="login-btn" type="submit">
          Add Teacher
        </button>
      </form>
    );

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
              checked={formType === "student"}
              onChange={this.onChangeFormType}
              required
            />
            <label className="form-type-text" htmlFor="student">
              Student
            </label>
            <input
              className="form-type-radio-input"
              type="radio"
              value="teacher"
              id="teacher"
              checked={formType === "teacher"}
              onChange={this.onChangeFormType}
              required
            />
            <label className="form-type-text" htmlFor="teacher">
              Teacher
            </label>
          </div>

          {formType === "student" && renderStudentForm()}
          {formType === "teacher" && renderTeacherForm()}
        </div>
      </>
    );
  }
}

export default Register;
