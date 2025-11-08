import "./about.css";

const About = () => {

  return (
    <section className="about-section">
      <section className="container">

        <div className="about-div-class">
          <h2>About me </h2>

          <div className="about-info">
            <img src="src/assets/myFoto.jpg" alt="formal-picture"></img>

            <div className="about-info-paragraphs">
              <p>Hi! I'm Mario Boseski, a Front End Web Developer with a huge passion
                for coding. With over two years of experience i learnt <strong>HTML</strong>,
                <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Git&GitHub</strong>
                version control and workflow.
              </p>

              <p>As someone who loves new challenges and problem-solving, programming is just perfect.
                I love when i dive into new technologies and start learning them from zero.
              </p>

              <p>I'm constantly motivated. constantly motivated to work,
                learn and try out new things all the time.
              </p>
            </div>
          </div>


          <div className="about-me-content">

            <section className="skill-logo">
              <img src="src/assets/javascript-logo.svg" alt="javascript-logo"></img>
              <p>JavaScript</p>
            </section>

            <section className="skill-logo">
              <img src="src/assets/html-logo.svg" alt="html-logo"></img>
              <p>HTML</p>
            </section>

            <section className="skill-logo">
              <img src="src/assets/css-logo.svg" alt="css-logo"></img>
              <p>CSS</p>
            </section>

            <section className="skill-logo">
              <img src="src/assets/git-logo.svg" alt="git-logo"></img>
              <p>Git</p>
            </section>

            <section className="skill-logo">
              <img src="src/assets/github-logo.svg" alt="github-logo"></img>
              <p>GitHub</p>
            </section>

          </div>
        </div>

      </section>
    </section>
  );
}

export default About;