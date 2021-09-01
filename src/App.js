import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <section>

        <nav>

          <a href="" className="logo">Portfolio</a>

          <ul>
            <li><a href="#projects">My Projects</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>

        <div className="text-container">
          <p>Hello,</p>
          <p>I'm Tchaiwanda</p>
          <p>I am a Software Developer</p>
          <button className="projects-bttn" role="My Projects">Resume</button>
          <button className="about-me" role="About Me">LinkedIn</button>
          <a
            href="https://www.linkedin.com/in/tchaiwanda-chambers-0819ab208/"
            className="button"
          >LinkedIn</a
          >
          <a href="https://my.indeed.com/p/tchaiwandac-bcnv4go" className="button"
          >Resume</a
          >
          <a href="https://github.com/TMC-glitch" className="button">Github</a>
        </div>
      </section>

      <div className="about-container">

        <img src="./Images/me2.jpg" />


        <div id="about" className="about-text">
          <p>About Tchaiwanda</p>
          <p>Software Developer</p>
          <p>
            My name is Tchaiwanda Chambers. I am from New Haven, CT. I am a Uconn
            Coding Bootcamp student. This is the start to my professional
            portfolio. I am a 22 Year old Software Developer in the making,
            seeking career growing opportunities. I love sports, gaming and
            spending quality time with loved ones. I am also currently in pursuit
            of my Bachelors degree in Computer Information Systems at Post
            University.
        </p>
          <p></p>
        </div>
      </div>

      <div id="projects" className="box-container">

        <div className="box-1">
          <h2>Javascript Coding Quiz</h2>
          <img className="project-1" src="./Images/quizshot.png" />

          <a href="https://tmc-glitch.github.io/Coding-Quiz/">
            Deployed Application
        </a>

          <a href="https://github.com/TMC-glitch/Coding-Quiz"> Source Code </a>
        </div>
        <div className="box-1">
          <h2>Random Password Generator</h2>
          <img className="project-1" src="./Images/pwdgeneratorshot.png" />

          <a href="https://tmc-glitch.github.io/Javascript-HW-wk3/">
            Deployed Application
        </a>

          <a href="https://github.com/TMC-glitch/Javascript-HW-wk3">
            Source Code
        </a>
        </div>
        <div className="box-1">
          <h2>Random Recipe Generator</h2>
          <img className="project-1" src="./Images/recipegeneratorshot.png" />

          <a href="https://tmc-glitch.github.io/RandomRecipeGenerator/">
            Deployed Application
        </a>

          <a href="https://github.com/TMC-glitch/RandomRecipeGenerator"> Source Code </a>
        </div>
      </div>

      <div id="projects" className="box-container">
        <div className="box-2">
          <h2>Day Planner</h2>
          <img className="project-1" src="./Images/dayplanner.png" />

          <a href="https://tmc-glitch.github.io/Day-Planner/">
            Deployed Application
        </a>

          <a href="https://github.com/TMC-glitch/Day-Planner"> Source Code </a>
        </div><div className="box-2">
          <h2>Weather Dashboard</h2>
          <img className="project-1" src="./Images/weather.png" />

          <a href="https://tmc-glitch.github.io/WeatherDashboard/">
            Deployed Application
        </a>

          <a href="https://github.com/TMC-glitch/WeatherDashboard"> Source Code </a>
        </div><div className="box-2">
          <h2>READme Generator</h2>
          <img className="project-1" src="./Images/readME.png" />

          <a href="https://drive.google.com/file/d/189dyXZqi66tLJQ_DNewlci8egzWBeCxy/view">
            Video Walkthrough
        </a>

          <a href="https://github.com/TMC-glitch/READMEGenerator"> Source Code </a>
        </div>
      </div>


      <div id="contact" className="contact-me">
        <p></p>
        <h2>
          <p>
            <a href="mailto:tchaiwanda.chambers@gmail.com"
            >Contact Tchaiwanda: Click Here To Send me an Email</a
            >
          </p>
        </h2>
      </div>

      <footer>

        <p className="copyright">Copyright 2021 &copy;</p>
      </footer>
    </div>
  );
}

export default App;
