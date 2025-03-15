import React from "react";
import { Container, Row, Col, Card, Image, Button, ListGroup } from "react-bootstrap";
import Particle from "../../Particle";
import meet1 from "../../../Assets/Pages/meet3.png";
import meet2 from "../../../Assets/Pages/meet1.png";
import meet3 from "../../../Assets/Pages/meet2.png";
import {FaGitlab, FaExternalLinkAlt} from "react-icons/fa";

function MeetAPI() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Meet : Application de création d'événements</h1>
                        <Card className="bg-dark text-white shadow rounded-3">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Cadre du projet :</strong>
                                        <span>Dernier rendu de Framework Web (BUT Informatique)</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Technologies :</strong>
                                        <span>Vue.js 3, TypeScript, REST API, Bootstrap</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Rôle :</strong>
                                        <span>Développeur Fullstack</span>
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
                        <Image src={meet1} alt="Meet Application" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Description détaillée</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Projet de conception complète d'une application web dédiée à la gestion et à la participation à des événements. L'objectif principal était de permettre aux utilisateurs de s'inscrire, de consulter et de gérer leurs participations aux événements via une interface intuitive et dynamique réalisée avec Vue.js et TypeScript, soutenue par une API REST robuste.
                        </p>
                        <br/>
                        <h4 className="text-white">Points clés réalisés :</h4>
                        <ListGroup variant="flush" className="text-white text-start">
                            <ListGroup.Item className="bg-dark text-white border-0">Gestion complète des utilisateurs (inscription, authentification sécurisée, déconnexion)</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Traitement efficace des erreurs API et système de notifications utilisateur intuitif (messages flash)</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Intégration avec l'annuaire existant pour enrichir les informations du profil utilisateur</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={5}>
                        <Image src={meet2} alt="Interface utilisateur Meet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Ma contribution</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Étant seul sur ce projet, j'ai réalisé l'intégralité des étapes : conception et développement des composants Vue.js, création et intégration de l'API REST en TypeScript, gestion des données avec MongoDB, ainsi que le déploiement continu et documentation complète du projet.
                        </p>
                        <br/>
                        <h2 className="blue mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://gitlabinfo.iutmontp.univ-montp2.fr/franceskinn/meet.git" target="_blank" className="me-3">
                                <FaGitlab /> GitLab
                            </Button>
                            <Button variant="outline-light" href="https://webinfo.iutmontp.univ-montp2.fr/~franceskinn/meet_vue/dist/" target="_blank">
                                <FaExternalLinkAlt /> Démo en ligne
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={meet3} alt="Capture écran Meet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default MeetAPI;
