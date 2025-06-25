import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import meet from "../../Assets/Projects/meet.png";
import obc from "../../Assets/Projects/obc.png";
import intranet from "../../Assets/Projects/intranet.png";
import serveur from "../../Assets/Projects/serveur.png";
import ChatPitreMusical from "../../Assets/Projects/ChatPitreMusical.png";
import WispMadness from "../../Assets/Projects/WispMadness.png";
import WeatherWizardry from "../../Assets/Projects/WeatherWizardry.png";
import ndi from "../../Assets/Projects/ndi.png";
import salt from "../../Assets/Projects/salt.png";
import mastermind from "../../Assets/Projects/mastermind.jpeg";
import rail from "../../Assets/Projects/rail.png";
import escapeGame from "../../Assets/Projects/escapeGame.png";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Mes <strong className="blue">PROJETS</strong>
          </h1>
          <p style={{color: "white"}}>
            Voici une sélection de projets significatifs que j'ai réalisés au cours de mon parcours en informatique.
          </p>
          <br/>
          
          <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={meet}
                  isBlog={false}
                  title="Meet API"
                  description="Développement d'une API RESTful pour la gestion d'événements et de rencontres, permettant aux utilisateurs de créer, modifier et participer à des événements. Ce projet a renforcé mes compétences en choix et implémentation d’architectures adaptées (AC 1), en intégration de solutions dans un environnement de production (AC 3) et en travail collaboratif (AC 10)."
                  ghLink="https://gitlabinfo.iutmontp.univ-montp2.fr/franceskinn/meet.git"
                  demoLink="https://webinfo.iutmontp.univ-montp2.fr/~franceskinn/meet_vue/dist/"
                  projectLink="/project/Meet"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={obc}
                  isBlog={false}
                  title="Oracle Backup Checker"
                  description="Conception d'un outil automatisé pour vérifier l'intégrité des sauvegardes Oracle, assurant la fiabilité des données et la continuité des opérations. Ce projet m'a permis de profiler et analyser le comportement du code (AC 5), d’intégrer des solutions en production (AC 3) et de faire évoluer une application existante (AC 2)."
                  projectLink="/project/OBC"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={intranet}
                  isBlog={false}
                  title="Intranet Agglo 2025"
                  description="Développement d'un intranet pour une collectivité territoriale, facilitant la communication interne et l'accès aux ressources pour les employés. Ce projet a impliqué la conception d’architectures adaptées (AC 1), l’accompagnement du management de projet informatique (AC 10) et la conduite du changement au sein d’une organisation (AC 9)."
                  projectLink="/project/Intranet"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={ChatPitreMusical}
                  isBlog={false}
                  title="ChatPitre Musical"
                  description="Participation à la création d'un jeu vidéo sur le thème de la musique lors de la CGJ 2025 avec des mécaniques rythmiques. Cette expérience a renforcé mes compétences en choix et utilisation de bibliothèques dédiées aux jeux vidéo sur Godot (AC 6), en travail collaboratif (AC 10) et en optimisation des performances (AC 4)."
                  ghLink="https://github.com/Nolucci/CGJ2025"
                  demoLink="https://nolucci.itch.io/chat-pitre-musical"
                  projectLink="/project/ChatPitreMusical"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={WispMadness}
                  isBlog={false}
                  title="Wisp Madness"
                  description="Création d'un jeu vidéo basé sur la manipulation des éléments météorologiques pour résoudre des énigmes. Ce projet a consolidé mes compétences en conception de mécaniques de jeu innovantes (AC 6) et en organisation d’une veille technologique (AC 7)."
                  ghLink="https://github.com/LokiAquila/WispMadness"
                  demoLink="https://nolucci.itch.io/wisp-madness"
                  projectLink="/project/WispMadness"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={WeatherWizardry}
                  isBlog={false}
                  title="Weather Wizardry"
                  description="Création d'un jeu vidéo basé sur la manipulation des éléments météorologiques pour résoudre des énigmes. Ce projet a consolidé mes compétences en conception de mécaniques de jeu innovantes (AC 6) et en organisation d’une veille technologique (AC 7)."
                  demoLink="https://nolucci.itch.io/weather-wizardry"
                  projectLink="/project/WeatherWizardry"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={ndi}
                  isBlog={false}
                  title="Nuit de l'Info"
                  description="Participation à la Nuit de l'Info, un hackathon national où des équipes d'étudiants développent des applications innovantes en une nuit. Cette expérience a renforcé mes compétences en travail collaboratif (AC 10), en veille technologique (AC 7) et en compréhension des enjeux de l’économie de l’innovation numérique (AC 8)."
                  ghLink="https://gitlabinfo.iutmontp.univ-montp2.fr/franceskinn/ndi-2023"
                  projectLink="/project/NDI"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={salt}
                  isBlog={false}
                  title="S.Alt"
                  description="S.Alt est une application de gestion de stages et d'alternances pour l'IUT de Montpellier-Sète. Ce projet m'a permis d’approfondir mes compétences en choix et utilisation de bibliothèques dédiées (AC 6, Symfony), en intégration de solutions en production (AC 3) et en anticipation des résultats de diverses métriques (AC 4)."
                  ghLink="https://gitlabinfo.iutmontp.univ-montp2.fr/sae-semestre-31/salt.git"
                  projectLink="/project/SAlt"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={rail}
                  isBlog={false}
                  title="Les Aventuriers des Rails"
                  description="Réalisation d'une application simulant le jeu 'Les Aventuriers du Rail', mettant en œuvre des structures de données avancées pour la gestion des graphes. Ce projet a renforcé mes compétences en analyse et justification du comportement du code (AC 5), en choix de bibliothèques adaptées (AC 6) et en algorithmie avancée."
                  ghLink="https://gitlabinfo.iutmontp.univ-montp2.fr/ihm/archives/etu/delucae-franceskinn-oubramk/railsihm"
                  projectLink="/project/AventurierDesRails"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={mastermind}
                  isBlog={false}
                  title="Mastermind"
                  description="Création d'une version numérique du jeu de logique 'Mastermind', avec une interface utilisateur intuitive et des fonctionnalités avancées. Ce projet m'a permis de profiler et analyser le comportement du code (AC 5) et d’optimiser ses performances (AC 4)."
                  ghLink="https://github.com/Nolucci/MasterMind"
                  projectLink="/project/Mastermind"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={serveur}
                  isBlog={false}
                  title="Serveur"
                  description="Mise en place et administration d'un serveur dédié pour héberger diverses applications web, assurant la sécurité et la fiabilité des services. Ce projet a renforcé mes compétences en gestion de l'infrastructure serveur et en intégration de solutions en production (AC 3)."
                  projectLink="/project/Serveur"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={escapeGame}
                  isBlog={false}
                  title="Escape Game"
                  description="Conception et développement d'un site de jeu d'évasion immersif (escape game), combinant des énigmes complexes et une narration captivante. Ce projet a renforcé mes compétences en choix et utilisation de bibliothèques web (AC 6) et en organisation d’une veille numérique (AC 7)."
                  ghLink="https://github.com/Nolucci/Grizly-SAE1.git"
                  projectLink="/project/EscapeGame"
              />
            </Col>

          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
