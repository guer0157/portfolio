import React, { Component } from "react";
import "./App.css";
import HumanSvg from "./components/HumanSvg";
import mail from "./assets/mail.svg";
import tel from "./assets/tel.svg";
import download from "./assets/resumedownload.svg";
class App extends Component {
  constructor() {
    super();
    this.state = {
      showAntotechwireframes: false,
      showAntotechwireframestext: "Watch Video",
      iosfinaltext: "Watch Video",
      uiuxtext: "Watch Video",
      cheopainText: "Try Demo",
      aceText: "Watch Video",
      iosfinal: false,
      uiux: false,
      cheopain: false,
      ace: false,
      listCount: 0,
    };
  }
  componentDidMount() {
    let list = document.querySelectorAll(".skills-animation");
    let listCount = 0;
    if (listCount > 6) listCount = 0;
    setInterval(() => {
      list[this.state.listCount].classList.add("activate");
      setTimeout(() => {
        list[this.state.listCount].classList.remove("activate");
        let listCountAdder = this.state.listCount;
        listCountAdder++;
        if (listCountAdder > 6) listCountAdder = 0;
        this.setState({
          listCount: listCountAdder,
        });
      }, 500);
    }, 1000);
  }
  showGraphics = (ev) => {
    this.setState({
      showAntotechwireframes: false,
      iosfinal: false,
      uiux: false,
      cheopain: false,
      ace: false,
      showAntotechwireframestext: "Watch Video",
      iosfinaltext: "Watch Video",
      uiuxtext: "Watch Video",
      cheopainText: "Try Demo",
      aceText: "Watch Video",
    });
    let show = ev.target.id;
    switch (show) {
      case "ios":
        let original = this.state.iosfinaltext;
        if (original === "Watch Video") {
          original = "Close";
        } else if (original === "Close") {
          original = "Watch Video";
        }
        this.setState({
          iosfinal: !this.state.iosfinal,
          iosfinaltext: original,
        });
        break;
      case "ace":
        let orgnal = this.state.aceText;
        if (orgnal === "Watch Video") {
          orgnal = "Close";
        } else if (orgnal === "Close") {
          orgnal = "Watch Video";
        }
        this.setState({
          ace: !this.state.ace,
          aceText: orgnal,
        });
        break;
      case "antotech":
        let origina = this.state.showAntotechwireframestext;
        if (origina === "Watch Video") {
          origina = "Close";
        } else if (origina === "Close") {
          origina = "Watch Video";
        }
        this.setState({
          showAntotechwireframes: !this.state.showAntotechwireframes,
          showAntotechwireframestext: origina,
        });
        break;
      case "uiux":
        let origin = this.state.uiuxtext;
        if (origin === "Watch Video") {
          origin = "Close";
        } else if (origin === "Close") {
          origin = "Watch Video";
        }
        this.setState({
          uiuxtext: origin,
          uiux: !this.state.uiux,
        });
        break;
      case "cheopain":
        let origi = this.state.cheopainText;
        if (origi === "Try Demo") {
          origi = "Close";
        } else if (origi === "Close") {
          origi = "Try Demo";
        }
        this.setState({
          cheopain: !this.state.cheopain,
          cheopainText: origi,
        });
        break;
      default:
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cesar Guerrero Garcia</h1>
          <h5>Senior Fullstack Developer</h5>
        </header>
        <div className="doc">
          <div className="left-col">
            <div className="contact">
              <img alt="mail" src={mail} />
              <a href="mailto:mr.cesar.guerrero@gmail.com">
                mr.cesar.guerrero@gmail.com
              </a>
              <img alt="mail" src={tel} />
              <a href="tel:+14389790112">(438)979-0112</a>
              {/* <img alt="mail" src={require("./assets/linkedin.svg")} />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/devndesign/"
              >
                https://www.linkedin.com/in/cesar-ggarcia
              </a> */}
              <img alt="mail" src={download} />
              <a href={require("./assets/CesarGuerrero_Resume.pdf")} download>
                Download resume
              </a>
            </div>
          </div>
          <div className="right-col">
            <div className="professional-summary-ul">
              <div className="exp">
                <h2>Professional Summary</h2>
              </div>
              <ul>
                <li>
                  Professional software developer offering a strong foundation
                  in application development and programming principles across
                  multiple platforms with a focus on frontend.
                </li>
                <li>
                  Experienced in object-oriented programming, test-driven
                  development, debugging, interface design.
                </li>
                <li>
                  A lifelong learner who is quick to understand and master new
                  technologies. History of working successfully in both team and
                  self-directed settings.
                </li>
                <li>
                  Ability to quickly grasp complex systems while identifying
                  opportunities for improvements and resolution of critical
                  issues.
                </li>
              </ul>
            </div>
            <div className="experience-h1 experience-h1-ed marg">
              <h2>Skills</h2>
            </div>
            <div className="Pro-rel-skills">
              <ul className="Pro-rel-skills-ul">
                <li>
                  Backend development using <strong>Node.js</strong>,{" "}
                  <strong>Python</strong>, <strong>C#</strong>,{" "}
                  <strong>MySQL</strong>, <strong>MongoDB</strong>
                </li>
                <li>
                  Web development using various front-end frameworks including{" "}
                  <strong>React</strong>, <strong>Angular</strong>,{" "}
                  <strong>Vue</strong>
                </li>
                <li>
                  <strong>Git</strong> version control
                </li>
              </ul>
            </div>
            <div className="experience">
              <div className="exp">
                <h2>Experience</h2>
              </div>
              <h3>Senior Frontend Developer – Cantactix</h3>
              <i>Oct 2022 – Present</i>
              <ul>
                <li>
                  Led the re-design of our front-end built with React, resulting
                  in a 20% reduction of our codebase.
                </li>
                <li>
                  Implemented and led the development of a component library
                  using React, Typescript, Rollup and styled-components securing
                  design consistency across multiple products.
                </li>
                <li>
                  Took a leading role in the development of code standards for
                  our code base with a focus on modularity, reducing repetition
                  in the code.
                </li>
                <li>
                  Conducted code reviews, ensuring adherence to best practices
                  and coding standards, which reduced production bugs by 40%.
                </li>
                <li>
                  Mentored junior engineers and conducted technical training
                  sessions, fostering a culture of continuous learning and
                  improvement.
                </li>
                <li>
                  Implemented robust automated testing frameworks, increasing
                  test coverage by 70% and ensuring high code quality.
                </li>
                <li>
                  Suggested and made various improvements to our UX and
                  accessibility scores based on WCAG standards.
                </li>
              </ul>
              <h3>Senior React Developer – Shoebox.md</h3>
              <i>Nov 2020 – Oct 2022</i>
              <ul>
                <li>
                  Collaborate with internal business units to understand
                  business goals & objectives.
                </li>
                <li>
                  Planning and documenting technical specifications for features
                  or system design.
                </li>
                <li>
                  Lead by example, developing efficient, high-performance
                  software, implementing frontend using React, Typescript and
                  backend using NodeJS and styled-jsx.
                </li>
                <li>
                  Conducted code reviews, ensuring only high-quality code makes
                  it to production.
                </li>
                <li>
                  Worked with the software development team and architects to
                  break down complex requirements into smaller tasks and coach
                  team members to deliver these features.
                </li>
                <li>
                  Monitored progress, identifying potential impediments and
                  bottlenecks; steering the course so commitments are held, and
                  projects remain on track. Contributes to QA efforts where
                  needed.
                </li>
                <li>
                  Estimate and calculate time allocation for each story in the
                  sprint to coordinate development efforts and ensure planning
                  is accurate.
                </li>
              </ul>
              <h3>Software applications developer - Mitel</h3>
              <i>Nov 2017 – Nov 2020</i>
              <ul>
                <li>
                  Participated in the full software development lifecycle –
                  requirements gathering, scoping, design, implementation,
                  documentation, testing, and maintenance, as my team’s scrum
                  master and individual contributor.
                </li>
                <li>
                  Write code across the full stack – UI, back-end services, and
                  data storage using Node.js & React
                </li>
                <li>
                  Collaborate with peers when designing and building new
                  features.
                </li>
                <li>
                  Provide code reviews for fellow team members, promoting
                  high-quality work, sound software methodologies and attention
                  to detail.
                </li>
                <li>
                  Worked closely with the product owner to ensure development
                  aligns with product specification and the company's long-term
                  product strategy and roadmap.
                </li>
                <li>
                  Evaluating, prototyping, and rolling out new tools and
                  technologies to improve the way we build products and help
                  projects deliver to our customers.
                </li>
                <li>
                  Integrating tools and automating their provisioning,
                  configuration, and management.
                </li>
                <li>Consumption of various cloud services on AWS.</li>
                <li>
                  Developing automated tests for the new and updated
                  functionality.
                </li>
              </ul>
            </div>
            <div className="experience-h1-ed experience-h1 marg">
              <h2>MILESTONE PROJECTS</h2>
            </div>
            <div className="education">
              <h3>React native app for CBSA</h3>
              <p className="miletone-left-para-600">
                Advanced Conveyance Examination (ACE) application for the
                Canadian Border Services Agency (CBSA).
              </p>
              <p className="miletone-left-para">
                The ACE app was developed as an MVP by myself and a team of 4.
                It is developed to assist border officers at international ports
                of entry find illegal goods hidden inside vehicles. My role
                within the team was as development lead. I took an active role
                in developing the back-end API for the app with NodeJs, Express
                and MongoDB. Also, contributed largely on the front-end using
                React Native.
              </p>
              <p className="miletone-left-para-600">Features:</p>
              <ul className="education-ul mileston">
                <li>Searching vehicles by Make/Model/Year.</li>
                <li>Finding hiding spots within that vehicle.</li>
                <li>Seeing details about a hiding spot.</li>
                <li>Adding hiding spots/vehicles.</li>
                <li>
                  Notifying boarder officers about new hiding spots added.
                </li>
              </ul>
              <h3>React JS web app for CHEO</h3>
              <p className="miletone-left-para-600">
                Juvenile Idiopathic Arthritis (JIA) option map web app for
                Children's Hospital of Eastern Ontario (CHEO).
              </p>
              <p className="miletone-left-para">
                Developed the JIA option map as part of my work at the social
                innovation lab. The app is designed to help youth with
                idiopathic arthritis find alternative treatments to manage their
                pain. As the sole developer I designed the algorithm that allows
                the app to show treatments based on the user’s answers as well
                as all the front-end development using React Js. Also I made use
                of my design and UX skills to follow the design provided by the
                client and created the interactive illustrations on the app with
                Adobe Illustrator.
              </p>
              <p className="miletone-left-para-600">Features:</p>
              <ul className="education-ul mileston">
                <li>Interactive illustration of pain points.</li>
                <li>
                  Identifying key answers to show only related treatments.
                </li>
                <li>Conditional rendering based on URL path.</li>
                <li>Saving data in local storage.</li>
              </ul>
            </div>
            <div className="experience-h1-ed experience-h1 marg">
              <h2>Education</h2>
            </div>
            <div className="education">
              <h3>Mobile application design &amp; development</h3>
              <p className="miletone-left-para-600">
                Algonquin College of Applied Arts and Technology
              </p>
              <ul className="education-ul">
                <li>
                  Dean's Honours List: Fall 2016, Winter 2017, Fall 2017 and
                  Winter 2018
                </li>
                <li>GPA: 3.9/4</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skills-port-section">
          <div className="exp">
            <h2>Skills Portfolio</h2>
          </div>
          <div className="skills-port">
            <div id="col-left-portfolio">
              <h3>AskCharly.ca</h3>
              <i>
                A latin business directory for the latin community in Ottawa.
              </i>
              <a
                href="https://askcharly.ca/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                askcharly.ca/en
              </a>
              <ul className="skills-port-ul">
                <li>Built with React, Typescrpt, NextJS</li>
                <li>Built back-end api MySQL, NodeJS</li>
                <li>
                  Microservice architecture, ChatGPT api to generate content.
                </li>
              </ul>
              <h3>React Native App for CBSA.</h3>
              <i>Hosted in private repository.</i>
              <a
                href="#ace"
                onClick={this.showGraphics}
                id="ace"
                className="vid"
              >
                {this.state.aceText}
              </a>
              {this.state.ace && (
                <video width="300" height="600" controls autoPlay>
                  <source src={require("./assets/ace.mov")} type="video/mp4" />
                </video>
              )}
              <ul className="skills-port-ul">
                <li>Built with React Native.</li>
                <li>Built back-end api with NodeJs, Express.</li>
                <li>API talks to MongoDB to store and fetch data.</li>
              </ul>
            </div>
            <div>
              <h3>React JS Web App for CHEO.</h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://socialinnovationlab.github.io/jia/"
              >
                https://socialinnovationlab.github.io/jia/
              </a>
              <a
                onClick={this.showGraphics}
                id="cheopain"
                className="vid"
                href="#vid-cheopain"
              >
                {this.state.cheopainText}
              </a>
              {this.state.cheopain && <HumanSvg />}
              <ul className="skills-port-ul">
                <li>
                  Web app built for the Childrens Hospital of Eastern Ontario
                  (CHEO).
                </li>
                <li>
                  Developed and designed the web app including the svgs with
                  React JS and Adobe Illustrator
                </li>
                <li>
                  Used svgs to interactively represent pain points{" "}
                  <i>Try demo above</i>
                </li>
              </ul>
              <h3>BottleWorks Website</h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://bottleworks.ca"
              >
                https://bottleworks.ca
              </a>
              <ul className="skills-port-ul">
                <li>Did all the JavaScript for the website.</li>
                <li>Used Google Maps API. </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
