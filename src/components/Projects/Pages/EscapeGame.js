import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import escapeGame from "../../../Assets/Projects/escapeGame.png"; // adapte selon ton projet
import { FaGithub } from "react-icons/fa";

function EscapeGameProject() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Escape Game Immersif</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>SAÉ de développement, BUT Informatique</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Unity, C#, Git</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Gameplay & Narrative Designer</span>
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
                        <Image src={escapeGame} alt="Escape Game" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Conception et réalisation d'un jeu d'évasion immersif intégrant des énigmes complexes, des mécaniques interactives et une histoire captivante. Ce projet a renforcé mes compétences en sélection et utilisation de bibliothèques spécifiques au domaine du jeu vidéo (AC 6), ainsi qu'en organisation et partage efficace d'une veille numérique (AC 7).
                        </p>
                        <ul className="text-white text-start">
                            <li>Développement d'énigmes interactives en C# avec Unity</li>
                            <li>Conception d'une narration immersive et cohérente</li>
                            <li>Veille technologique active autour des mécaniques de jeu innovantes</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={escapeGame} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://github.com/Nolucci/Grizly-SAE1.git" target="_blank">
                                <FaGithub /> GitHub
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={escapeGame} alt="Illustration du projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default EscapeGameProject;
