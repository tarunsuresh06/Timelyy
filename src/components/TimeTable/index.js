import "./index.css";
import { Component } from "react";
import Header from "../Header";
import axios from "axios";
import Cookies from "js-cookie";

class TimeTable extends Component {
  state = { image: null, timeTableData: [] };

  componentDidMount() {
    this.getImageData();
  }

  getImageData = async () => {
    // Make an API call to fetch the image
    const options = {
      headers: {
        authorization: `Bearer ${Cookies.get("jwt_token")}`,
      },
    };
    const response = await fetch(
      `${process.env.REACT_APP_URL}time-table`,
      options
    );
    const data = await response.json();
    this.setState({ timeTableData: data });
  };

  handleImageChange = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  handleUpload = async () => {
    const { image } = this.state;

    try {
      const formData = new FormData();
      formData.append("pdf", image);

      const response = await axios.post(
        `${process.env.REACT_APP_URL}upload-time-table`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${Cookies.get("jwt_token")}`,
          },
        }
      );

      if (response.data === "OK") {
        alert("Success: IMAGE Added to Database");
      }
    } catch (error) {
      console.error("Error uploading IMAGE:", error);
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
    const { timeTableData } = this.state;

    const showUpload = localStorage.getItem("user_type") === "staff";
    return (
      <>
        <Header />
        <div className="time-table-bg-container">
          <div className="time-table-container">
            <h3>{timeTableData.department} Time Table</h3>
            <button
              onClick={() => this.viewPdf(timeTableData.data)}
              className="login-btn"
            >
              View Time Table
            </button>
          </div>
          {showUpload && (
            <div className="notes-form-container">
              <h2>Upload Time Table</h2>
              <label className="form-label" htmlFor="chooseImageInput">
                Choose Image
              </label>
              <input
                id="chooseImageInput"
                type="file"
                className="form-input"
                onChange={this.handleImageChange}
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

export default TimeTable;
