
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
// import './index.css'; // Descomenta si tienes un archivo CSS global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envuelve toda tu App con BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);