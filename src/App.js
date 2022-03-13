import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Proveedores from './pages/Proveedores';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/clientes" element={<Clientes/>} />
        <Route path="/proveedores" element={<Proveedores/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
