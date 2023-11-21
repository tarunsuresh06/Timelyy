import React, { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";

const PdfList = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}pdf-data`
        );
        setPdfs(response.data);
      } catch (error) {
        console.error("Error fetching PDFs:", error);
      }
    };

    fetchPdfs();
  }, []);

  const viewPdf = (pdfData) => {
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

  return (
    <div className="pdf-list">
      {pdfs.map((pdf, index) => (
        <div key={index} className="pdf-container">
          <p>Name: {pdf.name}</p>
          <p>Department: {pdf.department}</p>
          <button onClick={() => viewPdf(pdf.data)} className="login-btn">
            View PDF
          </button>
        </div>
      ))}
    </div>
  );
};

export default PdfList;
