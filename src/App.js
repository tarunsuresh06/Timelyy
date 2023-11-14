import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Attendance from "./components/Attendance";
import ScanQrCode from "./components/QrScanner";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import StaffDashboard from "./components/StaffDashboard";
import Calender from "./components/Calender";
import GenerateQrCode from "./components/GenerateQr";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/register" component={Register} />
        <ProtectedRoute exact path="/attendance" component={Attendance} />
        <ProtectedRoute exact path="/qrcode/scan" component={ScanQrCode} />
        <ProtectedRoute exact path="/staff" component={StaffDashboard} />
        <ProtectedRoute exact path="/calender" component={Calender} />
        <ProtectedRoute
          exact
          path="/generate-qr-code"
          component={GenerateQrCode}
        />
      </Switch>
    </div>
  );
}

export default App;
