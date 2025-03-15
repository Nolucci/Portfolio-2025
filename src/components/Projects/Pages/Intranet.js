import React from "react";
import { Container, Row, Col, Card, Image, Button, ListGroup } from "react-bootstrap";
import Particle from "../../Particle";
import intranet from "../../../Assets/Projects/intranet.png";
import { FaGitlab, FaExternalLinkAlt } from "react-icons/fa";

function IntranetAgglo2025() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Intranet Agglo 2025</h1>
                        <Card className="bg-dark text-white shadow rounded-3">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Cadre du projet :</strong>
                                        <span>Projet d'alternance 2024-2025</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Technologies :</strong>
                                        <span>Jalios, Html/CSS, JS</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Rôle :</strong>
                                        <span>Développeur Fullstack, Concepteur UI</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Statut :</strong>
                                        <span>En cours</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Description détaillée</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Développement d'un intranet pour une collectivité territoriale, facilitant la communication interne, l'organisation et la gestion des ressources. Ce projet a nécessité une approche UX/UI approfondie pour garantir une adoption fluide par les agents territoriaux.
                        </p>
                        <br/>
                        <h4 className="text-white">Points clés réalisés :</h4>
                        <ListGroup variant="flush" className="text-white text-start">
                            <ListGroup.Item className="bg-dark text-white border-0">Développement full-stack avec une API REST sécurisée</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Conception d'une interface intuitive pour les agents territoriaux</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Accompagnement et conduite du changement pour la transition numérique</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={5}>
                        <Image src={intranet} alt="Interface utilisateur Intranet Agglo 2025" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Ma contribution</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            J'ai conçu et développé l'intégralité du projet, en mettant l'accent sur une architecture robuste, une interface fluide et ergonomique, et en assurant le déploiement et la formation des utilisateurs finaux.
                        </p>
                        <br/>
                        <h2 className="blue mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://gitlab.com/projet-intranet-agglo" target="_blank" className="me-3">
                                <FaGitlab /> GitLab
                            </Button>
                            <Button variant="outline-light" href="https://intranet-agglo-demo.com" target="_blank">
                                <FaExternalLinkAlt /> Démo en ligne
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default IntranetAgglo2025;