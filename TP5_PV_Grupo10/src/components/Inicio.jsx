import React from 'react';
import { Container } from 'react-bootstrap';
import NavbarMenu from './NavbarMenu';

function Inicio() {
    
    return(
        <>
            <Container className='text-center mt-5'>
                <h1>Bienvenido</h1>
            </Container>
            <NavbarMenu/>
        </>
    );
};

export default Inicio;