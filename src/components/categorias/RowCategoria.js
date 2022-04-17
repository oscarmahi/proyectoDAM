import React, { useContext } from 'react';
import { CategoriaContext } from '../../context/categoriaContext';
import { ModalContext } from '../../context/modalContext';

const RowCategoria = ({categoria}) => {

    const { setModalTitle, setShowModal } = useContext(ModalContext);

    const { obtenerCategoria, eliminarCategoria } = useContext(CategoriaContext);
    
    const abrirModalModificarCategoria = () => {
        obtenerCategoria(categoria);
        setModalTitle('Modificar datos de categoria');
        setShowModal(true);
    }

    return ( 
        <tr>
        <td>
            <button
             className="button is-small is-info mr-1" 
             title="Modificar" 
             onClick={ () => abrirModalModificarCategoria()}>
                <span className='icon is-small'>
                    <i className="fas fa-edit"></i>
                </span>
            </button>
            <button 
            className="button is-small is-danger" 
            title="Eliminar" 
            onClick={ () => eliminarCategoria(categoria.id)}>
                <span className='icon is-small'>
                    <i className="fas fa-trash-alt"></i>
                </span>
            </button>
        </td>
        <td>{categoria.nombre}</td>
    </tr>        
     );
}
 
export default RowCategoria;