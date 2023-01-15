import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineSetting,
  AiOutlineFilePdf,
  AiOutlineUser

} from "react-icons/ai";
import {MdOutlineContactPhone} from "react-icons/md"
import { BiDonateHeart } from "react-icons/bi";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
const [nav,setNav]=useState(false)
  window.addEventListener("scroll", scrollHandler);
  const togglenav=()=>{
    setNav(!nav)
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
             
                <AiOutlineHome style={{  marginBottom: "2px" ,color:"white"}} /> <a href="#home" style={{marginBottom: "2px", marginTop :"20px" ,color:"white",textDecoration:"none"}}  onClick={togglenav}>Home</a>
              
            </Nav.Item>
            <Nav.Item>
             
             <AiOutlineUser style={{ marginBottom: "2px" ,color:"white"}} /><a href="#About" style={{ marginBottom: "2px" ,color:"white",textDecoration:"none"}}  onClick={togglenav}>About</a> 
          
         </Nav.Item>
        

            <Nav.Item>
             
                <AiOutlineSetting style={{ marginBottom: "2px" ,color:"white"}} /><a href="#skills" style={{ marginBottom: "2px" ,color:"white",textDecoration:"none"}}  onClick={togglenav}>Skills</a> 
             
            </Nav.Item>

            <Nav.Item>
              
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px",color:"white" }}
                />{" "}
                <a href="#project" style={{ marginBottom: "2px" ,color:"white",textDecoration:"none"}} onClick={togglenav}
                >Projects</a>
              
            </Nav.Item>
            <Nav.Item>
             
             <MdOutlineContactPhone style={{ marginBottom: "2px" ,color:"white"}} /><a href="#contact" style={{ marginBottom: "2px" ,color:"white",textDecoration:"none",marginLeft:"5px"}}  onClick={togglenav}>Contact</a> 
          
         </Nav.Item>
            
            <Nav.Item>
             
                < AiOutlineFilePdf style={{ marginBottom: "2px",color:"white" }} /> <a  href="https://drive.google.com/u/0/uc?id=1O6LTtq5gZtM58X-j_ik10CchQ6WJa_Ch&export=download"  style={{ marginBottom: "2px" ,color:"white",textDecoration:"none"}} >Resume</a>
            
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
