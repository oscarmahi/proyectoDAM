import React, { useContext } from 'react';
import { ProyectoContext } from '../../context/proyectoContext';
import { ModalContext } from '../../context/modalContext';

const RowProyecto = ( {proyecto} ) => {

    const { setModalTitle, setShowModal } = useContext(ModalContext);

    const { obtenerProyecto, eliminarProyecto } = useContext(ProyectoContext);
    
    const abrirModalModificarProyecto = () => {
        obtenerProyecto(proyecto);
        setModalTitle('Modificar datos de proyecto');
        setShowModal(true);
    }

    return (  
        <tr>
            <td>
                <button
                 className="button is-small is-info mr-1" 
                 title="Modificar" 
                 onClick={ () => abrirModalModificarProyecto()}>
                    <span className='icon is-small'>
                        <i className="fas fa-edit"></i>
                    </span>
                </button>
                <button 
                className="button is-small is-danger" 
                title="Eliminar" 
                onClick={ () => eliminarProyecto(proyecto.id)}>
                    <span className='icon is-small'>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </button>
            </td>
            <td>{proyecto.nombre}</td>
            <td>{proyecto.descripcion}</td>
            <td>{proyecto.estado}</td>
            <td>{proyecto.fecha_presentacion}</td>
            <td>{proyecto.comentarios}</td>
            <td>{proyecto.nota}</td>
        </tr>        
    );


}
 
export default RowProyecto;