import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import wispMadness from "../../../Assets/Projects/WispMadness.png"; // adapte selon ton projet

function WispMadness() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Wisp Madness</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>SAÉ de développement, CGJ 2023</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Unity, C#, Git</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Gameplay & Collaborateur technique</span>
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
                        <Image src={"../../../Assets/Projects/WispMadness.png"} alt="Wisp Madness" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Développement d'un jeu vidéo lors de la CGJ 2023, mettant en scène des esprits dans une aventure immersive et palpitante. Ce projet m'a permis de choisir et d'utiliser des bibliothèques spécifiques au domaine du jeu vidéo (AC 6) et de collaborer efficacement au sein d'une équipe de développement (AC 10).
                        </p>
                        <ul className="text-white text-start">
                            <li>Développement de mécaniques interactives en C# sur Unity</li>
                            <li>Intégration de bibliothèques spécifiques dédiées au jeu vidéo</li>
                            <li>Travail collaboratif via Git pour la gestion de versions</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={"../../../Assets/Projects/WispMadness.png"} alt="Gameplay Wisp Madness" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://github.com/tonlienversrepo" target="_blank" className="me-3">
                                <FaGithub /> GitHub
                            </Button>
                            <Button variant="outline-light" href="#" target="_blank" disabled>
                                <FaExternalLinkAlt /> Démo indisponible
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={"../../../Assets/Projects/WispMadness.png"} alt="Démo du projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default WispMadness;