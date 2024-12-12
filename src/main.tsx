import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importa las páginas que se renderizarán en las rutas
import Navbar from './Components/NavBar';  // Asegúrate de importar el Navbar 
import PIndex from './pages/PIndex';
import Experiencia from './pages/experiencia';
import MyWork from './pages/MyWork';
import Contactame from './pages/contactame';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>  
      <Navbar />  {/* El Navbar se renderiza siempre en la parte superior */}
      <Routes>  
      <Route path="/" element={<PIndex />} /> 
      <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/mitrabajo" element={<MyWork />} />
        <Route path="/contactame" element={<Contactame />} />
      </Routes>
    </Router>
  </StrictMode>
);
