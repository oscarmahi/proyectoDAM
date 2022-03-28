import React, { useContext, useEffect } from 'react';
import RowCentro from './RowCentro';
import { CentroContext } from '../../context/centroContext';

const TableCentro = () => {

    const { centrosList, obtenerCentros } = useContext(CentroContext);

    useEffect(() => {
      obtenerCentros();
      // eslint-disable-next-line 
    }, []);
    
    if (centrosList.length === 0){
        return <center><p>No existen centros</p></center>
    }

    return ( 
        <div className='table-container'>
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Poblacion</th>
                        <th>Provincia</th>
                        <th>CP</th>
                        <th>Telefono</th>
                        <th>Web</th>
                        <th>eMail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        centrosList.map(centroMap => (
                            <RowCentro centro={centroMap} key={centroMap.id}/>
                        ))
                    }
                </tbody>
            </table>
        </div> 
     );
}
 
export default TableCentro;