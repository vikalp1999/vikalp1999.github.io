import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Chargenow from "../../Assets/Projects/chargenow.png"
import Hubspot from "../../Assets/Projects/hubspot.png";
import IMDB from "../../Assets/Projects/IMDB.png";
import Shapelink from "../../Assets/Projects/shapelink.png";
import Next from "../../Assets/Projects/next.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chargenow}
              isBlog={false}
              title="Charge Now"
              description="Charge Now is a bulk mailing web service where user can create a mailing list and send mails to all all of those emails with just one click, with realtime status for mails sent. This project also has admin access where the admin can add or remove service plans that the users can buy."
              techstack=" Next JS | JavaScript | Express JS | Node JS | Nodemailer | MongoDB | JSON Web Token | Socket.io | Chakra UI | Redux"
              ghLink="https://github.com/vikalp1999/abandoned-reaction-8426"
              demoLink="https://abandoned-reaction-8426-dhamisir.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IMDB}
              isBlog={false}
              title="IMDB"
              techstack="React"
              description="IMDb (an abbreviation of Internet Movie Database) is an online database of information related to films, television series, home videos, video games, and streaming content online – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews."
              ghLink="https://github.com/vikalp1999/imdbClone"
              demoLink="https://imdb-clone-d298iy9cz-vikalp1999.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hubspot}
              isBlog={false}
              title="Hubspot"
              techstack=" React JS | JavaScript | Express JS | Node JS | MongoDB | JSON Web Token | Chakra UI | Redux                      "
              description="HubSpot is a Cloud-Based CRM. HubSpot is a Software platform designed to help Company market and sell more effectively "
              ghLink="https://github.com/vikalp1999/HubSpot.com"
              demoLink="https://animated-narwhal-cecc2b.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Next}
              isBlog={false}
              title="Next.in"
              description="NextIn brings all your tasks, teammates, and tools together
              Collaborate with your team on any project with your tasks, and schedule all in one place.
              "
              techstack="Next JS | JavaScript | Express JS | Node JS | MongoDB | JSON Web Token | Chakra UI | Redux "
              ghLink="https://github.com/vikalp1999/cosmic-toy-4083"
              demoLink="https://dainty-pavlova-3db9fb.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shapelink}
              isBlog={false}
              title="ShapeLink"
              description="Twiik App is a digital fitness log and coach that's always with you. As a member you can log your workouts, track results, follow programs, boost and challenge friends and join social groups for motivation.With The Twiik app you can easily find lots of workout programs to follow. Find the program that suits your needs."
              techstack="Javascript | CSS | HTML"
              ghLink="https://github.com/vikalp1999/cosmic-toy-4083"
              demoLink="https://dainty-pavlova-3db9fb.netlify.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
