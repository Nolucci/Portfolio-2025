import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import meet from "../../Assets/Projects/meet.png";
import obc from "../../Assets/Projects/blog.png";
import intranet from "../../Assets/Projects/intranet.png";
import serveur from "../../Assets/Projects/serveur.png";
import chapitreMusical from "../../Assets/Projects/chapitreMusical.png";
import wm from "../../Assets/Projects/wm.png";
import ww from "../../Assets/Projects/ww.png";
import gopetsit from "../../Assets/Projects/gopetsit.png";
import roboto from "../../Assets/Projects/roboto.png";
import salt from "../../Assets/Projects/salt.png";
import mastermind from "../../Assets/Projects/mastermind.png";
import rail from "../../Assets/Projects/rail.png";
import escapeGame from "../../Assets/Projects/escapeGame.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple"> PROJETS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Tous les projets importants que j'ai pu réaliser depuis que j'étudie l'Informatique.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meet}
              isBlog={false}
              title="Meet API"
              description=""
              ghLink=""
              demoLink="https://webinfo.iutmontp.univ-montp2.fr/~franceskinn/meet_vue/dist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={obc}
              isBlog={false}
              title="Oracle Backup Checker"
              description=""
              ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intranet}
              isBlog={false}
              title="Intranet Agglo 2025"
              description=""
              ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={serveur}
                isBlog={false}
                title="Les Aventuriers du Rail / Graphe"
                description=""
                ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chapitreMusical}
              isBlog={false}
              title="Chapitre Musical"
              description=""
              ghLink=""
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wm}
              isBlog={false}
              title="Wisp Madness"
              description=""
              ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ww}
              isBlog={false}
              title="Weather Wizardry"
              description=""
              ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={gopetsit}
                isBlog={false}
                title="GoPetSit"
                description=""
                ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={roboto}
                isBlog={false}
                title="Roboto"
                description=""
                ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={salt}
                isBlog={false}
                title="S.Alt"
                description=""
                ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={mastermind}
                isBlog={false}
                title="Mastermind"
                description=""
                ghLink=""
                // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={rail}
                isBlog={false}
                title="Les Aventuriers du Rail / Graphe"
                description=""
                ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={escapeGame}
                isBlog={false}
                title="Escape Game"
                description=""
                ghLink=""
                // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
