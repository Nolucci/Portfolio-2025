import React from "react";
import { Container, Row, Col, Card, Image, Button, ListGroup } from "react-bootstrap";
import Particle from "../../Particle";
import salt1 from "../../../Assets/Pages/salt1.png";
import salt2 from "../../../Assets/Pages/salt2.png";
import { FaGithub } from "react-icons/fa";

function SaltProject() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">S.ALT – Stages et Alternances</h1>
                        <Card className="bg-dark text-white shadow rounded-3">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Cadre du projet :</strong>
                                        <span>SAÉ de développement, BUT Informatique</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Technologies :</strong>
                                        <span>React Native, Firebase, Expo</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Rôle :</strong>
                                        <span>Développeur Mobile & Analyste de Performance</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Statut :</strong>
                                        <span>Terminé</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Image src={salt1} alt="SALT" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Description détaillée</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            S.Alt est une application permettant la gestion des stages et des alternances pour les étudiants de l'IUT de Montpellier. Ce projet a été développé en respectant l'architecture MVC et en appliquant la méthodologie agile Scrum.
                        </p>
                        <br/>
                        <h4 className="text-white">Points clés réalisés :</h4>
                        <ListGroup variant="flush" className="text-white text-start">
                            <ListGroup.Item className="bg-dark text-white border-0">Développement multiplateforme avec React Native et Expo</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Gestion des données et authentification sécurisée via Firebase</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Optimisation des performances et anticipation des métriques d'utilisation</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={5}>
                        <Image src={salt2} alt="Interface utilisateur S.ALT" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Ma contribution</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            J'ai conçu et développé l'application mobile en utilisant React Native et Firebase, tout en optimisant les performances pour une meilleure expérience utilisateur. J'ai également participé à la gestion de projet en appliquant la méthode agile Scrum.
                        </p>
                        <br/>
                        <h2 className="blue mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://gitlabinfo.iutmontp.univ-montp2.fr/sae-semestre-31/salt" target="_blank">
                                <FaGithub /> GitHub
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default SaltProject;
