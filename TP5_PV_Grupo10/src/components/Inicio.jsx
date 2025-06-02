import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import imagen1 from '../Images/code-1839406_640.jpg';
import imagen2 from '../Images/earth-2254769_640.jpg';
import imagen3 from '../Images/computer-1591018_640.jpg';

function Inicio() {
    return (
        <>
            <div className="mx-auto my-4" style={{ maxWidth: '900px' }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagen1}
                            alt="Imagen-Codigo"
                        />
                        <Carousel.Caption>
                            <h3 style={{ color: 'skyblue', fontWeight: 'bold'}}>Aplicaciones escalables.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagen2}
                            alt="Imagen-mundo-conectado"
                        />
                        <Carousel.Caption>
                            <h3 style={{color: 'red', fontWeight: 'bold'}}>Conexión al mundo.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagen3}
                            alt="Imagen-Segurida-informatica"
                        />
                        <Carousel.Caption>
                            <h3>Seguridad Informática</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <section className="my-5 text-center" style={{ paddingBottom: '5rem' }}>
                <Container>
                    <h2>Mas información</h2>
                    <p>
                        ¿Quieres formar parte de nuestro equipo? Puedes escribirnos por mensaje privado.

                    </p>
                </Container>
            </section>
        </>
    );
}

export default Inicio;
