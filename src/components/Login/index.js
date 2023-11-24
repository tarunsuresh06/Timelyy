import { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMsg: "",
    showErrorMsg: false,
    userType: "student",
  };

  onSubmitFailure = (errMsg) => {
    this.setState({ errorMsg: errMsg, showErrorMsg: true });
  };

  onSubmitSuccess = (jwtToken) => {
    const { userType, email } = this.state;
    const { history } = this.props;
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    localStorage.setItem("user_type", userType);
    if (email === "admin@timelyy.com") {
      localStorage.setItem("is_admin", true);
      history.replace("/admin");
    } else {
      localStorage.setItem("is_admin", false);
      history.replace("/");
    }
  };

  onSubmitLogin = async (event) => {
    const { email, password, userType } = this.state;

    event.preventDefault();

    const userDetails = { email, password, userType };

    const url = `${process.env.REACT_APP_URL}login`;

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);

    if (response.ok) {
      const jwtToken = data.jwtToken;
      this.onSubmitSuccess(jwtToken);
    } else {
      const errMsg = data.error_msg;
      this.onSubmitFailure(errMsg);
    }
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onChangeUserType = (event) => {
    const value = event.target.value;

    this.setState({ userType: value });
  };

  render() {
    const { email, password, errorMsg, showErrorMsg, userType } = this.state;

    const token = Cookies.get("jwt_token");

    if (token !== undefined) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login-bg-container">
        <form className="form-container" onSubmit={this.onSubmitLogin}>
          <img
            className="login-app-logo"
            src="https://res.cloudinary.com/tommy06/image/upload/v1699024193/egm92wsvgmmsnygaiqce.png"
            alt="website logo"
          />
          <label className="form-label" htmlFor="emailInput">
            EMAIL
          </label>
          <input
            id="emailInput"
            className="form-input"
            type="text"
            value={email}
            placeholder="Email"
            onChange={this.onChangeEmail}
            required
          />
          <label className="form-label" htmlFor="passwordInput">
            PASSWORD
          </label>
          <input
            id="passwordInput"
            className="form-input"
            type="password"
            value={password}
            placeholder="Password"
            onChange={this.onChangePassword}
            required
          />

          <div>
            <input
              className="form-type-radio-input"
              type="radio"
              value="student"
              id="student"
              checked={userType === "student"}
              onChange={this.onChangeUserType}
              required
            />
            <label className="form-type-text" htmlFor="student">
              Student
            </label>
            <input
              className="form-type-radio-input"
              type="radio"
              value="staff"
              id="staff"
              checked={userType === "staff"}
              onChange={this.onChangeUserType}
              required
            />
            <label className="form-type-text" htmlFor="staff">
              Staff
            </label>
          </div>

          {showErrorMsg && <p className="error-msg">{errorMsg}</p>}
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
