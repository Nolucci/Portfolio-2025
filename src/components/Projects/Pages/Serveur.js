import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import serveur from "../../../Assets/Projects/serveur.png"; // vérifie le chemin
import { FaExternalLinkAlt } from "react-icons/fa";

function ServeurProject() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Serveur dédié & Administration</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>Projet Personnel de création de serveur</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Debian, Shell, Docker</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Chef de projet & Administrateur Système</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Statut :</strong>
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
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Ce projet personnel ambitieux consiste en la création complète, la configuration et la sécurisation d'un serveur dédié destiné à accueillir diverses solutions telles que des sites web ou serveurs de jeux. Réalisé à partir d'un ancien PC réhabilité, ce projet sur plusieurs mois implique chaque étape, depuis l'installation du système Debian jusqu'à la configuration avancée des logiciels via Shell et Docker. En collaboration avec une équipe de passionnés, ce projet renforce mes compétences en gestion de projet, en administration système, sécurité informatique, et automatisation d'infrastructure (AC 3).
                        </p>
                        <ul className="text-white text-start">
                            <li>Assemblage matériel et installation initiale sous Debian</li>
                            <li>Automatisation via Docker et sécurisation avancée du serveur</li>
                            <li>Gestion complète du système : monitoring, maintenance et mise à jour</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={serveur} alt="Description serveur" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Liens du projet</h2>
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
