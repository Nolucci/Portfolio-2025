import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import ww from "../../../Assets/Projects/WeatherWizardry.png"; // Vérifie ton chemin
import { FaExternalLinkAlt } from "react-icons/fa";

function WeatherWizardry() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Weather Wizardry : Maître du temps</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>Code Game Jam 2023</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>C#, Unity</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Backend & Gameplay</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Statut :</strong>
                                        <span>Terminé (🥉 3ᵉ prix)</span>
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
                            Première participation à la Code Game Jam, une compétition de développement de jeux vidéo en 2 jours. Malgré une équipe réduite de moitié à cause d'absences et des difficultés techniques majeures, nous avons réussi à créer un jeu de type <strong>platformer</strong> basé sur le thème « Maître du temps ». Grâce à une organisation rigoureuse et une détermination forte, notre équipe a décroché le <strong>troisième prix 🥉</strong>. Ce projet m'a permis de renforcer mes compétences techniques en C# et Unity, ainsi que mes capacités à gérer efficacement une crise et un projet sous contrainte (AC 6 et AC 10).
                        </p>
                        <ul className="text-white text-start">
                            <li>Développement intensif des mécaniques de gameplay (collisions, interactions)</li>
                            <li>Création et gestion des scripts pour les personnages et objets interactifs</li>
                            <li>Résolution efficace des problèmes techniques et gestion d'équipe en contexte de crise</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={ww} alt="Gameplay Weather Wizardry" fluid rounded className="shadow-lg" />
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
                        <Image src={ww} alt="Démo Weather Wizardry" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default WeatherWizardry;
