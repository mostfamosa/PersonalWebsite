import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import expert from '../assets/img/Expert.png';
import practical from '../assets/img/practical.png';
import advanced from '../assets/img/advanced.png';
import colorSharp from '../assets/img/color-sharp.png';

function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>I am skilled in QA automation, having completed a 6-month intensive bootcamp where I developed robust automation solutions and interned at <b>GoTech</b>, gaining hands-on experience with <b>Playwright</b>, <b>Appium</b>, and <b>Selenium</b>. As a Java developer, I have a comprehensive understanding of Java best practices, <b>design patterns</b>, and <b>Git</b>, further strengthened by my participation in the Start@Google Bootcamp. Additionally, I specialize in software engineering, focusing on end-to-end project development using <b>Java</b>, <b>TypeScript</b>, and <b>Spring Boot</b> for web server development.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={expert} alt='Image1' />
                                    <h5>QA Automation Engineer</h5>
                                </div>
                                <div className="item">
                                    <img src={advanced} alt='Image2' />
                                    <h5>Java Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={practical} alt='Image4' />
                                    <h5>Software Enginner</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt='Image5' />
        </section>
    );
}

export default Skills;