// src/components/ListadoAlumnos.jsx
import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ListadoAlumnos({ alumnos, onEliminar }) {

  const handleConfirmEliminar = (lu, nombre, apellido) => {
    const confirmacion = window.confirm(`¿Estás seguro de que quieres eliminar a ${nombre} ${apellido} (LU: ${lu})?`);

    if (confirmacion) {
      onEliminar(lu);
    }
  };

  return (
    <Container className="my-5">
      <h2>Listado de Alumnos</h2>
      {alumnos && alumnos.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>LU</th><th>Nombre</th><th>Apellido</th><th>Curso</th><th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.lu}>
                <td>{alumno.lu}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>
                  <Button as={Link} to={`/alumnos/${alumno.lu}`} variant="info" size="sm" className="me-2">
                    Ver
                  </Button>
                  <Button as={Link} to={`/alumnos/${alumno.lu}/editar`} variant="warning" size="sm" className="me-2">
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleConfirmEliminar(alumno.lu, alumno.nombre, alumno.apellido)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No hay alumnos registrados. ¡Agrega uno!</p>
      )}
    </Container>
  );
}

export default ListadoAlumnos;