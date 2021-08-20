import React from 'react'
import {Navbar,Container,Nav } from 'react-bootstrap';
import "./navbar.style.css";

export const TopNavbar = () => {
    return (
 
     <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home">Rajit</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto fs-3">
        <Nav.Link href="#home">Skill</Nav.Link>
        <Nav.Link href="#link">Project</Nav.Link>
        <Nav.Link href="#home">Contact</Nav.Link>
        <Nav.Link href="#link">About me</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   
    )
};

