import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Inicio() {
    
    return(
        <>
            <Container className='text-center mt-5'>
                <Row>
                    <Col>
                        <section>
                            <h3>Seccion de Noticias</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo saepe, dignissimos quasi aliquid aliquam laudantium incidunt pariatur. Impedit ab sequi quia cum adipisci delectus pariatur magnam quisquam quasi molestiae?</p>
                        </section>
                    </Col>

                    <Col>
                        <section>
                            <h3>Plataforma</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium sunt accusantium quasi nemo, facilis voluptates voluptatem dolorum fugit vel reiciendis earum ipsum, exercitationem maiores fugiat quaerat, eum numquam ipsam?</p>
                        </section>
                    </Col>
                </Row>
            </Container>
           
        </>
    );
};

export default Inicio;