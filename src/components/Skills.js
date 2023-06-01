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
                            <p>I am a skilled software engineer with a strong foundation in problem-solving and innovation. With a Bachelor's degree in Software Engineering from Ort Braude College, I possess expertise in various programming languages, data structures, algorithms, and software design principles. I have gained practical experience through internships and real-world projects, further enhancing my technical abilities. Beyond coding, I excel in teamwork and effective communication, understanding the value of collaboration and clear exchange of ideas. I am committed to continuous learning, staying up-to-date with emerging technologies to develop innovative solutions that have a positive impact on society.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={expert} alt='Image1' />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={advanced} alt='Image2' />
                                    <h5>Back-End Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={practical} alt='Image3' />
                                    <h5>Front-End Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={expert} alt='Image4' />
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