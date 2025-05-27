// src/components/EditarAlumno.jsx
import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

// Recibe la lista completa de alumnos y la función onEditar como props
function EditarAlumno({ alumnos, onEditar }) {
    const { lu } = useParams(); // Obtiene el LU del alumno desde la URL
    const navigate = useNavigate();

    // Estado local para el formulario de edición
    const [alumnoEditado, setAlumnoEditado] = useState({
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

    // useEffect para cargar los datos del alumno cuando el componente se monta
    // o cuando cambia el 'lu' de la URL o la lista de 'alumnos'
    useEffect(() => {
        const alumnoAEditar = alumnos.find(a => a.lu === lu);
        if (alumnoAEditar) {
            setAlumnoEditado(alumnoAEditar); // Precarga el formulario con los datos del alumno
        } else {
            // Si el alumno no se encuentra, podrías redirigir o mostrar un error
            navigate('/alumnos'); // Opcional: redirigir si el LU no existe
        }
    }, [lu, alumnos, navigate]); // Dependencias: lu, alumnos, navigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAlumnoEditado({
            ...alumnoEditado,
            [name]: value,
        });
        setError(''); // Limpiar errores al cambiar un campo
        setSuccess(''); // Limpiar éxito al cambiar un campo
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación básica (puedes añadir más si es necesario)
        if (!alumnoEditado.lu || !alumnoEditado.nombre || !alumnoEditado.apellido || !alumnoEditado.email) {
            setError('Por favor, completa todos los campos obligatorios.');
            return;
        }

        // Llama a la función onEditar que viene de App.jsx
        if (onEditar) {
            onEditar(alumnoEditado);
            setSuccess('¡Alumno actualizado exitosamente!');
            setError('');
            // Redirigir al listado de alumnos o a la vista de detalles del alumno editado
            setTimeout(() => {
                navigate(`/alumnos/${alumnoEditado.lu}`); // Redirige a la vista de detalle
            }, 1500);
        } else {
            setError('La función de edición no está disponible.');
        }
    };

    return (
        <Container className="my-5">
            <h2>Editar Alumno: {alumnoEditado.nombre} {alumnoEditado.apellido}</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formLu">
                    <Form.Label>Libreta Universitaria (Lu)</Form.Label>
                    <Form.Control
                        type="text"
                        name="lu"
                        value={alumnoEditado.lu}
                        onChange={handleChange}
                        required
                        readOnly // El LU no debería ser editable
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa el nombre"
                        name="nombre"
                        value={alumnoEditado.nombre}
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
                        value={alumnoEditado.apellido}
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
                        value={alumnoEditado.curso}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="ejemplo@mail.com"
                        name="email"
                        value={alumnoEditado.email}
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
                        value={alumnoEditado.domicilio}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTelefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Ej: 3884895999"
                        name="telefono"
                        value={alumnoEditado.telefono}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="me-2">
                    Guardar Cambios
                </Button>
                <Button variant="secondary" onClick={() => navigate(`/alumnos/${alumnoEditado.lu}`)}>
                    Cancelar
                </Button>
            </Form>
        </Container>
    );
}

export default EditarAlumno;