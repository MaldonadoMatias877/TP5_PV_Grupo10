// src/components/NavbarMenu.jsx
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
    return(
        // Quitamos fixed="top". El Navbar ahora fluirá con el documento.
        <Navbar bg='light' expand="md"> {/* <-- ¡Asegúrate de que NO tenga fixed="top"! */}
            <Container className='flex-column align-item-star align-item-md-center'>
                <Navbar.Brand as={Link} to="/">Gestion Academica</Navbar.Brand>

                <div className='w-100 d-flex justify-content-star justify-content-md-center'>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />    
                </div>

                <Navbar.Collapse id='basic-navbar-nav' className='w-100 justify-content-star justify-content-md-center'>
                    <Nav className='d-flex justify-content-center flex-wrap-gap-3'>
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/alumnos">Listado de alumnos</Nav.Link>
                        
                        <Nav.Link as={Link} to="/carreras">Listado de carreras</Nav.Link>
                        <Nav.Link as={Link} to="/acerca">Nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarMenu;