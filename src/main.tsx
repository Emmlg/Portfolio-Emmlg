import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importa las páginas y componentes
import Navbar from './Components/NavBar';
import Footer from './Components/Footer'; // Importa el Footer
import PIndex from './pages/PIndex';
import Experiencia from './pages/Experiencia';
import MyWork from './pages/MyWork';
import Contactame from './pages/Contactame';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navbar /> {/* Navbar se renderiza siempre en la parte superior */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<PIndex />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/mitrabajo" element={<MyWork />} />
          <Route path="/contactame" element={<Contactame />} />
        </Routes>
      </div>
      <Footer /> {/* Footer se renderiza siempre en la parte inferior */}
    </Router>
  </StrictMode>
);
