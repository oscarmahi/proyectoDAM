import React from 'react';
import { ModalContextProvider } from '../../context/modalContext';
import Header from './Header';
import Menu from './Menu';

const Layout = (props) => {

    return (
        /*Esto lo pongo aqui porque lo voy a usar en todas las pantallas del Layout. Se podía haber puesto en App */
        <ModalContextProvider>
            <div>
                <Header />
                <br />
                <div className="container">
                    <div className='columns'>
                        <div className='column is-one-quarter'>
                            <Menu />
                        </div>
                        <div className='column'>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </ModalContextProvider>
    );
}

export default Layout;
