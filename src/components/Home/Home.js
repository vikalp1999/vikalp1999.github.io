import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import Type from "./Type";

function Home() {
  return (
    <section id="home">
      <Container fluid className="home-section" >
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
               Hello There...{" "}
               
              </h1>

              <h1 className="heading-name">
              I am
                <strong className="main-name"> Vikalp Shandialya</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
     
    </section>
  );
}

export default Home;
