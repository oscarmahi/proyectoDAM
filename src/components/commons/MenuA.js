import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    return ( 
        <nav className="panel">
            <p className="panel-heading">Menu Administrador</p>
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
                <Link to="/centros" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-city"></i>
                    </span>
                    <span>
                        Centros
                    </span>
                </Link>         
            </div>
            <div className="panel-block">
                <Link to="/cursos" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-puzzle-piece"></i>
                    </span>
                    <span>
                        Cursos
                    </span>
                </Link>         
            </div>            
            <div className="panel-block">
                <Link to="/proyectos" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-book"></i>
                    </span>
                    <span>
                        Proyectos
                    </span>
                </Link>         
            </div>                    
            <div className="panel-block">
                <Link to="/clientes" className="button is-fullwidth">
                    <span className="icon">
                        <i className="fas fa-users"></i>
                    </span>
                    <span>
                        Clientes
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
 
export default Menu;