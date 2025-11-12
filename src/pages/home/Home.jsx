import { Link } from "react-router-dom";
import myFoto from "../../assets/myFoto.jpg";
import { resume } from "react-dom/server";
import "./home.css";

const Home = () => {

  return (
    <section className="home-section">
      <section className="container">

        <div className="home-div-class">
          <h1>Mario Boseski</h1>

          <section className="home-section-class">
            <img src={myFoto} alt="Mario-Boseski-frontend-developer"></img>

            <div className="home-info">
              <p>Hello i'm Mario Boseski a Frontend web-developer,
                transforming ideas into clean, responsive websites.
              </p>

              <ul className="cv-contact-links">
                <li><a href={`${import.meta.env.BASE_URL}resume.pdf`} className="resume-link" download="Mario Boseski - Resume.pdf">Resume</a></li>
                <Link to="contact" className="contact-link">Contact me</Link>
              </ul>
            </div>
          </section>
        </div>

      </section>
    </section>
  );
}

export default Home;

