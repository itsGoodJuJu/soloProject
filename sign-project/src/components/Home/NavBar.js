import React from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark" expand="sm" className="bg-body-tertiary">
            <Navbar.Brand href="/home">Handy-Dandy</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <NavDropdown title="Learn" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/spell">Spelling Practice</NavDropdown.Item>
                    <NavDropdown.Item href="/study">Flashcards</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/quiz">
                    Quiz Game
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/donate">Donate</Nav.Link>
                </Nav>
        </Navbar>
    </>
  )
}

export default NavBar