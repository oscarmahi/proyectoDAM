import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Alumnos from './pages/Alumnos';
import Axios from 'axios';
import Inicioa from './pages/Inicioa';
import { SesionContextProvider } from './context/sesionContext';
//import Login from './pages/Login';


//Configuracion para Axios para no tener que poner toda la URL cada vez que hagamos una peticion
//Axios.interceptors.request.use(function(config){
//  config.url=`${process.env.REACT_APP_API_BASE_URL}${config.url}`;
//  config.url=`${config.url}`;
//  return config;
//})

function App() {

  //const usuario = 'Oscar';

  //      < created && Redirect to = './pages/Home'/>

  return (

    /*<ModalContextProvider> Esto se pondría aqui si lo fueramos a usar en toda la App*/
    <SesionContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicioa" element={<Inicioa />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/alumnos" element={<Alumnos />} />

          {/*<Route path="/login" element={<Login />} />*/}
        </Routes>
      </BrowserRouter>
    </SesionContextProvider>

    /*<ModalContextProvider/> */
  );
}

export default App;
