import React, { Component } from "react";
import "./App.css";
import HumanSvg from "./components/HumanSvg";

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
      listCount: 0
    };
  }
  componentDidMount() {
    let list = document.querySelectorAll(".skills-animation");
    let listCount = 0;
    if (listCount > 6) listCount = 0;

    console.log(list);
    setInterval(() => {
      list[this.state.listCount].classList.add("activate");
      setTimeout(() => {
        list[this.state.listCount].classList.remove("activate");
        let listCountAdder = this.state.listCount;
        listCountAdder++;
        if (listCountAdder > 6) listCountAdder = 0;
        this.setState({
          listCount: listCountAdder
        });
      }, 500);
    }, 1000);
    //  },8000);
  }
  showGraphics = ev => {
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
      aceText: "Watch Video"
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
          iosfinaltext: original
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
          aceText: orgnal
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
          showAntotechwireframestext: origina
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
          uiux: !this.state.uiux
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
          cheopainText: origi
        });
        break;
      default:
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mobile Application Developer</h1>
          <h5>Made with ReactJS</h5>
          <div className="objective">
            <h4>Objective</h4>
            <p>
              To work in a company where there is constant learning and
              collaboration that values innovation, creativity and quality.
            </p>
          </div>
        </header>
        <div className="doc">
          <div className="left-col">
            <div className="name">
              <h1>CESAR</h1>
              <h1>GUERRERO</h1>
              <h1>GARCIA</h1>
            </div>
            <div className="contact">
              <img alt="mail" src={require("./assets/mail.svg")} />
              <a href="mailto:mr.cesar.guerrero@gmail.com">
                mr.cesar.guerrero@gmail.com
              </a>
              <img alt="mail" src={require("./assets/tel.svg")} />
              <a href="tel:+14389790112">(438)979-0112</a>
              <img alt="mail" src={require("./assets/linkedin.svg")} />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/devndesign/"
              >
                https://www.linkedin.com/in/cesar-ggarcia
              </a>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              <ul>
                <li className="skills-animation">
                  Innovative problem solving skills.
                </li>
                <li className="skills-animation">
                  Strong social and interpersonal skills.
                </li>
                <li className="skills-animation">Goal oriented.</li>
                <li className="skills-animation">
                  Leadership skills and initiative.
                </li>
                <li className="skills-animation">
                  Attentive to detail and quality.
                </li>
                <li className="skills-animation">
                  Ability to work with little supervision.
                </li>
                <li className="skills-animation">
                  Strong collaboration skills.
                </li>
              </ul>
            </div>
          </div>
          <div className="right-col">
            <div className="experience">
              <div className="exp">
                <h2>Experience</h2>
              </div>
              <h3>SOFTWARE APPLICATIONS DEVELOPMENT - MITEL</h3>
              <i>April 2019 - Present</i>
              <p>
                Agile development of cloud based mobile applications with
                Angular JS, writing E2E test and providing input on UI/UX
                design.
              </p>
              <h3>
                PROGRAM ASSISTANT/MOBILE APPLICATION DESIGN &amp; DEVELOPMENT -
                ALGONQUIN COLLEGE
              </h3>
              <i>January 2019 - April 2019</i>
              <p>
                Help students grasp the concepts of vanilla JavaScript, NodeJs
                and Object Oriented languages as well as hosting open labs for
                first and second semester students to help them with assignments
                and code debugging.
              </p>
              <h3>
                IBM-SLIDE INTERN/ SOCIAL INNOVATION LAB - ALGONQUIN COLLEGE
              </h3>
              <i>May 2019 - April 2019</i>
              <p>
                Developed SLiDE, a brand new initiative at Algonquin College
                with an interdisciplinary team of students.As a team we
                developed SLiDS's website using HTML, CSS, and JavaScript - I
                was personally in charge of the JavaScript development. Showed
                initiative and collaboration in every project developed by the
                SLiDE team, which focuses on providing digital technology for
                socially conscious organizations. Furthermore, I took a
                leadership role in the team and often organized and delegated
                tasks to my team mates in order to work efficiently. Some of the
                organizations and projects undertaken at SLiDE include: A
                Website using HTML,CSS,JavaScript for BottleWorks and a Web App
                built in React JS for CHEO.{" "}
                <a href="#col-left-portfolio">Click here to see demos</a>
              </p>
            </div>
            <div className="experience-h1-ed experience-h1 marg">
              <h2>MILESTONE PROJECTS</h2>
            </div>
            <div className="education">
              <h3>REACT NATIVE APP FOR CBSA</h3>
              <p className="miletone-left-para-600">
                Advanced Conveyance Examination (ACE) App for Canadian Boarder
                Services Agency (CBSA).
              </p>
              <p className="miletone-left-para">
                The ACE app is currently being developed by myself and a team of
                4 classmates as part of our final project for the Mobile
                Application Design &amp; Development program. It is designed to
                assist boarder officers at international ports find illegal
                contraband hidden inside of vehicles.
              </p>
              <p className="miletone-left-para">
                My role within the app is development lead. I took an active
                role in developing the back-end API for the app with NodeJs,
                Express and MongoDB. Also, contributed largely on the front-end,
                as well as, integration of the front and back end.
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
              <h3>REACT JS WEB APP FOR CHEO</h3>
              <p className="miletone-left-para-600">
                Juvenile Idiopathic Arthritis (JIA) OptionMap web app for
                Children's Hospital of Eastern Ontario (CHEO).
              </p>
              <p className="miletone-left-para">
                I am currently doing all the development for the JIA OptionMap
                as part of my work at the social innovation lab. The app is
                designed to help youth with idiopathic arthritis find
                alternative treatments to manage their pain.
              </p>
              <p className="miletone-left-para">
                As the sole developer I designed the algorithm that allows the
                app to show treatments based on the user's answers. I also
                followed the design provided by the client and created the
                interactive illustrations on the app with Adobe Illustrator.{" "}
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
              <h3>MOBILE APPLICATION DESIGN &amp; DEVELOPMENT</h3>
              <p className="miletone-left-para-600">
                Algonquin College of Applied Arts and Technology
              </p>
              <p>Expected Graduate: Spring 2019.</p>
              <ul className="education-ul">
                <li>
                  Dean's Honours List: Fall 2017, Winter 2018 and Fall 2018
                </li>
                <li>GPA: 3.9/4</li>
              </ul>
              <h3>NODEJS WITH EXPRESS &amp; MONGODB COURSE</h3>
              <p className="miletone-left-para-600">Online</p>
              <ul className="education-ul">
                <li>
                  Built a working RESTful API with server-side validation.
                </li>
                <li>
                  Learned how to deploy a fully working database application.
                </li>
              </ul>
            </div>
            <div className="experience-h1 experience-h1-ed marg">
              <h2>Program-related Skills</h2>
            </div>
            <div className="Pro-rel-skills">
              <ul className="Pro-rel-skills-ul">
                <li>
                  <h3>Programming Languages</h3>
                  <p>Java, C#, C++.</p>
                </li>
                <li>
                  <h3>Operating Systems</h3>
                  <p>Windows, Linux, Mac OS.</p>
                </li>
                <li>
                  <h3>Web Based Languages, Frameworks and Libraries</h3>
                  <p>
                    {" "}
                    ReactJs, AngularJs, Express, Redux, JavaScript, NodeJs, PHP,
                    HTML5, CSS, XML, Cordova, Workbox, Mocha, Chai, Protactor,
                    JSON, Saas.
                  </p>
                </li>
                <li>
                  <h3>Native Mobile</h3>
                  <p>React Native, Swift, Kotlin.</p>
                </li>
                <li>
                  <h3>Databases</h3>
                  <p>Firebase, MySql, MongoDB.</p>
                </li>
                <li>
                  <h3>Tools &amp; IDE</h3>
                  <p>
                    Visual Studio, Eclipse Java, Git, Microsoft Office Suite,
                    Android Studio, Xcode.
                  </p>
                </li>
                <li>
                  <h3>Networking Skills</h3>
                  <p>
                    Installing configuring and troubleshooting of computers and
                    network equipment good understanding of packet tracer,
                    Wireshark, OSI &amp; TCP/IP protocol suite, routing
                    protocols, virtualization.
                  </p>
                </li>
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
              <h3>
                React JS Website <i>Development in progress</i>
              </h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/guer0157/reactAntoTechWebsite"
              >
                <i>Code: </i>https://github.com/guer0157/reactAntoTechWebsite
              </a>
              <a
                onClick={this.showGraphics}
                id="antotech"
                className="vid"
                href="#vid-antotech"
              >
                {this.state.showAntotechwireframestext}
              </a>
              {this.state.showAntotechwireframes && (
                <video id="vid-antotech" width="90%" controls autoPlay>
                  <source
                    id="antotechweb"
                    src={require("./assets/MyMovie.mp4")}
                    type="video/mp4"
                  />
                </video>
              )}
              <ul className="skills-port-ul">
                <li>
                  Implementing react, react-router-dom, reactstrap and
                  react-redux to create a website.
                </li>
                <li>
                  Coded server-side with Express to communicate with a MongoDB
                  database.
                </li>
                <li>
                  Designed UI mock-up for the website with Adove XD{" "}
                  <i>See Video</i>
                </li>
              </ul>
              <h3>IOS Passport Application</h3>
              <a
                id="ios"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/guer0157/iosFinal"
              >
                https://github.com/guer0157/iosFinal
              </a>
              <a
                href="#ios"
                onClick={this.showGraphics}
                id="ios"
                className="vid"
              >
                {this.state.iosfinaltext}
              </a>
              {this.state.iosfinal && (
                <video width="300" height="600" controls autoPlay>
                  <source
                    src={require("./assets/iosdevelopment.mov")}
                    type="video/mp4"
                  />
                </video>
              )}
              <ul className="skills-port-ul">
                <li>
                  Used Swift to develop a passport application to track trips.
                </li>
                <li>
                  Implemented URLSession and URLRequest to make calls to a JSON
                  API for data.
                </li>
              </ul>
              <h3>Bootstrap Website</h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.cerrajeriaAurrera.com"
              >
                http://www.cerrajeriaAurrera.com
              </a>
              <ul className="skills-port-ul">
                <li>
                  Developed a simple website with bootstrap for a freelance
                  client.
                </li>
                <li>
                  Completed all parts of the development from design to
                  deployment.
                </li>
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
              <h3>UI &amp; UX Design</h3>
              <p onClick={this.showGraphics} id="uiux" className="vid">
                {this.state.uiuxtext}
              </p>
              {this.state.uiux && (
                <video width="300" height="600" controls autoPlay>
                  <source src={require("./assets/uiux.mov")} type="video/mp4" />
                </video>
              )}
              <ul className="skills-port-ul">
                <li>Used Adobe XD to design an interactive visual mock-up.</li>
                <li>Followed Android UI guidelines.</li>
                <li>
                  Followed user-centric design - Research, Prototype, Design, to
                  create intutive UI
                </li>
              </ul>

              <h3>BottleWorks Website</h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://bottleworks.ca"
              >
                http://bottleworks.ca
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
