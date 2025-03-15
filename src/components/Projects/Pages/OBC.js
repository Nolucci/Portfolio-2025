import React from "react";
import { Container, Row, Col, Card, Image, ListGroup } from "react-bootstrap";
import Particle from "../../Particle";
import obc from "../../../Assets/Projects/obc.png";

function OracleBackupChecker() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Oracle Backup Checker</h1>
                        <Card className="bg-dark text-white shadow rounded-3">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Cadre du projet :</strong>
                                        <span>SAÉ de développement, 4<sup>ème</sup> semestre de BUT</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Technologies :</strong>
                                        <span>Oracle DB, WebDEV, WLangage</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Rôle :</strong>
                                        <span>Développeur Backend, Analyste</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Statut :</strong>
                                        <span>Terminé</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Description détaillée</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Conception d'un outil automatisé pour vérifier l'intégrité des sauvegardes Oracle, assurant la fiabilité des données et la continuité des opérations. Ce projet a nécessité une approche approfondie de l'analyse des métriques et l'automatisation des contrôles en environnement de production.
                        </p>
                        <br/>
                        <h4 className="text-white">Points clés réalisés :</h4>
                        <ListGroup variant="flush" className="text-white text-start">
                            <ListGroup.Item className="bg-dark text-white border-0">Automatisation des vérifications des sauvegardes via scripts Bash et Python</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Analyse approfondie et optimisation du code existant</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Validation et intégration en environnement Oracle DB</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={5}>
                        <Image src={obc} alt="Interface utilisateur Oracle Backup Checker" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Ma contribution</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            J'ai participé activement à l'analyse et à l'amélioration des scripts de vérification des sauvegardes, en optimisant leur exécution et en intégrant des alertes automatiques en cas de défaillance. J'ai également documenté le processus pour assurer la maintenabilité de l'outil.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default OracleBackupChecker;
