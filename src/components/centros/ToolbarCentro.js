import React, { useContext } from 'react';
import { CentroContext } from '../../context/centroContext';
import { ModalContext } from '../../context/modalContext';

const ToolbarCentro = () => {

    const { setModalTitle, setShowModal } = useContext(ModalContext);

    const { obtenerCentro } = useContext(CentroContext);

    const abrirModalCrear = () => {
        setModalTitle('Registrar nuevo centro');
        setShowModal(true);
        obtenerCentro(null);
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

export default ToolbarCentro;