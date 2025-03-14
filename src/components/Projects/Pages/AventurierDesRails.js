import React from "react";
import { Container, Row, Col, Card, Image, Button, ListGroup } from "react-bootstrap";
import Particle from "../../Particle";
import rail from "../../../Assets/Projects/rail.png"; // Assure-toi que l'image corresponde à ton projet réel
import { FaGitlab } from "react-icons/fa";

function AventuriersDesRails() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">
                            Portage des Aventuriers des Rails : Autour du Monde
                        </h1>
                        <Card className="bg-dark text-white shadow rounded-3">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>SAÉ de développement, 2<sup>ème</sup> semestre de BUT</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Java 18, JavaFX 18</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Frontend & Backend</span>
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
                        <Image src={rail} alt="Interface Aventuriers des Rails" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description détaillée du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Ce projet était la SAÉ de développement du second semestre du BUT Informatique, portant sur les compétences de Développement et d'Optimisation (UE 1 et 2). L'objectif principal était un portage numérique du jeu de plateau <em>Les Aventuriers du Rail : Autour du Monde</em> en Java, avec une interface graphique réalisée à l'aide de JavaFX.
                        </p>
                        <h4 className="text-white">Les trois phases du projet :</h4>
                        <ListGroup variant="flush" className="mb-4">
                            <ListGroup.Item className="bg-dark text-white">Développement du cœur du jeu en Java selon des règles prédéfinies avec tests unitaires via Jupiter.</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Création d'une API Graphes intégrant l'algorithme de Dijkstra pour les calculs de routes optimisées entre villes.</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Mise en place d'une interface utilisateur avancée via JavaFX et SceneBuilder, intégrée directement dans le jeu.</ListGroup.Item>
                        </ListGroup>

                        <h4 className="text-white">Ma contribution :</h4>
                        <ul className="text-white text-start">
                            <li>Implémentation des mécaniques de jeu (pioche de cartes, capture de routes, échanges de pions).</li>
                            <li>Développement de l'algorithme de Dijkstra dans l'API Graphe.</li>
                            <li>Connexion efficace entre les composants du jeu et l'interface utilisateur graphique.</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={rail} alt="Aperçu Interface Graphique JavaFX" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Accéder au projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://gitlabinfo.iutmontp.univ-montp2.fr/franceskinn/railsihm" target="_blank">
                                <FaGitlab /> Voir sur GitLab
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={rail} alt="Aperçu du projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AventuriersDesRails;
