import { Container, Row, Col, TabContainer, TabContent, TabPane } from "react-bootstrap";
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from "react-on-screen";
import 'animate.css';
import snackProj from '../assets/img/snakeProj.png';
import designProj from '../assets/img/designProj.jpg';
import reactCourse from '../assets/img/reactCourse.jpg';
import todolist from '../assets/img/todolist.png';
import calendarApp from '../assets/img/calendarApp.png';
import calendarAppServer from '../assets/img/calendarAppServer.jpg';
import chatApp from '../assets/img/chatApp.png';
import chatAppServer from '../assets/img/chatappServer.jpg';
import crud from '../assets/img/crud.jpg';
import google from '../assets/img/google.jpg';
import automation from '../assets/img/qaAutomation.png';
import selenium from '../assets/img/selenium.jpg';
import cucumber from '../assets/img/cucumber.png';
import cucumberfinal from '../assets/img/cucumberfinal.jpg';
import appium from '../assets/img/appium.jpeg';
import playwright from '../assets/img/playwright.png';
import terminalx from '../assets/img/terminalx.png';

function Projects() {

    const myQaBootcampProjects = [
        {
            title: "Playwright Final Project",
            description: "Playwright Final Project For TerminalX WebSite (Team Work) We Got 97/100 The TOP Score In Class",
            imgUrl: terminalx,
            herf:"https://github.com/mostfamosa/TerminalX-Playwright-Final-Project",
        },
        {
            title: "Playwright",
            description: "Playwright Execrise's And Projects",
            imgUrl: playwright,
            herf:"https://github.com/mostfamosa/Playwright",
        },
        {
            title: "Appium",
            description: "Appium Execrise's And Project ",
            imgUrl: appium,
            herf:"https://github.com/mostfamosa/Appium",
        },
        {
            title: "Selenium & Cucumber Final Project",
            description: "Selenium And Cucumber Project For RamiLevi WebSite (Team Work) We Got 91/100 The TOP Score In Class",
            imgUrl: cucumberfinal,
            herf:"https://github.com/mostfamosa/Selenium-Cucumber-Final-Project",
        },
        {
            title: "Selenium & Cucumber",
            description: "Selenium And Cucumber Exercise's And Summary Project",
            imgUrl: cucumber,
            herf:"https://github.com/mostfamosa/Selenium-Cucumber",
        },
        {
            title: "Selenium",
            description: "Java, WebDriver, Exercise's And Summary Project",
            imgUrl: selenium,
            herf:"https://github.com/mostfamosa/Selenium-Intro",
        },
        {
            title: "QA Automation Bootcamp Exercise's",
            description: "The First 5 Weeks Of The Bootcamp",
            imgUrl: automation,
            herf:"https://github.com/mostfamosa/Automation-Bootcamp",
        },
    ];

    const myprojects = [
        {
            title: "Snack Game",
            description: "Designed & Developed by Java",
            imgUrl: snackProj,
            herf:"https://github.com/mostfamosa/snake-game-java",
        },
        {
            title: "User Data Manipulation",
            description: "Designed by Spring Boot Structure & Developed by Java Maven, Spring Boot",
            imgUrl: projImg2,
            herf:"https://github.com/mostfamosa/UserExe",
        },
        {
            title: "Course In React.js",
            description: "Design & Development of React.Js",
            imgUrl: reactCourse,
            herf:"https://github.com/mostfamosa/zeroToMastery",
        },
        {
            title: "Great Design",
            description: "Design & Development of React.js",
            imgUrl: designProj,
            herf:"https://github.com/mostfamosa/React-App",
        },
        {
            title: "Business Startup - final project",
            description: "Front-End : React.js, Back-End: Python",
            imgUrl: projImg3,
            herf:"https://github.com/mostfamosa/final-proj",
        },
        {
            title: "To Do List",
            description: "Designed & Developed in React.js",
            imgUrl: todolist,
            herf:"https://github.com/mostfamosa/to-do-list",
        },
    ];


    const myjavaprojects = [
        {
            title: "Calendar App - Client",
            description: "Designed & Developed by Node.js",
            imgUrl: calendarApp,
            herf:"https://github.com/mostfamosa/calendar-client",
        },
        {
            title: "Calendar App - Server",
            description: "Designed by Spring Boot Structure & Developed by Java Maven, Spring Boot",
            imgUrl: calendarAppServer,
            herf:"https://github.com/mostfamosa/calendar-server",
        },
        {
            title: "Chat App - Client",
            description: "Designed & Developed by Node.js",
            imgUrl: chatApp,
            herf:"https://github.com/fadiad/ChatApp-Client",

        },
        {
            title: "Chat App - Server",
            description: "Designed by Spring Boot Structure & Developed by Java Maven, Spring Boot",
            imgUrl: chatAppServer,
            herf:"https://github.com/fadiad/ChatApp-Server",

        },
        {
            title: "CRUD in MySQL & Java Spring Boot ",
            description: "Designed by Spring Boot Structure & Developed by Java Maven, Spring Boot",
            imgUrl: crud,
            herf:"https://github.com/mostfamosa/SpringBootExe",

        },
        {
            title: "Start@Google",
            description: "Here You Can Find Everything We Did In Google's Course.",
            imgUrl: google,
            herf:"https://github.com/mostfamosa/StartAtGoogle",

        },
    ];



    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Here's Some Of The Projects That I Worked On</p>
                                </div>
                            }
                        </TrackVisibility>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item >
                                    <Nav.Link eventKey="first">React.js & Node.js</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link eventKey="second">Java Spring Boot</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link eventKey="third">QA Automation Bootcamp</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent>
                                <TabPane eventKey="first">
                                Projects Based On College & Additional Courses.
                                <br/><br/><br/><br/>
                                    <Row>
                                        {
                                            myprojects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        projectTitle={project.title}
                                                        projectDesc={project.description}
                                                        projectImg={project.imgUrl}
                                                        projectUrl = {project.herf}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="second">Projects Based On A Course Of Java Developer By Google.
                                <br/><br/><br/><br/>
                                    <Row>
                                        {
                                            myjavaprojects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        projectTitle={project.title}
                                                        projectDesc={project.description}
                                                        projectImg={project.imgUrl}
                                                        projectUrl = {project.herf}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="third">Projects Based On QA Automation Engineer Bootcamp By Atech
                                <br/><br/><br/><br/>
                                    <Row>
                                        {
                                            myQaBootcampProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        projectTitle={project.title}
                                                        projectDesc={project.description}
                                                        projectImg={project.imgUrl}
                                                        projectUrl = {project.herf}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </TabContainer>

                    </Col>
                </Row>
            </Container>
            <img alt="bg-proj" className="background-image-right" src={colorSharp2} />
        </section>

    );
}


export default Projects;