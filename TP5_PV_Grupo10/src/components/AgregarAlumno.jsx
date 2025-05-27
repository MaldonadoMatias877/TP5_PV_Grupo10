import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Agrega 'onAgregar' a las props que recibe el componente
function AgregarAlumno({ onAgregar }) { // <-- ¡Aquí el cambio!
  const navigate = useNavigate();

  const [alumno, setAlumno] = useState({
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno({
      ...alumno,
      [name]: value,
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!alumno.lu || !alumno.nombre || !alumno.apellido || !alumno.email) {
      setError('Por favor, completa todos los campos obligatorios (Lu, Nombre, Apellido, Email).');
      return;
    }

    // --- ¡Aquí el cambio! Llama a la función onAgregar para pasar el nuevo alumno a App.jsx ---
    if (onAgregar) { // Asegúrate de que la prop exista antes de llamarla
      onAgregar(alumno); // Pasa el objeto 'alumno' al padre (App.jsx)
    }

    setSuccess('¡Alumno agregado exitosamente!');
    setError('');

    // Redirigir al listado de alumnos después de un breve retraso
    setTimeout(() => {
      navigate('/alumnos');
      // Opcional: limpiar el formulario después de la redirección
      setAlumno({
        lu: '', nombre: '', apellido: '', curso: '', email: '',
        domicilio: '', telefono: '',
      });
    }, 1500);
  };

  return (
    <Container className="my-5">
      <h2>Agregar Nuevo Alumno</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formLu">
          <Form.Label>Libreta Universitaria (Lu)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: APU00999"
            name="lu"
            value={alumno.lu}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre"
            name="nombre"
            value={alumno.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el apellido"
            name="apellido"
            value={alumno.apellido}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCurso">
          <Form.Label>Curso</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Tercero"
            name="curso"
            value={alumno.curso}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="ejemplo@mail.com"
            name="email"
            value={alumno.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDomicilio">
          <Form.Label>Domicilio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Av. Congreso 125"
            name="domicilio"
            value={alumno.domicilio}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Ej: 3884895999"
            name="telefono"
            value={alumno.telefono}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="me-2">
          Guardar Alumno
        </Button>
        <Button variant="secondary" onClick={() => navigate('/alumnos')}>
          Cancelar
        </Button>
      </Form>
    </Container>
  );
}

export default AgregarAlumno;