import { useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const ScanQrCode = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 200,
        height: 200,
      },
      fps: 60,
    });

    const success = async (result) => {
      scanner.clear();
      // Value Format Time_Stamp - Sub_Code - Sub_Name - Staff_Id - Staff_Name - Department - hours_taken
      const attendanceDetailsArray = result.split("-");

      const time_stamp = attendanceDetailsArray[0],
        subject_code = attendanceDetailsArray[1],
        subject_name = attendanceDetailsArray[2],
        staff_id = attendanceDetailsArray[3],
        staff_name = attendanceDetailsArray[4],
        department = attendanceDetailsArray[5],
        taken_hours = attendanceDetailsArray[6],
        subject_semester = attendanceDetailsArray[7];

      const studentAttendanceDetails = {
        time_stamp,
        subject_code,
        subject_name,
        staff_id,
        staff_name,
        department,
        taken_hours,
        subject_semester,
      };

      const url = `${process.env.REACT_APP_URL}student-attendance`;

      const jwtToken = Cookies.get("jwt_token");

      const options = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${jwtToken}`,
        },
        method: "POST",
        body: JSON.stringify(studentAttendanceDetails),
      };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setScanResult("Attendance Added Successfully LastID: " + data.lastID);
      } else {
        const data = await response.json();
        setScanResult(data.err_msg);
      }
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
      {scanResult ? <div>{scanResult}</div> : <div id="reader"></div>}
    </div>
  );
};

export default ScanQrCode;
