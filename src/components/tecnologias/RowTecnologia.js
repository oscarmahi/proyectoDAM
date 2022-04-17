import React, { useContext } from 'react';
import { TecnologiaContext } from '../../context/tecnologiaContext';
import { ModalContext } from '../../context/modalContext';

const RowTecnologia = ({tecnologia}) => {

    const { setModalTitle, setShowModal } = useContext(ModalContext);

    const { obtenerTecnologia, eliminarTecnologia } = useContext(TecnologiaContext);
    
    const abrirModalModificarTecnologia = () => {
        obtenerTecnologia(tecnologia);
        setModalTitle('Modificar datos de tecnologia');
        setShowModal(true);
    }

    return (  
        <tr>
            <td>
                <button
                 className="button is-small is-info mr-1" 
                 title="Modificar" 
                 onClick={ () => abrirModalModificarTecnologia()}>
                    <span className='icon is-small'>
                        <i className="fas fa-edit"></i>
                    </span>
                </button>
                <button 
                className="button is-small is-danger" 
                title="Eliminar" 
                onClick={ () => eliminarTecnologia(tecnologia.id)}>
                    <span className='icon is-small'>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </button>
            </td>
            <td>{tecnologia.nombre}</td>
            <td>{tecnologia.descripcion}</td>
            <td>{tecnologia.categorias.nombre}</td>
            {/* <td>{tecnologia.categorias.id}</td> */}
        </tr>        
    );
}
 
export default RowTecnologia;
