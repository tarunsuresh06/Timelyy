import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Attendance from "./components/Attendance";
import CreateQRCode from "./components/Qr";
import ScanQrCode from "./components/QrScanner";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/register" component={Register} />
        <ProtectedRoute exact path="/attendance" component={Attendance} />
        <ProtectedRoute exact path="/qrcode" component={CreateQRCode} />
        <ProtectedRoute exact path="/qrcode/scan" component={ScanQrCode} />
      </Switch>
    </div>
  );
}

export default App;
