// src/components/DetalleAlumno.jsx
import React, { useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';

function DetalleAlumno({ alumnosActivos, alumnosEliminados }) {
    const { lu } = useParams();
    const navigate = useNavigate();

    // Verificación de props al inicio de la función
    const activeStudents = Array.isArray(alumnosActivos) ? alumnosActivos : [];
    const deletedStudents = Array.isArray(alumnosEliminados) ? alumnosEliminados : [];

    useEffect(() => {
        console.log('DetalleAlumno - Props recibidas en useEffect:');
        console.log('alumnosActivos (en useEffect):', activeStudents);
        console.log('alumnosEliminados (en useEffect):', deletedStudents);
        console.log('LU de la URL (en useEffect):', lu);
    }, [activeStudents, deletedStudents, lu]);

    let alumno = null;
    let isAlumnoActivo = false; // Nueva bandera para saber si es un alumno activo

    // Intentamos encontrar el alumno en la lista de activos
    alumno = activeStudents.find(a => a.lu === lu);
    if (alumno) {
        isAlumnoActivo = true; // Si se encuentra en activos, la bandera es true
    }

    // Si no se encuentra en activos, intentamos en la lista de eliminados
    if (!alumno) {
        alumno = deletedStudents.find(a => a.lu === lu);
        // isAlumnoActivo ya es false si llegó aquí
    }

    if (!alumno) {
        return (
            <Container className="my-5 text-center">
                <h2>Alumno no encontrado</h2>
                <p>El alumno con LU "{lu}" no existe o ha sido eliminado.</p>
                <Button variant="secondary" onClick={() => navigate('/alumnos')}>
                    Volver al Listado de Alumnos
                </Button>
            </Container>
        );
    }

    return (
        <Container className="my-5">
            <Card>
                <Card.Header as="h2">Detalle de Alumno: {alumno.nombre} {alumno.apellido}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>Libreta Universitaria (LU):</strong> {alumno.lu}<br/>
                        <strong>Nombre:</strong> {alumno.nombre}<br/>
                        <strong>Apellido:</strong> {alumno.apellido}<br/>
                        <strong>Curso:</strong> {alumno.curso}<br/>
                        <strong>Email:</strong> {alumno.email}<br/>
                        <strong>Domicilio:</strong> {alumno.domicilio}<br/>
                        <strong>Teléfono:</strong> {alumno.telefono}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate('/alumnos')}>
                        Volver al Listado Principal
                    </Button>
                    {isAlumnoActivo && ( 
                        <Button as={Link} to={`/alumnos/${alumno.lu}/editar`} variant="warning" className="ms-2">
                            Editar
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default DetalleAlumno;