import "./home.css";

const Home = () => {

  return (
    <section className="home-section">
      <section className="container">

        <div className="home-div-class">
          <h1>Mario Boseski</h1>

          <section className="home-section-class">
            <img src="src/assets/myFoto.jpg" alt="Mario-Boseski-frontend-developer"></img>

            <div className="home-info">
              <p>Hello i'm Mario Boseski a Frontend web-developer,
                transforming ideas into clean, responsive websites.
              </p>

              <ul className="cv-contact-links">
                <li><a href="Resume - Mario Boseski.pdf" className="resume-link" download="Mario Boseski - Resume.pdf">Resume</a></li>
                <li><a href="Pages/contact.html" className="contact-link">Contact me</a></li>
              </ul>
            </div>
          </section>
        </div>

      </section>
    </section>
  );
}

export default Home;

