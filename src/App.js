import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Alumnos from './pages/Alumnos';
//import Axios from 'axios';
import Inicio from './pages/Inicio';
import { SesionContextProvider } from './context/sesionContext';
import Centros from './pages/Centros';
import Cursos from './pages/Cursos';
import CursosC from './pages/CursosC';
import Proyectos from './pages/Proyectos';
import ProyectosC from './pages/ProyectosC';
import Categorias from './pages/Categorias';
import Tecnologias from './pages/Tecnologias';
import CentrosC from './pages/CentrosC';
//import Login from './pages/Login';


//Configuracion para Axios para no tener que poner toda la URL cada vez que hagamos una peticion
//Axios.interceptors.request.use(function(config){
//  config.url=`${process.env.REACT_APP_API_BASE_URL}${config.url}`;
//  config.url=`${config.url}`;
//  return config;
//})

function App() {

  return (
    /*<ModalContextProvider> Esto se pondría aqui si lo fueramos a usar en toda la App*/
    <SesionContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/centros" element={<Centros />} />
          <Route path="/centrosC" element={<CentrosC />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursosC" element={<CursosC />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectosC" element={<ProyectosC />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          {/*<Route path="/login" element={<Login />} />*/}
        </Routes>
      </BrowserRouter>
    </SesionContextProvider>

    /*<ModalContextProvider/> */
  );
}

export default App;
