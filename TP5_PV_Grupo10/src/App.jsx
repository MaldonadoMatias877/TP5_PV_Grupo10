import { Routes, Route, Router } from 'react-router-dom';
import Inicio from './components/Inicio';
import ListadoAlumnos from './components/ListadoAlumnos';
import ListadoCarreras from './components/ListadoCarreras';
import AcercaDeNosotros from './components/AcercaDeNosotros';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/alumnos" element={<ListadoAlumnos />} />
        <Route path="Carreras" element={<ListadoCarreras />} />
        <Route path="/acerca" element={<AcercaDeNosotros />} />
      </Routes>
  );
}

export default App;
