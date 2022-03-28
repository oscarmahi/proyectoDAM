import React, { useContext } from 'react';
import { ProyectoContext } from '../../context/proyectoContext';
import { ModalContext } from '../../context/modalContext';

const ToolbarProyecto = () => {

    const { setModalTitle, setShowModal } = useContext(ModalContext);

    const { obtenerProyecto } = useContext(ProyectoContext);

    const abrirModalCrear = () => {
        setModalTitle('Registrar nuevo proyecto');
        setShowModal(true);
        obtenerProyecto(null);
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
 
export default ToolbarProyecto;