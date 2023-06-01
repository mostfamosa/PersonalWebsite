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



function Projects() {

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
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            }
                        </TrackVisibility>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item >
                                    <Nav.Link eventKey="first">React.js</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link eventKey="second">Java Spring Boot</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link eventKey="third">Comming Soon!</Nav.Link>
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
                                <TabPane eventKey="third">Projects In a Working Progress . . .</TabPane>
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