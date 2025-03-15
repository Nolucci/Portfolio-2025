import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import wispMadness from "../../../Assets/Pages/WM1.png";
import wispMadness2 from "../../../Assets/Pages/WM2.png";
import ReactPlayer from "react-player";

function WispMadness() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Wisp Madness : Légende éthérée</h1>
                        <Card className="bg-dark text-white shadow rounded-3">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Cadre du projet :</strong>
                                        <span>Code Game Jam 2024</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Technologies :</strong>
                                        <span>C#, Godot</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Rôle :</strong>
                                        <span>Développeur Backend & Organisation équipe</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Statut :</strong>
                                        <span>Terminé (🥈 2ᵉ prix)</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5} className="d-flex justify-content-center">
                        <ReactPlayer
                            url="https://youtu.be/SMpdsIQnftM"
                            width="100%"
                            height="19em"
                            controls
                            className="shadow-lg rounded"
                        />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Développement d'un jeu vidéo en équipe à l'occasion de la Code Game Jam 2024, compétition regroupant 43 équipes. Sur le thème « Légende éthérée », notre équipe a développé en seulement 2 jours un jeu de type <strong>survival game</strong>, original et captivant, nous permettant de décrocher le <strong>deuxième prix 🥈</strong>. Cette expérience a été très enrichissante techniquement et humainement, approfondissant mes connaissances en C# et en Godot tout en renforçant mon organisation d'équipe.
                        </p>
                        <ul className="text-white text-start">
                            <li>Conception du gameplay et implémentation des mécaniques en C# sur Godot</li>
                            <li>Organisation efficace de l'équipe (répartition des tâches, coordination technique)</li>
                            <li>Création des scripts des personnages et éléments du jeu (ennemis, interactions)</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={wispMadness} alt="Gameplay Wisp Madness" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://github.com/LokiAquila/WispMadness" target="_blank" className="me-3">
                                <FaGithub /> GitHub
                            </Button>
                            <Button variant="outline-light" href="https://nolucci.itch.io/wisp-madness" target="_blank" className="me-3">
                                <FaExternalLinkAlt /> Démo en ligne
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={wispMadness2} alt="Démo Wisp Madness" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default WispMadness;
