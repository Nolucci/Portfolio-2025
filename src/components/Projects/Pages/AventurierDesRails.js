import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import rail from "../../../Assets/Projects/rail.png"; // adapte selon ton projet
import { FaGithub } from "react-icons/fa";

function AventuriersDesRailsGraphe() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">
                            Les Aventuriers du Rail / Graphe
                        </h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>SAÉ de développement, 2<sup>ème</sup> semestre de BUT</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Java 18, JavaFX 18</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Frontend & Backend</span>
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
                        <Image src={rail} alt="Les Aventuriers du Rail" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Réalisation d'une application simulant le jeu « Les Aventuriers du Rail », intégrant des structures de données avancées (graphes), notamment avec l'utilisation de l'algorithme de Dijkstra. Ce projet a renforcé mes compétences en gestion de structures de données complexes (AC 6) ainsi qu'en analyse du comportement algorithmique (AC 5).
                        </p>
                        <ul className="text-white text-start">
                            <li>Mise en place d'une structure de données efficace basée sur les graphes</li>
                            <li>Utilisation avancée de JavaFX pour l'interface utilisateur interactive</li>
                            <li>Analyse approfondie de performances d'algorithmes appliqués à la simulation</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={rail} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://gitlabinfo.iutmontp.univ-montp2.fr/franceskinn/railsihm" target="_blank">
                                <FaGithub /> GitLab
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={rail} alt="Aperçu du projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

            </Container>
        </Container>
    );
}

export default AventuriersDesRailsGraphe;