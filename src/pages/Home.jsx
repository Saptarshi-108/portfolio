import React, { useEffect } from "react";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import Typewriter from "typewriter-effect"; // Updated
import "./Home.css";
import Projects from "../components/Projects";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeLines = document.querySelectorAll(".fade-line");
    fadeLines.forEach((el) => observer.observe(el));

    return () => {
      fadeLines.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-container" id="home">
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/starry_night.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="intro-image-wrapper">
        <div className="home-intro">
          <span id="me">
            Hi, <br />I am{" "}
            <strong>
              <font color="#ede435">Saptarshi Mandal</font>
            </strong>
            .
          </span>

          <div className="typewriter-text">
            <Typewriter
              options={{
                strings: [
                  "I am an aspiring Full Stack Web Developer.",
                  "I am a Leetcode enthusiast.",
                  "I am a Software Engineer.",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 30,
              }}
            />
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Saptarshi-108"
              target="_blank"
              rel="noopener noreferrer"
              id="github"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/saptarshi-mandal-90a29a28a"
              target="_blank"
              rel="noopener noreferrer"
              id="linkedin"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/LoneWolf_108/"
              target="_blank"
              rel="noopener noreferrer"
              id="leetcode"
            >
              <SiLeetcode />
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              My Resume
            </a>
          </div>
        </div>

        <div className="my-img">
          <img src="/my_phtoto-removebg-preview1.png" alt="Myself" />
        </div>
      </div>

      <div className="aboutme" id="aboutme">
        <h1>About Me</h1>
        <p align="justify">
          <span className="fade-line">
            I am a passionate and determined Full Stack Web Developer.
            <br />
          </span>
          <span className="fade-line">
            I enjoy bringing ideas to life in the browser using clean, efficient
            code.
          </span>
          <span className="fade-line">
            My expertise lies in building scalable, responsive, and dynamic web
            applications.
            <br />
          </span>
          <span className="fade-line">
            With hands-on experience in technologies like React, Node.js,
            Express and MongoDB.
          </span><br/>
          <span className="fade-line">
            I aim to develop solutions that solve real-world problems.
            <br />
          </span>
          <span className="fade-line">
            I also actively practice problem-solving on platforms like Leetcode
          </span>
          <span className="fade-line">
            and continuously strive to improve both frontend and backend skills.
            <br />
          </span>
        </p>
      </div>

      <div id="skill-items" className="skills">
        <h1 className="tech-title">Tech Stack</h1>
        <h2 className="technologies">Languages</h2>
        <p className="tech-icons">
          <img src="/logos/python.svg" alt="Python" title="Python" />
          <img src="/logos/html5.svg" alt="HTML5" title="HTML5" />
          <img src="/logos/css3.svg" alt="CSS3" title="CSS3" />
          <img
            src="/logos/javascript.svg"
            alt="JavaScript"
            title="JavaScript"
          />
          <img src="/logos/sql.svg" alt="SQL" title="SQL" />
          <img src="/logos/mongodb.svg" alt="MongoDB" title="MongoDB" />
        </p>
        <h2 className="technologies">Technologies/Frameworks</h2>
        <p className="tech-icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <img src="/logos/tailwindcss.svg" alt="Tailwind CSS" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
            alt="Django"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />
          <img src="/logos/aws.svg" alt="AWS" title="AWS" />
        </p>
      </div>

      <div id="projects">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
