import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Marwen Meddeb </span>
            based in <span className="purple"> Tunis, Tunisia.</span> 
            <br /> I'm a dedicated student engineer with a strong passion for computer science, and I'm always eager to take on new challenges to further develop my skills
            <br />
            Currently, I'm pursuing a Bachelor's degree in Information Systems Management <span className="purple">SUPINFO International University </span> which is located in France.
            <br />
            In addition to my studies, I am also a <span className="purple">Full Stack Developer</span> , specializing in <span className="purple">.Net</span> and <span className="purple">React.js</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you're code works make it better and clean !"{" "}
          </p>
          <footer className="blockquote-footer">Marwen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
