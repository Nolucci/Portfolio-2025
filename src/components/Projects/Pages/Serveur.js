import React from "react";
import { Container, Row, Col, Card, Image, Button, ListGroup } from "react-bootstrap";
import Particle from "../../Particle";
import serveur from "../../../Assets/Projects/serveur.png";
import { FaExternalLinkAlt } from "react-icons/fa";

function ServeurProject() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Serveur dédié & Administration</h1>
                        <Card className="bg-dark text-white shadow rounded-3">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Cadre du projet :</strong>
                                        <span>Projet Personnel de création de serveur</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Technologies :</strong>
                                        <span>Debian, Shell, Docker</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Rôle :</strong>
                                        <span>Chef de projet & Administrateur Système</span>
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
                        <Image src={serveur} alt="Serveur dédié" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Description détaillée</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Ce projet personnel consiste à créer, configurer et sécuriser un serveur dédié hébergeant divers services tels que des sites web ou serveurs de jeux. Réalisé à partir d'un ancien PC réhabilité, ce projet implique l'installation du système Debian, l'automatisation des tâches via Docker et Shell, ainsi que la sécurisation avancée du serveur.
                        </p>
                        <br/>
                        <h4 className="text-white">Points clés réalisés :</h4>
                        <ListGroup variant="flush" className="text-white text-start">
                            <ListGroup.Item className="bg-dark text-white border-0">Assemblage matériel et installation de Debian</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Automatisation des services avec Docker et sécurisation avancée</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Monitoring et maintenance du serveur en production</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={5}>
                        <Image src={serveur} alt="Description serveur" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://webinfo.iutmontp.univ-montp2.fr/~franceskinn/Site/ressources/documents/SAE-Serveur.pdf" target="_blank" className="me-3">
                                <FaExternalLinkAlt /> Visualiser le projet
                            </Button>
                            <Button variant="outline-light" href="https://webinfo.iutmontp.univ-montp2.fr/~franceskinn/Site/ressources/documents/Specifications-Serveur.pdf" target="_blank">
                                <FaExternalLinkAlt /> Spécifications techniques
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={serveur} alt="Documentation serveur" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ServeurProject;