import React from "react";
import "./navbar.scss";
import { Navbar, Nav } from "react-bootstrap";
import { links, newTab } from "../../Links";

const NavBar = () => {
  return(
    <Navbar variant="dark" fixed="top" className="navigation">
      <Navbar.Brand href="#about" className="nav-links brand">FD</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#about" className="nav-links">About</Nav.Link>
        <Nav.Link href="#skills" className="nav-links">Tech</Nav.Link>
        <Nav.Link href="#projects" className="nav-links">Projects</Nav.Link>
        <Nav.Link href={links.resume} target={newTab} className="nav-links">Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
