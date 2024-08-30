import './App.css'

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

      <div className="about-left">
        <h1>Who I Am</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Laudantium ratione adipisci quia maxime ipsam tempora aperiam 
          iusto inventore fuga natus pariatur consequuntur tenetur 
          excepturi numquam mollitia porro, modi amet magnam.
        </p>
      </div>

      <div className="about-right">
        <h1>About Me</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Earum quam aperiam mollitia. Dolores inventore non provident.
          Officiis aliquam dicta consectetur aut corrupti voluptate, 
          assumenda id? Distinctio alias quae ratione quisquam.
        </p>
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
          <h2>Position</h2>
          <h4>Timeframe</h4>
          <h4>Location</h4>
          <p>What I did at the job</p>
        </div>

        <div className="experience-item">
          <h2>Position 2</h2>
          <h4>Timeframe</h4>
          <h4>Location</h4>
          <p>What I did at the job</p>
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
          <h2>Project</h2>
          <p>Description of the project</p>
          <ul>
            <li>Tech 1</li>
            <li>Tech 2</li>
          </ul>
        </div>

        <div className="project-item">
          <h2>Project 2</h2>
          <p>Description of the project</p>
          <ul>
            <li>Tech 1</li>
            <li>Tech 2</li>
          </ul>
        </div>

      </div>

    </div>

  )
}

export default App
