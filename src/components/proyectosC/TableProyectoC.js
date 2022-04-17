import React, { useContext, useEffect } from 'react';
import RowProyectoC from './RowProyectoC';
import { ProyectoContextC } from '../../context/proyectoContextC';

const TableProyectoC = () => {

    const { proyectosList, obtenerProyectos } = useContext(ProyectoContextC);

    useEffect(() => {
      obtenerProyectos();
      // eslint-disable-next-line 
    }, []);
    
    if (proyectosList.length === 0){
        return <center><p>No existen proyectos</p></center>
    }

    return ( 
        <div className='table-container'>
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Estado</th>
                        <th>Fecha Presentacion</th>
                        <th>Comentarios</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        proyectosList.map(proyectoMap => (
                            <RowProyectoC proyecto={proyectoMap} key={proyectoMap.id}/>
                        ))
                    }
                </tbody>
            </table>
        </div> 
     );
}
 
export default TableProyectoC;