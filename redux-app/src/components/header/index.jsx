import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import DarkModeSwitch from "../dark-mode-switch";
import { useSelector } from "react-redux";

const Header = () => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <Navbar expand="lg" className={darkMode ? "bg-dark border-bottom": "bg-info"}>
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

          <div>
            <DarkModeSwitch />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;