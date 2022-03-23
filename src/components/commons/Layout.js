import React, { useContext } from 'react';
import { ModalContextProvider } from '../../context/modalContext';
import { SesionContext } from '../../context/sesionContext';
import Header from './Header';
import MenuA from './MenuA';
import MenuD from './MenuD';
import MenuN from './MenuN';
import MenuE from './MenuE';

const Layout = (props) => {

    const { sesion } = useContext(SesionContext);

    if (sesion === 'administrador') {
        return (
            /*Esto lo pongo aqui porque lo voy a usar en todas las pantallas del Layout. Se podía haber puesto en App */
            <ModalContextProvider>
                <div>
                    <Header />
                    <br />
                    <div className="container">
                        <div className='columns'>
                            <div className='column is-one-quarter'>
                                <MenuA />
                            </div>
                            <div className='column'>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </ModalContextProvider>
        );
    } else if (sesion === 'docente'){
        return (
            /*Esto lo pongo aqui porque lo voy a usar en todas las pantallas del Layout. Se podía haber puesto en App */
            <ModalContextProvider>
                <div>
                    <Header />
                    <br />
                    <div className="container">
                        <div className='columns'>
                            <div className='column is-one-quarter'>
                                <MenuD />
                            </div>
                            <div className='column'>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </ModalContextProvider>
        );
    } else if (sesion === 'alumno'){
        return (
            /*Esto lo pongo aqui porque lo voy a usar en todas las pantallas del Layout. Se podía haber puesto en App */
            <ModalContextProvider>
                <div>
                    <Header />
                    <br />
                    <div className="container">
                        <div className='columns'>
                            <div className='column is-one-quarter'>
                                <MenuN />
                            </div>
                            <div className='column'>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </ModalContextProvider>
        );
    } else if (sesion === 'empresa'){
        return (
            /*Esto lo pongo aqui porque lo voy a usar en todas las pantallas del Layout. Se podía haber puesto en App */
            <ModalContextProvider>
                <div>
                    <Header />
                    <br />
                    <div className="container">
                        <div className='columns'>
                            <div className='column is-one-quarter'>
                                <MenuE />
                            </div>
                            <div className='column'>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </ModalContextProvider>
        );
    } else{
        return null
    }
}

export default Layout;
