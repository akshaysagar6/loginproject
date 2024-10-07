import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './navbarcomp.css'

function NavbarComponent() {
    return (
        <Navbar className="custom-navbar" expand="lg"> {/* Apply custom styles */}
            <Container>
                <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Login
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/signup" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Signup
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
