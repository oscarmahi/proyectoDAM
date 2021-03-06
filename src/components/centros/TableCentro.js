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
                        <th className="is-size-7">Acciones</th>
                        <th className="is-size-7">Nombre</th>
                        <th className="is-size-7">Direccion</th>
                        <th className="is-size-7">Poblacion</th>
                        <th className="is-size-7">Provincia</th>
                        <th className="is-size-7">CP</th>
                        <th className="is-size-7">Telefono</th>
                        <th className="is-size-7">Web</th>
                        <th className="is-size-7">eMail</th>
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