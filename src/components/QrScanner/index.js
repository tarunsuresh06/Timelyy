import { useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const ScanQrCode = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    const success = (result) => {
      scanner.clear();
      setScanResult(result);
    };

    const error = (err) => {
      console.warn(err);
    };

    scanner.render(success, error);
  }, []);

  return (
    <div className="Scan">
      <h1>Scan the Qr here</h1>
      {scanResult ? <div>success : {scanResult}</div> : <div id="reader"></div>}
    </div>
  );
};

export default ScanQrCode;
