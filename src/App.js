import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      showAntotechwireframes:false,
      iosfinal:false,
      uiux:false
    }
  }
  showGraphics=(ev)=>{
    this.setState({
      showAntotechwireframes:false,
      iosfinal:false,
      uiux:false
    })
    let show=ev.target.id
    switch(show){
      case "ios":
    this.setState({
      iosfinal:!this.state.iosfinal
    })
    break;
    case "antotech":
    this.setState({
      showAntotechwireframes:!this.state.showAntotechwireframes
    })
    break;
    case "uiux":
    this.setState({
      uiux:!this.state.uiux
    })
    break;
    default:
    this.setState({
      showAntotechwireframes:false,
      iosfinal:false
    })

  }

    console.log(this.state.showAntotechwireframes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mobile Application Developer</h1>
          <h5>made with ReactJS</h5>
          <div className="objective">
              <h6>Objective</h6>
              <p>To work in a company where there is constant learning and collaboration that values innovation, creativity and quality.</p>
            </div>
        </header>
        <div className="doc">
          <div className="left-col">
            <div className="name"><h1>CESAR</h1><h1>GUERRERO</h1><h1>GARCIA</h1></div>
            <div className="contact">
              <img alt="mail" src={require("./assets/mail.png")} />
              <a href="mailto:mr.cesar.guerrero@gmail.com">mr.cesar.guerrero@gmail.com</a>
              <img alt="mail" src={require('./assets/phone.png')} />
              <a href="tel:+14389790112">(438)979-0112</a>
              <img alt="mail" src={require('./assets/linkedin.png')} />
              <a href="https://www.linkedin.com/in/devndesign/">https://www.linkedin.com/in/devndesign/</a>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              <ul>
                <li>Strong social and interpersonal skills.</li>
                <li>Goal oriented.</li>
                <li>Leadership skills and initiative.</li>
                <li>Attentive to detail and quality.</li>
                <li>Ability to work with little supervision.</li>
                <li>Strong collaboration skills.</li>
              </ul>
            </div>
          </div>
          <div className="right-col">
            <div className="experience">
            <div className="experience-h1 exp1">
              <h2>Experience</h2>
            </div>
              <h3>PROGRAM ASSISTANT/MOBILE APPLICATION DESIGN &amp; DEVELOPMENT - ALGONQUIN COLLEGE</h3>
              <i>January 2019 - Present</i>
              <p>Help students grasp the concepts of vanilla JavaScript, NodeJs and Object Oriented languages as well as hosting open labs for first and second semester students to help them with assignments and code debugging.</p>
              <h3>IBM-SLIDE INTERN/ SOCIAL INNOVATION LAB - ALGONQUIN COLLEGE</h3>
              <i>May 2019 - Present</i>
              <p>Developed SLiDE, a brand new initiative at Algonquin College with an interdisciplinary team of students. Showed initiative and collaboration in every project developed by the SLiDE team, which focuses on providing digital technology for socially conscious organizations. Furthermore, I took a leadership role in the team and often organized and delegated tasks to my team mates in order to work efficiently.
            </p>
            </div>
            <div className="experience-h1 marg">
              <h2>Education</h2>
              </div>
          <div className="education">
              <h3>MOBILE APPLICATION DESING &amp; DEVELOPMENT</h3>
              <p>Algonquin College of Applied Arts and Technology</p>
              <p>Expected Graduate: Spring 2019.</p>
              <ul className="education-ul">
                <li>Dean's Honours List: Fall 2017, Winter 2018 and Fall 2018</li>
                <li>GPA: 3.9/4</li>
              </ul>
              <h3>NODEJS WITH EXPRESS &amp; MONGODB COURSE</h3>
              <p>Online</p>
              <ul className="education-ul">
                <li>Built a working RESTful API with server-side validation.</li>
                <li>Learned how to deploy a fully working database application.</li>
              </ul>
            </div>
            <div className="experience-h1 marg">
              <h2>Program-related Skills</h2>
              </div>
            <div className="Pro-rel-skills">
              <ul className="Pro-rel-skills-ul">
                <li><h3>Programming Languages</h3><p>Java, C#, C++.</p></li>
                <li><h3>Operating Systems</h3><p>Windows, Linux, Mac OS.</p></li>
                <li><h3>Web Based Languages, Frameworks and Libraries</h3><p>JavaScript, NodeJs, PHP, HTML5, CSS, XML, ReactJs, Cordova,
    Express, Redux, Workbox, Mocha, Chai, JSON, Saas.
              </p></li>
                <li><h3>Native Mobile</h3><p>React Native, Swift, Kotlin.</p></li>
                <li><h3>Databases</h3><p>Firebase, MySql, MongoDB.</p></li>
                <li><h3>Tools &amp; IDE</h3><p>Visual Studio, Eclipse Java, Git, Microsoft Office Suite, Android Studio, Xcode.</p></li>
                <li><h3>Networking Skills</h3><p>Installing configuring and troubleshooting of computers and network equipment
    good understanding of packet tracer, Wireshark, OSI &amp; TCP/IP protocol suite, routing protocols, virtualization.</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skills-port-section">
        <div className="experience-h1 marg">
              <h2>Skills Portfolio</h2>
        </div>
        <div className="skills-port">
        <div className="">
              <h3>React JS Website (Development in progress)</h3>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/guer0157/reactAntoTechWebsite"><i>Code: </i>https://github.com/guer0157/reactAntoTechWebsite</a>
              <a onClick={this.showGraphics} id="antotech" className="vid" href="#vid-antotech">watch video</a>
              {this.state.showAntotechwireframes&&
              <video id="vid-antotech" width="90%" height="440" controls autoPlay>
              <source src={require("./assets/MyMovie.mp4")} type="video/mp4"/>
              </video>
              }
              <ul  className="skills-port-ul">
                <li>Implementing react, react-routed-dom, reactstrap and react-redux to create a website.</li>
                <li>Coded server-side to communicate with a mongoDB database.</li>
                <li>Designed UI for the website with Adove XD <i>See Video</i></li>
              </ul>
              <h3>Bootstrap Website</h3>
              <a target="_blank" rel="noopener noreferrer" href="http://www.cerrajeriaAurrera.com">http://www.cerrajeriaAurrera.com</a>
              <ul className="skills-port-ul">
                <li>Developed a simple website with bootstrap for a freelance client.</li>
                <li>Completed all parts of the development from design to deployment.</li>
              </ul>
              <h3>BottleWorks Website</h3>
              <a target="_blank" rel="noopener noreferrer" href="http://bottleworks.ca">http://bottleworks.ca</a>
              <ul className="skills-port-ul">
                <li>Did all the JavaScript for the website.</li>
                <li>Used Google Maps API. </li>
              </ul>
              </div>
              <div>
              <h3>IOS Passport Application</h3>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/guer0157/iosFinal">https://github.com/guer0157/iosFinal</a>
              <a href="#uiux" onClick={this.showGraphics} id="ios" className="vid">watch video</a>
             
              {this.state.iosfinal&&
              <video width="300" height="600" controls autoPlay>
              <source src={require("./assets/iosdevelopment.mov")} type="video/mp4"/>
              </video>
              }
               <ul className="skills-port-ul">
                <li>Used swift to develop a passport application.</li>
                <li>Implemented URLSession and URLRequest to make calls to a JSON API for data.</li>
              </ul>
              <h3>UI &amp; UX Design</h3>
              <p onClick={this.showGraphics} id="uiux" className="vid">watch video</p>
              <ul className="skills-port-ul">
                <li>Used swift to develop a passport application.</li>
                <li>Implemented URLSession and URLRequest to make calls to a JSON API for data.</li>
              </ul>
              {this.state.uiux&&
              <video width="300" height="600" controls autoPlay>
              <source src={require("./assets/uiux.mov")} type="video/mp4"/>
              </video>
              }
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
