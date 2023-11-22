import "./index.css";
import { Component } from "react";
import Header from "../Header";
import axios from "axios";
import Cookies from "js-cookie";

class Calender extends Component {
  state = { calender: null, calenderData: null };

  componentDidMount() {
    this.getCalenderData();
  }

  getCalenderData = async () => {
    const options = {
      headers: {
        authorization: `Bearer ${Cookies.get("jwt_token")}`,
      },
    };
    const response = await fetch(
      `${process.env.REACT_APP_URL}calender`,
      options
    );
    const data = await response.json();
    this.setState({ calenderData: data });
  };

  handleCalenderChange = (event) => {
    this.setState({ calender: event.target.files[0] });
  };

  handleUpload = async () => {
    const { calender } = this.state;

    try {
      const formData = new FormData();
      formData.append("pdf", calender);

      const response = await axios.post(
        `${process.env.REACT_APP_URL}upload-calender`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${Cookies.get("jwt_token")}`,
          },
        }
      );

      if (response.data === "OK") {
        alert("Success: CALENDER Added to Database");
      }
    } catch (error) {
      console.error("Error uploading CALENDER:", error);
    }
  };

  viewPdf = (pdfData) => {
    const pdfWindow = window.open("", "_blank");

    if (pdfWindow) {
      pdfWindow.document.write(
        "<html><head><title>PDF Viewer</title><style>body { margin: 0; }</style></head><body>"
      );
      pdfWindow.document.write(
        '<embed width="100%" height="100%" src="data:application/pdf;base64,' +
          pdfData +
          '" type="application/pdf" />'
      );
      pdfWindow.document.write("</body></html>");
      pdfWindow.document.close();
    } else {
      alert("Pop-ups are blocked. Please allow pop-ups and try again.");
    }
  };

  render() {
    const { calenderData } = this.state;

    const showUpload = localStorage.getItem("user_type") === "staff";

    return (
      <>
        <Header />
        <div className="calender-bg-container">
          <div className="time-table-container">
            <h3>Acadamic Calender</h3>
            <button
              onClick={() => this.viewPdf(calenderData.data)}
              className="login-btn"
            >
              View Calender
            </button>
          </div>
          {showUpload && (
            <div className="notes-form-container">
              <h2>Upload Calender</h2>
              <label className="form-label" htmlFor="chooseImageInput">
                Choose Calender
              </label>
              <input
                id="chooseImageInput"
                type="file"
                className="form-input"
                onChange={this.handleCalenderChange}
                required
              />
              <button className="login-btn pdf-btn" onClick={this.handleUpload}>
                Upload
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Calender;
