import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Importa todos los componentes necesarios
import NavbarMenu from './components/NavbarMenu';
import Inicio from './components/Inicio';
import ListadoAlumnos from './components/ListadoAlumnos';
import AgregarAlumno from './components/AgregarAlumno';
import DetalleAlumno from './components/DetalleAlumno';
import EditarAlumno from './components/EditarAlumno';
import AlumnoEliminado from './components/AlumnoEliminado';
import AcercaDeNosotros from './components/AcercaDeNosotros';


// Componente Layout para la barra de navegación y el contenido de la ruta
function Layout() {
  return (
    <>
      <NavbarMenu />
      <div className='app-content-wrapper'>
        <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
      </div>
    </>
  );
}

function App() {
  const [alumnosActivos, setAlumnosActivos] = useState([]);
  const [alumnosEliminados, setAlumnosEliminados] = useState([]);

  const handleAgregarAlumno = (nuevoAlumno) => {
    setAlumnosActivos((prevAlumnos) => [...prevAlumnos, nuevoAlumno]);
    console.log('Alumno agregado a alumnosActivos:', nuevoAlumno);
  };

  const handleEliminarAlumno = (lu) => {
    const alumnoAEliminar = alumnosActivos.find(alumno => alumno.lu === lu);

    if (alumnoAEliminar) {
      setAlumnosActivos((prevAlumnos) => prevAlumnos.filter(alumno => alumno.lu !== lu));
      setAlumnosEliminados((prevEliminados) => [...prevEliminados, alumnoAEliminar]);
      console.log('Alumno eliminado (movido a lista de eliminados):', alumnoAEliminar.nombre, alumnoAEliminar.apellido);
    }
  };

  const handleEditarAlumno = (alumnoActualizado) => {
    setAlumnosActivos((prevAlumnos) =>
      prevAlumnos.map((alumno) =>
        alumno.lu === alumnoActualizado.lu ? alumnoActualizado : alumno
      )
    );
    console.log('Alumno editado:', alumnoActualizado);
  };

  const handleRecuperarAlumno = (lu) => {
    const alumnoARecuperar = alumnosEliminados.find(alumno => alumno.lu === lu);

    if (alumnoARecuperar) {
      setAlumnosEliminados((prevEliminados) => prevEliminados.filter(alumno => alumno.lu !== lu));
      setAlumnosActivos((prevAlumnos) => [...prevAlumnos, alumnoARecuperar]);
      console.log('Alumno recuperado (movido a lista de activos):', alumnoARecuperar.nombre, alumnoARecuperar.apellido);
    }
  };

  return (
    <Routes>
      {/* La ruta principal ahora usa el Layout */}
      <Route path="/" element={<Layout />}>
        {/* Los componentes específicos de cada página se renderizan dentro del Outlet del Layout */}
        <Route index element={<Inicio />} /> {/* index renderiza Inicio cuando la ruta es exactamente "/" */}
        
        <Route path="alumnos" element={
          <>
            <div className="d-flex justify-content-end my-3 me-3">
              <Button as={Link} to="/alumnos/nuevo" variant="success" className="me-2">
                Agregar Nuevo Alumno
              </Button>
              <Button as={Link} to="/alumnos/eliminados" variant="secondary">
                Ver Alumnos Eliminados
              </Button>
            </div>
            <ListadoAlumnos alumnos={alumnosActivos} onEliminar={handleEliminarAlumno} />
          </>
        } />

        <Route path="alumnos/nuevo" element={<AgregarAlumno onAgregar={handleAgregarAlumno} />} />

        <Route path="alumnos/:lu" element={
          <DetalleAlumno
            alumnosActivos={Array.isArray(alumnosActivos) ? alumnosActivos : []}
            alumnosEliminados={Array.isArray(alumnosEliminados) ? alumnosEliminados : []}
          />
        } />

        <Route path="alumnos/:lu/editar" element={<EditarAlumno alumnos={alumnosActivos} onEditar={handleEditarAlumno} />} />

        <Route path="alumnos/eliminados" element={
          <AlumnoEliminado alumnosEliminados={Array.isArray(alumnosEliminados) ? alumnosEliminados : []} onRecuperar={handleRecuperarAlumno} />
        } />

        <Route path="alumnos/nuevo" element={<AgregarAlumno />} />
        <Route path="acerca" element={<AcercaDeNosotros />} />
      </Route>
    </Routes>
  );
}

export default App;