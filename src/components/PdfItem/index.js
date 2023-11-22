import "./index.css";

const PdfItem = (props) => {
  const { pdf, deletePdf, viewPdf } = props;

  const onClickDelete = () => {
    deletePdf(pdf.id);
  };

  const showUpload = localStorage.getItem("user_type") === "staff";

  return (
    <div className="pdf-container">
      <p>Name: {pdf.name}</p>
      <p>Department: {pdf.department}</p>
      <button onClick={() => viewPdf(pdf.data)} className="login-btn">
        View PDF
      </button>
      {showUpload && (
        <button onClick={onClickDelete} className="delete-btn">
          Delete
        </button>
      )}
    </div>
  );
};

export default PdfItem;
