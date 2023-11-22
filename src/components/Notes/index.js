import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import Header from "../Header";
import Cookies from "js-cookie";
import PdfList from "../PdfList";
import { v4 } from "uuid";

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

const PdfUpload = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("Mechanical");

  const onChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!file || !name || !department) {
        console.error("File, name and department are required.");
        return;
      }

      const formData = new FormData();
      formData.append("id", v4());
      formData.append("pdf", file);
      formData.append("name", name);
      formData.append("department", department);

      const response = await axios.post(
        `${process.env.REACT_APP_URL}upload-pdf`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${Cookies.get("jwt_token")}`,
          },
        }
      );

      if (response.data === "OK") {
        alert("Success: Notes Added to Database");
      }
    } catch (error) {
      console.error("Error uploading PDF:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="notes-bg-container">
        <PdfList />
        <div className="notes-form-container">
          <h2>Upload Notes</h2>
          <label className="form-label" htmlFor="choosePdfInput">
            Choose PDF
          </label>
          <input
            id="choosePdfInput"
            type="file"
            className="form-input"
            onChange={handleFileChange}
            required
          />
          <label className="form-label" htmlFor="fileNameInput">
            File Name
          </label>
          <input
            id="fileNameInput"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
          <label className="form-label" htmlFor="departmentInput">
            Department
          </label>
          <select
            id="departmentInput"
            className="form-input"
            onChange={onChangeDepartment}
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
          <button onClick={handleUpload} className="login-btn pdf-btn">
            Upload PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default PdfUpload;
