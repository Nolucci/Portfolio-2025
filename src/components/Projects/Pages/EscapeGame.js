import React from "react";
import { Container, Row, Col, Card, Image, Button, ListGroup } from "react-bootstrap";
import Particle from "../../Particle";
import { FaGithub } from "react-icons/fa";
import escapeGame from "../../../Assets/Projects/escapeGame.png";

function EscapeGameProject() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Escape Game Immersif</h1>
                        <Card className="bg-dark text-white shadow rounded-3">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Cadre du projet :</strong>
                                        <span>SAÉ de développement, BUT Informatique</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Technologies :</strong>
                                        <span>Unity, C#, Git</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Rôle :</strong>
                                        <span>Développeur Gameplay & Narrative Designer</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Statut :</strong>
                                        <span>Terminé</span>
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
                            Conception et réalisation d'un jeu d'évasion immersif intégrant des énigmes complexes, des mécaniques interactives et une histoire captivante. Ce projet a renforcé mes compétences en sélection et utilisation de bibliothèques spécifiques au domaine du jeu vidéo, ainsi qu'en organisation et partage efficace d'une veille numérique.
                        </p>
                        <br/>
                        <h4 className="text-white">Points clés réalisés :</h4>
                        <ListGroup variant="flush" className="text-white text-start">
                            <ListGroup.Item className="bg-dark text-white border-0">Développement d'énigmes interactives en C# avec Unity</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Conception d'une narration immersive et cohérente</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Veille technologique active autour des mécaniques de jeu innovantes</ListGroup.Item>
                        </ListGroup>
                        <br/>
                        <h2 className="blue mb-3">Ma contribution</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            J'ai été impliqué activement dans le développement et la conception de ce projet, en prenant en charge plusieurs aspects clés du backend et du frontend.
                        </p>
                        <br/>
                        <h2 className="blue mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://github.com/Nolucci/Grizly-SAE1.git" target="_blank">
                                <FaGithub /> GitHub
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={escapeGame} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default EscapeGameProject;
