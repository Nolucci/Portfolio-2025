import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> QUI SUIS-JE ? </span>
              </h1>
              <p className="home-about-body">
                Bon vivant, curieux et flexible, passionné par la programmation et le numérique depuis mon plus jeune âge.
                <br />
                <br />
                Actuellement étudiant en <b className="purple">BUT Informatique à l'IUT de Montpellier</b>, je suis spécialisé dans le parcours <b className="purple">Réalisation d'applications : développement, conception, validation (RACDV)</b>.
                <br />
                <br />
                J'ai obtenu mon <b className="purple">Baccalauréat général</b> avec les spécialités <b className="purple">Numérique et Sciences Informatiques, Mathématiques</b> et l'option <b className="purple">Mathématiques Expertes</b>.
                <br />
                <br />
                Je suis également intéressé par la psychologie, le développement personnel et la musique, domaines qui enrichissent ma créativité et mon approche du travail en équipe.
                <br />
                <br />
                Je suis activement engagé dans plusieurs projets personnels et universitaires, notamment la participation à des compétitions comme la <b className="purple">Code Game Jam</b> et le développement d'un <b className="purple">serveur d'hébergement</b>.
                <br />
                <br />
                Mes compétences couvrent de nombreux langages et frameworks tels que <b className="purple">Java, JavaScript, HTML, CSS, PHP, C#, SQL</b> ainsi que des outils comme <b className="purple">Git, Unity, Godot</b>.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid rounded-circle" alt="avatar" style={{ transform: "scale(0.8)" }} />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>ME RETROUVER</h1>
              <p>
                N'hésitez pas à me <span className="purple">contacter </span>sur mes réseaux sociaux !
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/NoLucci"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/nathan-franceskin-6344b0246/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home2;