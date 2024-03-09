import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projet1 from "../../Assets/Projects/projet1.png";
import projet2 from "../../Assets/Projects/projet2.png";
import projet3 from "../../Assets/Projects/projet3.png";
import projet4 from "../../Assets/Projects/projet4.png";
import projet5 from "../../Assets/Projects/projet5.png";
import projet6 from "../../Assets/Projects/projet6.png";
import githubimg from "../../Assets/github.png";
import { Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs"


const handleClick = () => {
  window.open("https://github.com/TheAgentMaro", "_blank");
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on .
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projet1}
              isAvailable={false}
              title="Supplier Management System"
              description="A web application that allows the management of suppliers and their products. It also allows the management of orders and their status."
              ghLink="https://github.com/TheAgentMaro/Gestion-Fournisseur-Application"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projet6}
              isNotAvailable={true}
              title="BlogoCraft"
              description="The main objective of the BlogoCraft project is to design and develop an innovative blogging platform that offers an exceptional user experience. This platform will enable users to publish, comment on and like their posts, while guaranteeing optimal performance on the client side thanks to a responsive and dynamic user interface, as well as efficient management of posts and server-side authentication."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projet2}
              isNotAvailable={false}
              title="Tower Defense Game 3D Multiplayer"
              description="A 3D multiplayer tower defense game developed with Unity. The game is developed in C# and uses the Photon Unity Networking library for multiplayer."
              ghLink="https://github.com/TheAgentMaro/Tower-Defence-3D-Unity-Final-Project-SUPINFO"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projet3}
              isNotAvailable={false}
              title="Kamon Game"
              description="Kamon is a board game developed in Python and uses the Tkinter library for the GUI."
              ghLink="https://github.com/TheAgentMaro/1Proj-Kamon-Game"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projet4}
              isNotAvailable={true}
              title="Astek Events Website"
              description="Application for managing events and participants. The application is developed in C# and uses the .NET framework for the backend and Razor Pages for the frontend with MVC architecture."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projet5}
              isNotAvailable={true}
              title="Move Information Technology Portfolios Website"
              description="A website for the Move Information Technology company. The website is developed in ReactJS and uses the Bootstrap library for the frontend and the .NET framework for the backend with MVC architecture."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubimg}
              isNotAvailable={false}
              title="More projects on github"
              description="Click on the button below to see more projects on my github."
              ghLink="https://github.com/TheAgentMaro"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
