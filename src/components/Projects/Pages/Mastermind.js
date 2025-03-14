import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Particle from "../../Particle";
import mastermind from "../../../Assets/Projects/mastermind.jpeg"; // adapte selon ton projet
import { FaGithub } from "react-icons/fa";

function MastermindProject() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Mastermind</h1>
                        <Card className="bg-dark text-white shadow">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>SAÉ de développement, BUT Informatique</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>Java, JavaFX</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur & Analyste</span>
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
                        <Image src={mastermind} alt="Mastermind Projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description du projet</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Création d'une application simulant le célèbre jeu "Mastermind", mettant en avant une utilisation efficace de structures algorithmiques complexes pour offrir une expérience utilisateur optimale. Ce projet m'a permis de renforcer mes compétences en sélection de bibliothèques spécifiques au domaine du jeu (AC 6) et d'améliorer l'analyse du comportement du code existant (AC 5).
                        </p>
                        <ul className="text-white text-start">
                            <li>Implémentation de mécaniques interactives et logiques du jeu</li>
                            <li>Analyse approfondie du comportement algorithmique et optimisation</li>
                            <li>Utilisation poussée de bibliothèques JavaFX pour l'interface utilisateur</li>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <Image src={mastermind} alt="Description projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Liens du projet</h2>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://github.com/Nolucci/MasterMind" target="_blank">
                                <FaGithub /> GitHub
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={mastermind} alt="Illustration du projet" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default MastermindProject;