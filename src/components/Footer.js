import { Col, Container, Row } from "react-bootstrap";
import carrer2 from '../assets/img/carrer2.png'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function Footer() {
    return (

        <footer className="footer">

            <Container>
                <Row className="align-text-center">
                    <Col sm={5} className="text-center text-sm-end">
                        <div className="career2">
                            <img src={carrer2} alt="logo" id="carer2" />
                        </div>
                    </Col>
                    <Col sm={7} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/mostafa-mosa-0a763422b/'><img src={navIcon1} alt='linkedin'></img></a>
                            <a href='https://www.facebook.com/tota.mossa'><img src={navIcon2} alt='facebook'></img></a>
                            <a href='http://www.instagram.com/mostfa_mossa'><img src={navIcon3} alt='instgram'></img></a>

                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;