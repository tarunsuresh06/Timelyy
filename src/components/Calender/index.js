import "./index.css";
import { Component } from "react";
import Header from "../Header";

class Calender extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="calender-bg-container">
          <img
            className="calender-image"
            src="https://res.cloudinary.com/tommy06/image/upload/v1699692630/j661umhnaynfb6vpston.jpg"
            alt="calender"
          />
        </div>
      </>
    );
  }
}

export default Calender;
