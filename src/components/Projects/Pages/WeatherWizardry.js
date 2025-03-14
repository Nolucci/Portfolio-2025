import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import ww from "../../../Assets/Projects/WeatherWizardry.png"; // adapte selon ton projet
import { FaExternalLinkAlt } from "react-icons/fa";

function WeatherWizardry() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Weather Wizardry</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>SAÉ de développement, CGJ 2023</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Unity, C#, Photoshop</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Gameplay & Designer</span>
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
                        <Image src={ww} alt="Weather Wizardry" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Développement d'un jeu vidéo basé sur une expérience innovante autour du contrôle météorologique, mêlant stratégie et gameplay interactif. Ce projet m'a permis de développer des compétences en conception de mécaniques de jeu innovantes (AC 6) et en gestion efficace de projets créatifs (AC 10).
                        </p>
                        <ul className="text-white text-start">
                            <li>Développement d'une expérience ludique originale avec Unity</li>
                            <li>Intégration de mécaniques innovantes centrées sur la météo et l'environnement</li>
                            <li>Participation active à la gestion d'équipe et à l'organisation de projet créatif</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={ww} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://nolucci.itch.io/weather-wizardry" target="_blank">
                                <FaExternalLinkAlt /> Démo jouable
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={ww} alt="Démo du projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default WeatherWizardry;
