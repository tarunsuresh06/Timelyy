import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Attendance from "./components/Attendance";
import ScanQrCode from "./components/QrScanner";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
import Calendar from "./components/Calendar";
import GenerateQrCode from "./components/GenerateQr";
import notFound from "./components/NotFound";
import TimeTable from "./components/TimeTable";
import About from "./components/About";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/register" component={Register} />
        <ProtectedRoute exact path="/attendance" component={Attendance} />
        <ProtectedRoute exact path="/qrcode/scan" component={ScanQrCode} />
        <ProtectedRoute exact path="/admin" component={AdminDashboard} />
        <ProtectedRoute exact path="/calendar" component={Calendar} />
        <ProtectedRoute exact path="/time-table" component={TimeTable} />
        <ProtectedRoute exact path="/about" component={About} />
        <ProtectedRoute
          exact
          path="/generate-qr-code"
          component={GenerateQrCode}
        />
        <Route exact path="/not-found" component={notFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
