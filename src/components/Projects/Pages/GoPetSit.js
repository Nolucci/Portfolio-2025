import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Particle from "../../Particle";
import gopet from "../../../Assets/Projects/gopetsit.png"; // adapte selon ton projet

function GoPet() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">GoPet - Mise en relation Pet-sitters</h1>
                        <Card className="bg-dark text-white shadow">
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
                                        <span>Développeur Full Stack</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Statut :</strong>
                                        <span>Terminé</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Image src={gopet} alt="GoPet Projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Conception et développement d'une plateforme web permettant la mise en relation entre propriétaires d'animaux et pet-sitters, simplifiant ainsi la garde d'animaux domestiques. Ce projet m'a permis de renforcer mes compétences en conception d'architectures adaptées (AC 1) et en intégration de solutions en production (AC 3).
                        </p>
                        <ul className="text-white text-start">
                            <li>Développement d'une interface intuitive avec React.js</li>
                            <li>Gestion des données utilisateurs sécurisées avec MongoDB</li>
                            <li>Déploiement efficace de l'application sur un environnement de production</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={gopet} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={12}>
                        <h2 className="blue mb-3">Apprentissages et Compétences clés</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Grâce à ce projet, j'ai approfondi mes connaissances en développement web complet ainsi qu'en déploiement et intégration de solutions pratiques adaptées aux besoins spécifiques des utilisateurs finaux.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default GoPet;