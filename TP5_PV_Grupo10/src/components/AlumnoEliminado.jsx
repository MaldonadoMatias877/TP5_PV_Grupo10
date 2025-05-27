// src/components/AlumnoEliminado.jsx
import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function AlumnoEliminado({ alumnosEliminados, onRecuperar }) {
  const navigate = useNavigate();

  const handleConfirmRecuperar = (lu, nombre, apellido) => {
    const confirmacion = window.confirm(`¿Estás seguro de que quieres recuperar a ${nombre} ${apellido} (LU: ${lu})?`);
    if (confirmacion) {
      onRecuperar(lu);
    }
  };

  // Aseguramos que alumnosEliminados sea siempre un array
  const displayedAlumnos = Array.isArray(alumnosEliminados) ? alumnosEliminados : [];

  return (
    <Container className="my-5">
      <h2>Alumnos Eliminados</h2>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="secondary" onClick={() => navigate('/alumnos')}>
          Volver al Listado de Alumnos Activos
        </Button>
      </div>

      {displayedAlumnos.length > 0 ? ( // Usamos displayedAlumnos aquí
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {displayedAlumnos.map((alumno) => ( // Y aquí
              <tr key={alumno.lu}>
                <td>{alumno.lu}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>
                  <Button as={Link} to={`/alumnos/${alumno.lu}`} variant="info" size="sm" className="me-2">
                    Ver
                  </Button>
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => handleConfirmRecuperar(alumno.lu, alumno.nombre, alumno.apellido)}
                  >
                    Recuperar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No hay alumnos eliminados.</p>
      )}
    </Container>
  );
}

export default AlumnoEliminado;