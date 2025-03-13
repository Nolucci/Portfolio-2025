import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import meet from "../../Assets/Projects/meet.png";
import obc from "../../Assets/Projects/obc.png";
import intranet from "../../Assets/Projects/intranet.png";
import serveur from "../../Assets/Projects/serveur.png";
import chapitreMusical from "../../Assets/Projects/chapitreMusical.png";
import wm from "../../Assets/Projects/wm.png";
import ww from "../../Assets/Projects/ww.png";
import gopetsit from "../../Assets/Projects/gopetsit.png";
import ndi from "../../Assets/Projects/ndi.png";
import salt from "../../Assets/Projects/salt.png";
import mastermind from "../../Assets/Projects/mastermind.jpeg";
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
        <p style={{color: "white"}}>
          Tous les projets importants que j'ai pu réaliser depuis que j'étudie l'Informatique.
        </p>
        <br/>
        <p style={{color: "white"}}>
          Ces projets sont reliés à des apprentissages critiques présents dans le parcours RACDV (réalisation
          d'applications) :
          Pour cette troisième année de BUT, j'ai relié mes projets aux différent AC qui sont :
        </p>
        <br/>
        <p style={{color: "white"}}>
          Partie Réaliser :
          AC 1 Choisir et implémenter les architectures adaptées
          AC 2 Faire évoluer une application existante
          AC 3 Intégrer des solutions dans un environnement de production

          Partie Optimiser :
          AC 4 Anticiper les résultats de diverses métriques (temps d’exécution, occupation
          mémoire…)
          AC 5 Profiler, analyser et justifier le comportement d’un code existant
          AC 6 Choisir et utiliser des bibliothèques et méthodes dédiées au domaine
          d’application (imagerie, immersion, intelligence artificielle, jeux vidéos,
          parallélisme, calcul formel…)

          Partie Collaborer :
          AC 7 Organiser et partager une veille numérique
          AC 8 Identifier les enjeux de l’économie de l’innovation numérique
          AC 9 Guider la conduite du changement informatique au sein d’une organisation
          AC 10 Accompagner le management de projet informatique
        </p>
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={meet}
                isBlog={false}
                title="Meet API"
                description=""
                ghLink="https://gitlabinfo.iutmontp.univ-montp2.fr/franceskinn/meet.git"
                demoLink="https://webinfo.iutmontp.univ-montp2.fr/~franceskinn/meet_vue/dist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={obc}
                isBlog={false}
                title="Oracle Backup Checker"
                description=""
                // ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={intranet}
                isBlog={false}
                title="Intranet Agglo 2025"
                description=""
                // ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={chapitreMusical}
                isBlog={false}
                title="Chapitre Musical"
                description=""
                ghLink="https://github.com/Nolucci/CGJ2025"
                demoLink="https://nolucci.itch.io/chat-pitre-musical"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={wm}
                isBlog={false}
                title="Wisp Madness"
                description=""
                ghLink="https://github.com/LokiAquila/WispMadness"
                demoLink="https://nolucci.itch.io/wisp-madness"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={ww}
                isBlog={false}
                title="Weather Wizardry"
                description=""
                // ghLink=""
                demoLink="https://nolucci.itch.io/weather-wizardry"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={ndi}
                isBlog={false}
                title="Nuit de l'Info"
                description=""
                ghLink="https://gitlabinfo.iutmontp.univ-montp2.fr/franceskinn/ndi-2023"
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={salt}
                isBlog={false}
                title="S.Alt"
                description=""
                ghLink="https://gitlabinfo.iutmontp.univ-montp2.fr/sae-semestre-31/salt.git"
                // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={rail}
                isBlog={false}
                title="Les Aventuriers du Rail / Graphe"
                description=""
                ghLink="https://gitlabinfo.iutmontp.univ-montp2.fr/ihm/archives/etu/delucae-franceskinn-oubramk/railsihm"
                // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={gopetsit}
                isBlog={false}
                title="GoPetSit"
                description=""
                // ghLink=""
                // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={mastermind}
                isBlog={false}
                title="Mastermind"
                description=""
                ghLink="github.com/Nolucci/MasterMind"
                // demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={serveur}
                isBlog={false}
                title="Serveur"
                description=""
                // ghLink=""
                // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={escapeGame}
                isBlog={false}
                title="Escape Game"
                description=""
                ghLink="https://github.com/Nolucci/Grizly-SAE1.git"
                // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
