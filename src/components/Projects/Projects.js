import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import TheGeekly from "../../Assets/Projects/TheGeekly.png";
import Brightline from "../../Assets/Projects/brightline.png"
import Shaplink from "../../Assets/Projects/shapelink.png";
import yoox from "../../Assets/Projects/yoox.png";

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
              imgPath={Brightline}
              isBlog={false}
              title="Brightline"
              description="Brightline is the first behavioral health solution designed specifically to support children and families with whatever tough stuff they’re dealing with in their busy lives.

              With innovative technology, evidence-based care, and support for the whole family at every step, Brightline is transforming the care experience for families as we know it."
              techstack="Javascript | React | Chakra-Ui"
              ghLink="https://github.com/vikalp1999/naughty-wind-121"
              demoLink="https://dainty-pavlova-3db9fb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shaplink}
              isBlog={false}
              title="ShapeLink"
              description="Twiik App is a digital fitness log and coach that's always with you. As a member you can log your workouts, track results, follow programs, boost and challenge friends and join social groups for motivation.With The Twiik app you can easily find lots of workout programs to follow. Find the program that suits your needs."
              techstack="Javascript | CSS | HTML"
              ghLink="https://github.com/vikalp1999/cosmic-toy-4083"
              demoLink="https://dainty-pavlova-3db9fb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yoox}
              isBlog={false}
              title="Yoox"
              techstack="Javascript | CSS | HTML"
              description="New Arrivals Every Week to Reinvigorate your Wardrobe, Make the Most of it Now. Shop the Latest Designer Savings Now! A Wide Array of Brands. Expert Customer Care. Secure Payment. Categories: Men's Collection, Women's Collection, Kids' Collection."
              ghLink="https://github.com/vikalp1999/delightful-approval-9332"
              demoLink="https://jazzy-pony-5541f4.netlify.app/men.html"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isComp={true}
              title="Weather app"
              description="Build an weather App along with live Map & 7days forecast."
              ghLink="https://github.com/masai-course/vikalp_fw20_0240/tree/master/unit-3/sprint-2/day-3/assignments"
              demoLink="https://marvelous-cobbler-95615b.netlify.app/"
            />
          </Col> */}

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather app"
              description="Build an weather App along with live Map & 7days forecast."
              techstack="Javascript | CSS | HTML"
               ghLink="https://github.com/masai-course/vikalp_fw20_0240/tree/master/unit-3/sprint-2/day-3/assignments"
              demoLink="https://marvelous-cobbler-95615b.netlify.app/" 
            />
          </Col> 

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
