import React from "react";
import { Container, Row, Col, Card, Image, Button, ListGroup } from "react-bootstrap";
import Particle from "../../Particle";
import gopet from "../../../Assets/Projects/gopetsit.png";
import { FaGitlab, FaExternalLinkAlt } from "react-icons/fa";

function GoPet() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">GoPet : Mise en relation Pet-sitters</h1>
                        <Card className="bg-dark text-white shadow rounded-3">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Cadre du projet :</strong>
                                        <span>SAÉ de développement, 3<sup>ème</sup> semestre de BUT</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Technologies :</strong>
                                        <span>React.js, Node.js, Express, MongoDB</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Rôle :</strong>
                                        <span>Développeur Fullstack</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Statut :</strong>
                                        <span>En cours</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Image src={gopet} alt="GoPet Application" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Description détaillée</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Développement d'une plateforme web permettant la mise en relation entre propriétaires d'animaux et pet-sitters, facilitant ainsi la garde d'animaux domestiques. Le projet vise à offrir une expérience utilisateur intuitive et fluide grâce à React.js, tout en assurant une gestion sécurisée des utilisateurs et des réservations.
                        </p>
                        <br/>
                        <h4 className="text-white">Points clés réalisés :</h4>
                        <ListGroup variant="flush" className="text-white text-start">
                            <ListGroup.Item className="bg-dark text-white border-0">Système d'authentification sécurisé et gestion des comptes utilisateurs</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Développement d'une API REST robuste avec Express.js et MongoDB</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Mise en place d'un système de réservation et de messagerie intégré</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={5}>
                        <Image src={gopet} alt="Interface utilisateur GoPet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Ma contribution</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            J'ai participé activement à la conception et au développement de l'application, notamment en réalisant l'architecture complète, l'intégration de l'API, et en assurant le déploiement de la plateforme sur un serveur de production.
                        </p>
                        <br/>
                        <h2 className="blue mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://gitlab.com/projet-gopet" target="_blank" className="me-3">
                                <FaGitlab /> GitLab
                            </Button>
                            <Button variant="outline-light" href="https://gopet-demo.com" target="_blank">
                                <FaExternalLinkAlt /> Démo en ligne
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={gopet} alt="Capture écran GoPet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default GoPet;