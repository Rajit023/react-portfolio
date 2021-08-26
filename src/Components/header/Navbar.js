import React from 'react'
import {Navbar,Container,Nav } from 'react-bootstrap';
import Logo from '../../assests/img/r.jpg'
import {Link} from 'react-router-dom'
import "./navbar.style.css";
import {LinkContainer} from 'react-router-bootstrap'


export const TopNavbar = () => {
    return (
 
     <Navbar expand="lg">
  <Container>
    <Link to="/">
    <img src= {Logo}width="100px" alt="my" />
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="ms-auto fs-2 fw-bolder">
        
      <LinkContainer to="/Skills">
        <Nav.Link>Skills</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/projects">
        <Nav.Link>Projects</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/about-me">
        <Nav.Link>About me</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/contact">
        <Nav.Link>Contact</Nav.Link>
        </LinkContainer>


      


       
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   
    )
};

