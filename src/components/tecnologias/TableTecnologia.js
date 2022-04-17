import React, { useContext, useEffect } from 'react';
import RowTecnologia from './RowTecnologia';
import { TecnologiaContext } from '../../context/tecnologiaContext';

const TableTecnologia = () => {

    const { tecnologiasList, obtenerTecnologias } = useContext(TecnologiaContext);

    useEffect(() => {
      obtenerTecnologias();
      // eslint-disable-next-line 
    }, []);
    
    if (tecnologiasList.length === 0){
        return <center><p>No existen tecnologias</p></center>
    }

    return ( 
        <div className='table-container'>
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Nombre Categoria</th>
                        {/* <th>Categoria</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        tecnologiasList.map(tecnologiaMap => (
                            <RowTecnologia tecnologia={tecnologiaMap} key={tecnologiaMap.id}/>
                        ))
                    }
                </tbody>
            </table>
        </div> 
     );
}
 
export default TableTecnologia;