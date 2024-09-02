import './App.css'
import { FaGit, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
    </>
  )
}


function About() {
  return (
    <div className="about-section">

      <div className="title">
        <h1>hey, I'm Farhaan</h1>
      </div>

      <div className="contact">
        <h1>Connect with me!</h1>

        <div className="icons">
          <a className="mail-icon" href="mailto:sayedfarhaanrafi@gmail.com" target="__blank">
            <FaEnvelope />
          </a>

          <a className="linkedin-icon" href="https://www.linkedin.com/in/sayed-farhaan/" target="__blank">
            <FaLinkedin />
          </a>

          <a className="github-icon" href="https://github.com/sFRHN" target="__blank">
            <FaGithub />
          </a>
        </div>
        
      </div>

    </div>
  )
}


function Experience() {
  return(
    <div className="experience">

      <h1>Experience</h1>

      <div className="experience-section">

        <div className="experience-item">
          <h2>Junior Developer Intern</h2>
          <h4>Interface Technologies Pvt Ltd | May 2023 - August 2023</h4>
          <p>
            As a Junior Developer Intern at Interface Technologies,
            I contributed to web and mobile app development, collaborated 
            on projects, and assisted in testing and maintaining applications.
          </p>
        </div>

        <div className="experience-item">
          <h2>Information Technology Support</h2>
          <h4>Punjab National Bank | June 2022 - August 2022</h4>
          <p>
          Assisted in setting up and configuring office computers, 
          managed existing systems for optimal performance, and provided 
          IT support by troubleshooting and resolving technical issues.
          </p>
        </div>

      </div>

    </div>
  )
}


function Projects() {
  return(
    <div className="projects">

      <h1>Projects</h1>

      <div className="projects-section">

        <div className="project-item">
          <h2><a href="https://github.com/sFRHN" target="__blank">Controller Tester</a></h2>
          <p>
            Developed a Python application using Pygame and PyQt 
            to test the functionality of game controllers, 
            featuring a user-friendly GUI for easy interaction 
            and real-time feedback
          </p>
          <ul>
            <li>Python</li>
            <li>Pygame</li>
            <li>PyQt</li>
          </ul>
        </div>

        <div className="project-item">
          <h2><a href="https://github.com/sFRHN/NextGame" target="__blank">NextGame</a></h2>
          <p>
            A web application that helps users decide what to play next 
            by presenting a random game from their Steam library based 
            on their profile URL.
          </p>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Steam API</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className="project-item">
          <h2>Personal Portfolio</h2>
          <p>
            The page that you are on!
            I built this to showcase my experience and projects.
            Building this helped me get familiar with the React framework.
          </p>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

      </div>

    </div>

  )
}

export default App
