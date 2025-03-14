import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import salt from "../../../Assets/Projects/salt.png";
import { FaGithub } from "react-icons/fa";

function SaltProject() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">S.ALT – Stages et Alternances</h1>
                        <Card className="bg-dark text-white shadow">
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
                        <Image src={"../../../Assets/Projects/salt.png"} alt="SALT" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            S.Alt est une application de gestion de stages et d'alternances pour l'IUT de Montpellier.
                            Ce projet compte pour la SAÉ de troisième semestre du BUT Informatique (2023-2024). Dans ce projet, nous devions donc réaliser cette plateforme en suivant l'architecture MVC, avec PHP 8.2 comme langage de travail. Nous étions aussi évalué sur notre application de la méthode agile Scrum.
                        </p>
                        <ul className="text-white text-start">
                            <li>Utilisation de React Native et Expo pour un développement multiplateforme</li>
                            <li>Gestion efficace des données et authentification avec Firebase</li>
                            <li>Optimisation des performances et anticipation des métriques de l'application</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={"../../../Assets/Projects/salt-description.png"} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://github.com/tonprojet" target="_blank">
                                <FaGithub /> GitHub
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={"../../../Assets/Projects/salt-demo.png"} alt="Démo du projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default SaltProject;