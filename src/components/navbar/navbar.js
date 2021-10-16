import React from "react";
import "./navbar.scss";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return(
    <Navbar className="fixed-top nav">
      <Navbar.Brand href="#home">FD</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#features">Tech</Nav.Link>
        <Nav.Link href="#pricing">Projects</Nav.Link>
        <Nav.Link href="#contacts">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
