import React from 'react';
import { Link } from 'react-router-dom';

const MenuN = () => {
    return ( 
        <nav className="panel">
            <p className="panel-heading">Menu Alumnos</p>
            <div className="panel-block">
                <Link to="/Inicio" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-home"></i>
                    </span>
                    <span>
                        Inicio
                    </span>
                </Link>
            </div>

            <div className="panel-block">
                <Link to="/alumnos" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-users"></i>
                    </span>
                    <span>
                        Alumnos
                    </span>
                </Link>
            </div>

            <div className="panel-block">
                <Link to="/centrosC" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-city"></i>
                    </span>
                    <span>
                        Centros Consulta
                    </span>
                </Link>         
            </div>
            <div className="panel-block">
                <Link to="/cursosC" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-puzzle-piece"></i>
                    </span>
                    <span>
                        Cursos Consulta
                    </span>
                </Link>         
            </div>            
            <div className="panel-block">
                <Link to="/proyectosC" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-book"></i>
                    </span>
                    <span>
                        Proyectos Consulta
                    </span>
                </Link>         
            </div>       
            <div className="panel-block">
                <Link to="/tecnologias" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-book"></i>
                    </span>
                    <span>
                        Tecnologias
                    </span>
                </Link>         
            </div>       
            <div className="panel-block">
                <Link to="/categorias" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-plane-departure"></i>
                    </span>
                    <span>
                        Categorias Tecnologicas
                    </span>
                </Link>         
            </div>                               
            <div className="panel-block">
                <Link to="/" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-close"></i>
                    </span>
                    <span>
                        Salir
                    </span>
                </Link>         
            </div>                   
        </nav>
     );
}
 
export default MenuN;