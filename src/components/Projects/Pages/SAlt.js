import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import salt from "../../../Assets/Projects/salt.png"; // adapte selon ton projet
import { FaGithub } from "react-icons/fa";

function SaltProject() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">SALT – Solutions Alternatives</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>SAÉ de développement, BUT Informatique</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>React Native, Firebase, Expo</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Mobile & Analyste de Performance</span>
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
                        <Image src={"../../../Assets/Projects/salt.png"} alt="SALT" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Développement d'une application mobile visant à promouvoir des alternatives durables et écologiques au quotidien.
                            Ce projet m'a permis d'approfondir mes compétences en sélection et utilisation de bibliothèques adaptées au développement mobile (AC 6) ainsi qu'en anticipation et gestion des résultats des métriques de performance (AC 4).
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
                        <h2 className="purple mb-3">Liens du projet</h2>
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