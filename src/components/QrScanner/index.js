import { useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

const ScanQrCode = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 200,
        height: 200,
      },
      fps: 5,
    });

    const success = (result) => {
      scanner.clear();
      console.log(result);
      setScanResult(result);
    };

    const error = (err) => {
      console.warn(err);
    };

    scanner.render(success, error);
  }, []);

  if (localStorage.getItem("user_type") === "staff") {
    return <Redirect to="/staff" />;
  }

  return (
    <div className="Scan">
      <h1>Scan the Qr here</h1>
      {scanResult ? <div>success : {scanResult}</div> : <div id="reader"></div>}
    </div>
  );
};

export default ScanQrCode;
