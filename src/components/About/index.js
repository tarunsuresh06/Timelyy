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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="developer-container">
          <div className="developer-profile">
            <img
              src="https://res.cloudinary.com/tommy06/image/upload/v1700850167/zeiejyhcl0fe3vjljbpi.jpg"
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
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="developer-profile"
            />

            <div>
              <p>Narendharan G</p>
              <p>Frontend</p>
            </div>
          </div>

          <div className="developer-profile">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
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
