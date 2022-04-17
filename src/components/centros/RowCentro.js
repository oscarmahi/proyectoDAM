import React, { useContext } from 'react';
import { CentroContext } from '../../context/centroContext';
import { ModalContext } from '../../context/modalContext';

const RowCentro = ({centro}) => {

    const { setModalTitle, setShowModal } = useContext(ModalContext);

    const { obtenerCentro, eliminarCentro } = useContext(CentroContext);
    
    const abrirModalModificarCentro = () => {
        obtenerCentro(centro);
        setModalTitle('Modificar datos de centro');
        setShowModal(true);
    }

    return (  
        <tr>
            <td>
                <button
                 className="button is-small is-info mr-1" 
                 title="Modificar" 
                 onClick={ () => abrirModalModificarCentro()}>
                    <span className='icon is-small'>
                        <i className="fas fa-edit"></i>
                    </span>
                </button>
                <button 
                className="button is-small is-danger" 
                title="Eliminar" 
                onClick={ () => eliminarCentro(centro.id)}>
                    <span className='icon is-small'>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </button>
            </td>
            <td className="is-size-7">{centro.nombre}</td>
            <td className="is-size-7">{centro.direccion}</td>
            <td className="is-size-7">{centro.poblacion}</td>
            <td className="is-size-7">{centro.provincia}</td>
            <td className="is-size-7">{centro.cp}</td>
            <td className="is-size-7">{centro.telefono}</td>
            <td className="is-size-7">{centro.web}</td>
            <td className="is-size-7">{centro.email}</td>
        </tr>        
    );
}
 
export default RowCentro;