import financeImg from "../../assets/Personal-Finance-Tracker-Image.png";
import financeVid from "../../assets/Personal-Finance-Tracker-Video.mp4";

import countryImg from "../../assets/Country-Info-App-Image.png";
import countryVid from "../../assets/Country-Info-App-Video.mp4";

import expenseImg from "../../assets/Expense-Tracker-App-Image.png";
import expenseVid from "../../assets/Expense-Tracker-App-Video.mp4";
import "./projects.css";

const Projects = () => {

  return (
    <div>
      <section className="projects-section">
        <h2>My projects</h2>

        <section className="personal-finance-tracker">
          <section className="container">
            <div className="projects-content">

              <div className="project-text-div">
                <p className="real-world-project-paragraph">Real World Project</p>
                <p className="build-with-paragraph">Built with : HTML, CSS, JavaScript</p>
                <p className="name-project-paragraph">Personal Finance Tracker</p>
                <p><strong>Tracks income and expenses with live balance calculation.</strong></p>
                <p><strong>Responsive project and easy to use.</strong></p>
              </div>

              <div className="video-image-div">
                <img
                  src={financeImg}
                  alt="project-image"
                />

                <video controls autoPlay muted loop width="600">
                  <source src={financeVid} type="video/mp4" />
                  <source src={financeVid} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>
          </section>

          <ul className="project-links">
            <li><a href="https://github.com/Marioboseski/Personal-Finance-Tracker.git" target="_blank">Code review</a></li>
            <li><a href="https://marioboseski.github.io/Personal-Finance-Tracker/" target="_blank">Live link</a></li>
          </ul>
        </section>

        <section className="country-info-app">
          <section className="container">
            <div className="projects-content">

              <div className="project-text-div">
                <p className="real-world-project-paragraph">Real World Project</p>
                <p className="build-with-paragraph">Built with : HTML, CSS, JavaScript</p>
                <p className="name-project-paragraph">Country Info App</p>
                <p><strong>A web app that fetches real-time data via REST API.</strong></p>
                <p><strong>User writes country and the app displays information about the country.</strong></p>
              </div>

              <div className="video-image-div">
                <img
                  src={countryImg}
                  alt="project-image"
                />

                <video controls autoPlay muted loop width="600">
                  <source src={countryVid} type="video/mp4" />
                  <source src={countryVid} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>
          </section>

          <ul className="project-links">
            <li><a href="https://github.com/Marioboseski/Country-Info-App.git" target="_blank">Code review</a></li>
            <li><a href="https://marioboseski.github.io/Country-Info-App/" target="_blank">Live link</a></li>
          </ul>
        </section>


        <section className="expense-trakcer-app">
          <section className="container">
            <div className="projects-content">

              <div className="project-text-div">
                <p className="real-world-project-paragraph">Real World Project</p>
                <p className="build-with-paragraph">Built with : HTML, CSS, JavaScript</p>
                <p className="name-project-paragraph">Expense Tracker App</p>
                <p><strong>Responsive web app.</strong></p>
                <p><strong>Web app to add expenses. Expenses are saved in localstorage</strong></p>
              </div>

              <div className="video-image-div">
                <img
                  src={expenseImg}
                  alt="project-image"
                />

                <video controls autoPlay muted loop width="600">
                  <source src={expenseVid} type="video/mp4" />
                  <source src={expenseVid} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>
          </section>

          <ul className="project-links">
            <li><a href="https://github.com/Marioboseski/Expense-Tracker-Project.git" target="_blank">Code review</a></li>
            <li><a href="https://marioboseski.github.io/Expense-Tracker-Project/" target="_blank">Live link</a></li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Projects;
