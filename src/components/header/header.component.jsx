import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavbarHeader = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor: `#0093E9`
      }}
      variant="dark"
    >
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#pricing" className="text-white mr-3">
            Events
          </Nav.Link>
          <Button variant="success" style={{ border: "2px solid white" }}>
            Create event
          </Button>
        </Nav>
        <Nav className="ml-auto">
          <Button
            variant="none"
            className="mx-2 text-white"
            style={{ border: "2px solid white" }}
          >
            Log In
          </Button>
          <Button
            variant="none"
            className="text-white"
            style={{ border: "2px solid white" }}
          >
            Log Up
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHeader;

