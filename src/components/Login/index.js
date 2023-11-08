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
    formType: "student",
  };

  onSubmitFailure = (errMsg) => {
    this.setState({ errorMsg: errMsg, showErrorMsg: true });
  };

  onSubmitSuccess = (jwtToken) => {
    const { history } = this.props;
    const { email } = this.state;
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    Cookies.set("loginEmail", email, { expires: 30 });
    history.replace("/");
  };

  onSubmitLogin = async (event) => {
    const { email, password } = this.state;

    event.preventDefault();

    const userDetails = { email, password };

    const url = "http://localhost:3000/login";

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();

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

  onChangeFormType = (event) => {
    const value = event.target.value;

    this.setState({ formType: value });
  };

  render() {
    const { email, password, errorMsg, showErrorMsg, formType } = this.state;

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
              checked={formType === "student"}
              onChange={this.onChangeFormType}
              required
            />
            <label className="form-type-text" htmlFor="student">
              Student
            </label>
            <input
              className="form-type-radio-input"
              type="radio"
              value="teacher"
              id="teacher"
              checked={formType === "teacher"}
              onChange={this.onChangeFormType}
              required
            />
            <label className="form-type-text" htmlFor="teacher">
              Teacher
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
