import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import ndi from "../../../Assets/Projects/ndi.png"; // adapte selon ton projet
import { FaGithub } from "react-icons/fa";

function NDI() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Nuit de l'Info 2023</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>Événement national, Nuit de l'Info 2023</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>React.js, Node.js, Express, Git</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Frontend & Gestionnaire Veille Technologique</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Statut :</strong>
                                        <span>Terminé</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Image src={ndi} alt="Nuit de l'Info 2023" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Participation à la "Nuit de l'Info", événement regroupant de nombreux étudiants à travers la France pour collaborer et développer une application innovante en une nuit. Ce projet m'a permis de renforcer mes compétences en organisation d'une veille technologique (AC 7) ainsi qu'en collaboration efficace au sein d'une équipe multidisciplinaire (AC 10).
                        </p>
                        <ul className="text-white text-start">
                            <li>Développement collaboratif sous pression temporelle</li>
                            <li>Organisation et partage de veille technologique</li>
                            <li>Implémentation réactive et agile des besoins utilisateurs</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={ndi} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://gitlabinfo.iutmontp.univ-montp2.fr/franceskinn/ndi-2023" target="_blank">
                                <FaGithub /> GitLab
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={ndi} alt="Illustration du projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default NDI;
