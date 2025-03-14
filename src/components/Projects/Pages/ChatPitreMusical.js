import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ChatPitreMusical from "../../../Assets/Projects/ChatPitreMusical.png";

function ChatPitreMusicalPage() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">ChatPitre Musical</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>Créative Game Jam 2025 (CGJ)</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Unity, C#, WebGL</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Gameplay & Intégrateur Audio</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Statut :</strong>
                                        <span>Terminé (🏅 Top 10)</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Image src={ChatPitreMusical} alt="ChatPitre Musical" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Participation à la création d'un jeu vidéo musical lors de la Code Game Jam 2025 (CGJ), compétition regroupant plusieurs dizaines d'équipes et plus de 300 personnes. Sur le thème imposé, notre équipe composée de <strong>6 personnes</strong> a développé en seulement 2 jours un jeu innovant, combinant gameplay interactif et musique dynamique, ce qui nous a permis de nous classer dans le <strong>Top 10 🏅</strong>. Cette expérience a été particulièrement enrichissante sur le plan technique et artistique, améliorant mes compétences en Godot, GodotLanguage et en montage vidéo.
                        </p>
                        <ul className="text-white text-start">
                            <li>Développement des mécaniques musicales interactives</li>
                            <li>Utilisation avancée de bibliothèques audio et gameplay</li>
                            <li>Intégration et déploiement rapide sur Itch.io</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={ChatPitreMusical} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://github.com/nolucci/CGJ2025" target="_blank" className="me-3">
                                <FaGithub /> GitHub
                            </Button>
                            <Button variant="outline-light" href="https://nolucci.itch.io/chat-pitre-musical" target="_blank">
                                <FaExternalLinkAlt /> Démo jouable
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={ChatPitreMusical} alt="Démo du jeu" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ChatPitreMusicalPage;
