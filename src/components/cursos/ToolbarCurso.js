import React, { useContext } from 'react';
import { CursoContext } from '../../context/cursoContext';
import { ModalContext } from '../../context/modalContext';

const ToolbarCurso = () => {

    const { setModalTitle, setShowModal } = useContext(ModalContext);

    const { obtenerCurso } = useContext(CursoContext);

    const abrirModalCrear = () => {
        setModalTitle('Registrar nuevo curso');
        setShowModal(true);
        obtenerCurso(null);
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
 
export default ToolbarCurso;