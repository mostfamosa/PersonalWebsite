import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg'
import { useState, useEffect } from "react";
import 'animate.css';

function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleted, setIsDeleted] = useState(false);
    const toRotate = ["Software Engineer", "Java Developer", "QA Automation Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
        // eslint-disable-next-line
    }, [text])

    const handleClickToConnect = () => {
        const element = document.getElementById('connect');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleted ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleted) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleted && updatedText === fullText) {
            setIsDeleted(true);
            setDelta(period);
        } else if (isDeleted && updatedText === '') {
            setIsDeleted(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome To My WebSite</span>
                        <h1>{`I'm Mostafa Mossa a `}<span className="wrap">{text}</span></h1>
                        <p>B.Sc. Software Engineering graduate and Java developer Start@Google Bootcamp alumnus, with a comprehensive background in Java best practices, design patterns, Git, and web development.<br></br>Completed an intensive 6-month QA Automation Bootcamp, showcasing expertise in developing automation solutions. Notably, served as a QA Automation Engineer intern at GoTech, contributing to projects involving Playwright, Appium, and Selenium. Specializing in end-to-end project development for diverse clients, utilizing Java, TypeScript, and Spring Boot for web servers. Currently seeking a role as a QA Automation Engineer or Java Developer or Software Engineer, leveraging my skills and experience to contribute effectively to dynamic teams.</p>
                        <button onClick={handleClickToConnect}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    );

}

export default Banner;