import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "./Images/Logo.png";
import { Container, Navbar, Nav, Form, Offcanvas } from "react-bootstrap";
import { MdAccountBox } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { LinkContainer } from "react-router-bootstrap";
import React, { useState } from "react";

function Navbars({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Navbars">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand href="Home">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Form.Control
                className="m-auto"
                type="text"
                placeholder="Not working yet....."
              />
            </Nav>

            <Nav>
              <LinkContainer to="/">
                <Nav.Link href="#home">
                  <HiHome size={40} />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/SignUp">
                <Nav.Link href="#account">
                  <MdAccountBox size={40} />
                </Nav.Link>
              </LinkContainer>
              <Nav.Link>
                <FaShoppingCart
                  className="Cart"
                  size={40}
                  onClick={handleShow}
                />
              </Nav.Link>

              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>In je winkelmandje</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="innerCart">
                    <FaShoppingCart size={70} />{" "}
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
