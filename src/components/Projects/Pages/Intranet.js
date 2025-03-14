import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Particle from "../../Particle";
import intranet from "../../../Assets/Projects/intranet.png"; // adapte le chemin selon ton projet

function IntranetAgglo2025() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">
                            Intranet Agglo 2025
                        </h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>SAÉ de développement, 4<sup>ème</sup> semestre de BUT</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Vue.js, Node.js, Express, MySQL</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Full Stack, Concepteur UI</span>
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
                        <Image src={intranet} alt="Intranet Agglo 2025" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Développement d'un intranet pour une collectivité territoriale, facilitant la communication interne, l'organisation
                            et la gestion des ressources. Ce projet m'a permis de mettre en pratique mes compétences
                            en conception d'interfaces utilisateur ergonomiques et en intégration complète (AC 1), ainsi qu'en accompagnement du management de projet informatique (AC 10).
                        </p>
                        <ul className="text-white text-start">
                            <li>Développement full-stack avec une API REST dédiée</li>
                            <li>Conception d'une interface intuitive pour les agents territoriaux</li>
                            <li>Accompagnement et conduite du changement auprès des utilisateurs finaux</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={intranet} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={12}>
                        <h2 className="purple mb-3">Compétences & Enjeux</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Ce projet m'a permis de renforcer mes compétences techniques tout en comprenant les enjeux organisationnels liés à la gestion du changement numérique et l'importance d'une expérience utilisateur efficace dans les collectivités.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default IntranetAgglo2025;