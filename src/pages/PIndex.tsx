/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes es ahora la forma correcta en v6
import Navbar from '../Components/NavBar';

const App: React.FC = () => {
  return (
    <Router>
        
      <Navbar />
      <div className="container">
        <Routes> {/* Cambié Switch por Routes en React Router v6 *///}
       /*   <Route path="/" />
          <Route path="/experiencia"/>
          <Route path="/mitrabajo" />
          <Route path="/contactame"  />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
*/

import React from 'react';

const PIndex: React.FC = () => {
  return (
    <div>
      <h1>Hola, esta es la página de index</h1>
    </div>
  );
};

export default PIndex;
