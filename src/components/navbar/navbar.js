import React from "react";
import "./navbar.scss";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return(
    <Navbar className="fixed-top nav">
      <Navbar.Brand href="#about">FD</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Tech</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
