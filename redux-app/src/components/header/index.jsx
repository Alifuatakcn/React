import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import DarkModeSwitch from "../dark-mode-switch";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand href="#home">REAL ESTATE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <DarkModeSwitch/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
