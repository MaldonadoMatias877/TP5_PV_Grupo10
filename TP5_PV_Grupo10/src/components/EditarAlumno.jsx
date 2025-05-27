import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

function EditarAlumno({ alumnos, onEditar }) {
    const { lu } = useParams(); 
    const navigate = useNavigate();

    
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

    useEffect(() => {
        const alumnoAEditar = alumnos.find(a => a.lu === lu);
        if (alumnoAEditar) {
            setAlumnoEditado(alumnoAEditar); 
        } else {
            navigate('/alumnos'); 
        }
    }, [lu, alumnos, navigate]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAlumnoEditado({
            ...alumnoEditado,
            [name]: value,
        });
        setError(''); 
        setSuccess(''); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

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
                        readOnly 
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