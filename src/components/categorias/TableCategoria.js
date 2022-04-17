import React, { useContext, useEffect } from 'react';
import RowCategoria from './RowCategoria';
import { CategoriaContext } from '../../context/categoriaContext';

const TableCategoria = () => {
    
    const { categoriasList, obtenerCategorias } = useContext(CategoriaContext);

    useEffect(() => {
      obtenerCategorias();
      // eslint-disable-next-line 
    }, []);
    
    if (categoriasList.length === 0){
        return <center><p>No existen categorias</p></center>
    }    
    
    
    return (  
        <div className='table-container'>
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoriasList.map(categoriaMap => (
                            <RowCategoria categoria={categoriaMap} key={categoriaMap.id}/>
                        ))
                    }
                </tbody>
            </table>
        </div> 



    );
}
 
export default TableCategoria;