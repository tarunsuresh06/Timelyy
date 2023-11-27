import Header from "../Header";
import "./index.css";

const About = () => {
  return (
    <>
      <Header />
      <div
        className="about-us-container"
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="about-main">
          <img
            src="https://res.cloudinary.com/tommy06/image/upload/v1700830367/levxulcxvmb141w1kvsx.png"
            alt="about"
          />

          <div>
            <h1>About</h1>
            <p>
              TIMELYY revolutionizes attendance management with its
              sophisticated attendance monitor, offering real-time tracking for
              precise record-keeping. The intuitive timetable feature allows
              users to create and customize schedules effortlessly. Complemented
              by a comprehensive calendar, TIMELYY ensures users stay on top of
              their commitments, making attendance tracking a seamless and
              organized experience.
            </p>
          </div>
        </div>

        <h1>Developers</h1>
        <div className="developer-container">
          <div className="developer-profile">
            <img
              src="https://res.cloudinary.com/tommy06/image/upload/v1701106410/vnjzknir9uiquxy1r926.jpg"
              alt="developer-profile"
            />

            <div>
              <p>Keerthana P</p>
              <p>UI Design</p>
            </div>
          </div>

          <div className="developer-profile">
            <img
              src="https://res.cloudinary.com/tommy06/image/upload/v1700850168/nbsg25za2nhhtkoj6txq.jpg"
              alt="developer-profile"
            />

            <div>
              <p>Sudharsan Raj T</p>
              <p>Backend</p>
            </div>
          </div>

          <div className="developer-profile">
            <img
              src="https://res.cloudinary.com/tommy06/image/upload/v1700928336/y8vraehuwsy34dj3e1et.jpg"
              alt="developer-profile"
            />

            <div>
              <p>Narendharan G</p>
              <p>Frontend</p>
            </div>
          </div>

          <div className="developer-profile">
            <img
              src="https://res.cloudinary.com/tommy06/image/upload/v1700928336/zenoujqsl8lbb0xzuqxy.jpg"
              alt="developer-profile"
            />

            <div>
              <p>Sakthinesh S</p>
              <p>Database</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
