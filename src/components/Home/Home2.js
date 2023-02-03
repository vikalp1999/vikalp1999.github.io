import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="About">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             
            </h1>
            <p className="home-about-body">
              <br/>
              <br/>
              <br/>
             My Name is Vikalp Shandialya
              <br />I am a Full Stack Web Developer living in Kota,Rajasthan.
              I started learning web development in 2022.I am always motivated to learn 
              new things.I am a Kabbadi player also and  I like to watch movies and webseries.
              <br />
              <br/>
               Phone no:-+919462531637
               <br/>
               Email :- shandilyavikalp@gmail.com
               <br/>

             
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{marginBottom:"80px"}}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"  />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
