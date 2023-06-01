import { Col } from "react-bootstrap";


function ProjectCard(props) {

    return (
        <Col sm={6} md={4}>
            <a href={props.projectUrl}>
                <div className="proj-imgbx">
                    <img alt="projImg" className="img" src={props.projectImg} />
                    <div className="proj-txtx">
                        <h4>{props.projectTitle}</h4>
                        <span>{props.projectDesc}</span><br></br>
                    </div>
                </div>
            </a>
        </Col>
    )

}

export default ProjectCard;