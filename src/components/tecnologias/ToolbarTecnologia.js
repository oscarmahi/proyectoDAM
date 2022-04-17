import React, { useContext } from 'react';
import { TecnologiaContext } from '../../context/tecnologiaContext';
import { ModalContext } from '../../context/modalContext';

const ToolbarTecnologia = () => {

    const { setModalTitle, setShowModal } = useContext(ModalContext);

    const { obtenerTecnologia } = useContext(TecnologiaContext);

    const abrirModalCrear = () => {
        setModalTitle('Registrar nueva tecnologia');
        setShowModal(true);
        obtenerTecnologia(null);
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

export default ToolbarTecnologia;