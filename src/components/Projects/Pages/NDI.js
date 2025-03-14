import React from "react";
import { Container, Row, Col, Card, Image, Button, ListGroup } from "react-bootstrap";
import Particle from "../../Particle";
import ndi from "../../../Assets/Projects/ndi.png";
import { FaGitlab } from "react-icons/fa";

function NDI() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h1 className="project-heading mb-4">Participation à la Nuit de l'Info 2023</h1>
                        <Card className="bg-dark text-white shadow rounded-3">
                            <Card.Body>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Cadre du projet :</strong>
                                        <span>Nuit de l'Info 2023 (événement national)</span>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <strong className="text-purple">Technologies :</strong>
                                        <span>HTML/CSS, JavaScript</span>
                                    </Col>
                                    <Col md={6}>
                                        <strong className="text-purple">Rôle :</strong>
                                        <span>Développeur Frontend & Coordinateur technique</span>
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
                        <Image src={ndi} alt="Nuit de l'Info 2023" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Description détaillée</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            La Nuit de l'Info est un événement national où des équipes d'étudiants disposent de 16 heures pour concevoir un site web répondant à un défi commun et à des défis annexes proposés par des entreprises. En 2023, le thème principal était le <em>Réchauffement climatique</em>. Notre équipe initialement constituée de 10 personnes a relevé divers défis techniques et organisationnels, travaillant intensément pour livrer un produit fonctionnel et innovant dans un délai très court.
                        </p>
                        <h4 className="text-white">Points clés du projet :</h4>
                        <ListGroup variant="flush" className="text-white text-start">
                            <ListGroup.Item className="bg-dark text-white border-0">Développement rapide et efficace sous forte contrainte temporelle</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Coordination d'équipe (organisation en sous-groupes, distribution des tâches)</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Support technique aux membres de l'équipe (résolution de problèmes techniques, formation des nouveaux)</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={5}>
                        <Image src={ndi} alt="Interface du projet Nuit de l'Info" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={7}>
                        <h2 className="purple mb-3">Ma contribution personnelle</h2>
                        <p style={{ color: "white", textAlign: "justify" }}>
                            Durant la Nuit de l'Info 2023, j'ai eu un rôle clé en organisant et en répartissant le travail entre les 8 membres actifs de l'équipe, formant notamment des binômes efficaces. J'ai pris part activement au développement Frontend en HTML, CSS et JavaScript, et j'ai géré la mise en place de plusieurs fonctionnalités interactives du site. J'ai également assuré un support technique aux membres de l'équipe moins expérimentés.
                        </p>
                        <div className="mt-4">
                            <Button variant="outline-light" href="https://gitlabinfo.iutmontp.univ-montp2.fr/franceskinn/ndi-2023" target="_blank">
                                <FaGitlab /> Voir sur GitLab
                            </Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <Image src={ndi} alt="Aperçu du site réalisé" fluid rounded className="shadow-lg" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default NDI;
