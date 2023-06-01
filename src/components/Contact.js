import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';

function Contact() {
    const formInitDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phone: ''
    }

    const [formDetails, setFormDetails] = useState(formInitDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (catagory, e) => {
        console.log(e.target.value);
        setFormDetails({
            ...formDetails,
            [catagory]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitDetails);
        if (result.code === 200) {
            setStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>

                        <img src={contactImg} alt="Contact Us" />

                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input required type="text" value={formDetails.firstName} placeholder="First Name:" onChange={e => onFormUpdate('firstName', e)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input required type="text" value={formDetails.lastName} placeholder="Last Name:" onChange={e => onFormUpdate('lastName', e)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input required type="email" value={formDetails.email} placeholder="Email:" onChange={e => onFormUpdate('email', e)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input required type="tel" value={formDetails.phone} placeholder="Phone:" onChange={e => onFormUpdate('phone', e)} />
                                </Col>
                                <Col>
                                    <textarea required rows={6} value={formDetails.message} placeholder="Message" onChange={e => onFormUpdate('message', e)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                <Row>
                                    {
                                        status.message &&
                                        <Col>
                                            <p id="statusMsg" className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );

}

export default Contact;