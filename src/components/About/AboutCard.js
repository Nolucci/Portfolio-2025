import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Salut tout le monde ! Je viens du sud de la France : <span className="blue">Montpellier.</span>
              <br />
              <br />
              Passionné par le développement web et les nouvelles technologies, j'adore explorer
              les dernières tendances en programmation et partager mes découvertes avec la communauté.
              <br />
              <br/>
              Dans mon temps libre, j'aime faire de la musique et de la robotique et me plonger dans
              de nouveaux projets intéressants. La psychologie et la sociologie sont deux autres de mes passions !
              <br />
              <br />
              Voici quelques-unes de mes activités favorites :
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Développement de mes projets personnels
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> En apprendre plus sur les nouvelles technologies
              </li>
              <br />
              <li className="about-activity">
                <ImPointRight /> En apprendre plus sur l'Humain
              </li>
            </ul>
            <br />
            <p className="blockquote-footer" >
              "La technologie seule ne suffit pas."
            </p>
            <footer style={{ color: "rgb(155 126 172)" }} className="fst-italic">Steve JOBS</footer>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
