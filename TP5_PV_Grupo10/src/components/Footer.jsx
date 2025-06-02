import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return(
        <>
            <footer className='bg-light py-3 text-center border-top fixed-footer'>
                <Container>
                    <p className='mb-0 text-muted'>
                        © 2025 UNJu. Todos los derechos reservados.
                    </p>
                </Container>
            </footer>
        </>
    );
};

export default Footer;