import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import meet from "../../../Assets/Projects/meet.png"; // adapte le chemin selon ton projet

function MeetAPI() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Meet API</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>SAÉ de développement, 3<sup>ème</sup> semestre de BUT</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Node.js, Express.js, Vue.js, MongoDB</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Backend & Intégrateur Frontend</span>
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
                        <Image src={meet} alt="Meet API" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Développement d'une API RESTful pour la gestion d'événements et de rencontres,
                            permettant aux utilisateurs de créer, modifier et participer à des événements.
                            Ce projet a renforcé mes compétences en conception d'architectures adaptées (AC 1)
                            et en intégration de solutions en production (AC 3).
                        </p>
                        <ul className="text-white text-start">
                            <li>Création et structuration de l'API RESTful avec Express.js</li>
                            <li>Gestion et sécurisation des données avec MongoDB</li>
                            <li>Intégration frontend avec Vue.js et déploiement continu</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={meet} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://gitlabinfo.iutmontp.univ-montp2.fr/franceskinn/meet.git" target="_blank" className="me-3">
                                <FaGithub /> GitLab
                            </Button>
                            <Button variant="outline-light" href="https://webinfo.iutmontp.univ-montp2.fr/~franceskinn/meet_vue/dist/" target="_blank">
                                <FaExternalLinkAlt /> Démo en ligne
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={meet} alt="Démo du projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default MeetAPI;