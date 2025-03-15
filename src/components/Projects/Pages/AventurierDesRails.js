import React from "react";
import { Container, Row, Col, Card, Image, Button, ListGroup } from "react-bootstrap";
import Particle from "../../Particle";
import rail from "../../../Assets/Projects/rail.png";
import { FaGitlab } from "react-icons/fa";

function AventuriersDesRails() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Portage des Aventuriers des Rails : Autour du Monde</h1>
                        <Card className="bg-dark text-white shadow rounded-3">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Cadre du projet :</strong>
                                        <span>SAÉ de développement, 2<sup>ème</sup> semestre de BUT</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-blue">Technologies :</strong>
                                        <span>Java 18, JavaFX 18</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-blue">Rôle :</strong>
                                        <span>Développeur Frontend & Backend</span>
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
                            Ce projet était une SAÉ de développement du second semestre du BUT Informatique, portant sur les compétences de Développement et d'Optimisation. L'objectif principal était un portage numérique du jeu de plateau <em>Les Aventuriers du Rail : Autour du Monde</em> en Java, avec une interface graphique réalisée avec JavaFX.
                        </p>
                        <br/>
                        <h4 className="text-white">Les trois phases du projet :</h4>
                        <ListGroup variant="flush" className="text-white text-start">
                            <ListGroup.Item className="bg-dark text-white border-0">Développement du cœur du jeu en Java selon des règles prédéfinies avec tests unitaires via Jupiter.</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Création d'une API Graphes intégrant l'algorithme de Dijkstra pour les calculs de routes optimisées entre villes.</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Mise en place d'une interface utilisateur avancée via JavaFX et SceneBuilder.</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={5}>
                        <Image src={rail} alt="Interface utilisateur Aventuriers des Rails" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="blue mb-3">Ma contribution</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            J'ai participé activement au développement de ce projet en réalisant plusieurs fonctionnalités clés :
                        </p>
                        <br/>
                        <h4 className="text-white">Points clés réalisés :</h4>
                        <ListGroup variant="flush" className="text-white text-start">
                            <ListGroup.Item className="bg-dark text-white border-0">Implémentation des mécaniques de jeu (pioche de cartes, capture de routes, échanges de pions).</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Développement de l'algorithme de Dijkstra dans l'API Graphe.</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Connexion efficace entre les composants du jeu et l'interface utilisateur graphique.</ListGroup.Item>
                        </ListGroup>
                        <br/>
                        <h2 className="blue mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://gitlabinfo.iutmontp.univ-montp2.fr/franceskinn/railsihm" target="_blank" className="me-3">
                                <FaGitlab /> GitLab
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AventuriersDesRails;
