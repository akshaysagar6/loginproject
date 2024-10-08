import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './navbarcomp.css'
import nav_icon from '../../Assets/fast.gif'

function NavbarComponent() {
    return (
        <Navbar className="custom-navbar" expand="lg"> {/* Apply custom styles */}
            <Container>
            <Navbar.Brand as={Link} to="/" >
                <img 
                    src={nav_icon}
                    alt="My App Logo" 
                    style={{ width:'40px', height: '40px',color:'red',marginTop:'-10px',marginRight:'10px'}} // Adjust height as needed
                />MY APP
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white'}}/>
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
