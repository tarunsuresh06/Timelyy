import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Attendance from "./components/Attendance";
import CreateQRCode from "./components/Qr";
import ScanQrCode from "./components/QrScanner";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/attendance" component={Attendance} />
        <Route exact path="/qrcode" component={CreateQRCode} />
        <Route exact path="/qrcode/scan" component={ScanQrCode} />
      </Switch>
    </div>
  );
}

export default App;
