import React, { useContext } from 'react';
import { CategoriaContext } from '../../context/categoriaContext';
import { ModalContext } from '../../context/modalContext';

const ToolbarCategoria = () => {

    const { setModalTitle, setShowModal } = useContext(ModalContext);

    const { obtenerCategoria } = useContext(CategoriaContext);

    const abrirModalCrear = () => {
        setModalTitle('Registrar nuevo centro');
        setShowModal(true);
        obtenerCategoria(null);
    }

    return ( 
        <div className="container">
            <button className="button is-small is-primary" onClick={() => abrirModalCrear()}>
                <span className='icon is-small'>
                    <i className="fas fa-plus"></i>
                </span>
                <span>Registrar nuevo</span>
            </button>
        </div>    
    );
}
 
export default ToolbarCategoria;