import React, { useContext } from 'react';
import { CursoContext } from '../../context/cursoContext';
import { ModalContext } from '../../context/modalContext';

const RowCurso = ( {curso} ) => {
    
    const { setModalTitle, setShowModal } = useContext(ModalContext);

    const { obtenerCurso, eliminarCurso } = useContext(CursoContext);
    
    const abrirModalModificarCurso = () => {
        obtenerCurso(curso);
        setModalTitle('Modificar datos de curso');
        setShowModal(true);
    }    
   
    return ( 
        <tr>
            <td>
                <button
                 className="button is-small is-info mr-1" 
                 title="Modificar" 
                 onClick={ () => abrirModalModificarCurso()}>
                    <span className='icon is-small'>
                        <i className="fas fa-edit"></i>
                    </span>
                </button>
                <button 
                className="button is-small is-danger" 
                title="Eliminar" 
                onClick={ () => eliminarCurso(curso.id)}>
                    <span className='icon is-small'>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </button>
            </td>
            <td>{curso.nombre}</td>
            <td>{curso.descripcion}</td>
            <td>{curso.modalidad}</td>
            <td>{curso.horas_lectivas}</td>
        </tr>        
     );
}
 
export default RowCurso;
