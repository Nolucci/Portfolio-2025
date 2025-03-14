import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Particle from "../../Particle";
import obc from "../../../Assets/Projects/obc.png"; // adapte le chemin selon ton projet

function OracleBackupChecker() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Oracle Backup Checker</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>SAÉ de développement, 4<sup>ème</sup> semestre de BUT</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Oracle DB, Python, Bash</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Backend, Analyste</span>
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
                        <Image src={obc} alt="Oracle Backup Checker" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Conception d'un outil automatisé pour vérifier l'intégrité des sauvegardes Oracle,
                            assurant la fiabilité des données et la continuité des opérations. Ce projet m'a
                            permis d'approfondir l'analyse et la justification du comportement du code existant (AC 5)
                            ainsi que l'intégration de solutions en production (AC 3).
                        </p>
                        <ul className="text-white text-start">
                            <li>Automatisation des vérifications de sauvegardes via scripts Bash et Python</li>
                            <li>Analyse approfondie et optimisation du comportement du code existant</li>
                            <li>Intégration et validation en environnement de production Oracle DB</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={obc} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={12}>
                        <h2 className="purple mb-3">Contribution & Apprentissage</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Ce projet m'a permis d'approfondir mes compétences techniques en gestion automatisée des processus critiques (AC 1)
                            et en anticipation et justification des métriques de performance (AC 4, AC 5).
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default OracleBackupChecker;