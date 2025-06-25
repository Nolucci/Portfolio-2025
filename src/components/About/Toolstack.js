import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos,
    SiGithub,
    SiGitlab,
    SiDocker,
    SiKubernetes,
    SiJira,
    SiTrello,
    SiFigma,
    SiWindows,
    SiUbuntu,
    SiNpm,
    SiYarn
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiUbuntu />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGitlab />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTrello />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFigma />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNpm />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiYarn />
            </Col>
        </Row>
    );
}

export default Toolstack;
