import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Particle from "../../Particle";
import serveur from "../../../Assets/Projects/serveur.png"; // adapte selon ton projet

function ServeurProject() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Serveur Dédié & Administration</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>SAÉ Infrastructure, BUT Informatique</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Linux, Apache, Nginx, Docker</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Administrateur Système & Réseau</span>
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
                        <Image src={serveur} alt="Serveur dédié" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Mise en place et gestion complète d'un serveur dédié pour héberger plusieurs applications web, en assurant la sécurité, la performance et la continuité des services. Ce projet m'a permis de renforcer mes compétences en intégration de solutions dans un environnement de production (AC 3) et en administration de systèmes et réseaux.
                        </p>
                        <ul className="text-white text-start">
                            <li>Configuration et sécurisation d'environnements Linux</li>
                            <li>Déploiement automatisé avec Docker et gestion d'applications web via Apache et Nginx</li>
                            <li>Monitoring, maintenance proactive et gestion de l'infrastructure serveur</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={serveur} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={12}>
                        <h2 className="purple mb-3">Compétences clés développées</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Cette expérience m'a permis de maîtriser les aspects critiques d'administration de serveurs, de sécurité informatique et de gestion d'applications en environnement de production.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ServeurProject;
