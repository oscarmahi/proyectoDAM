import React, { useContext, useEffect } from 'react';
import RowProyecto from './RowProyecto';
import { ProyectoContext } from '../../context/proyectoContext';

const TableProyecto = () => {

    const { proyectosList, obtenerProyectos } = useContext(ProyectoContext);

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
                        <th>Acciones</th>
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
                            <RowProyecto proyecto={proyectoMap} key={proyectoMap.id}/>
                        ))
                    }
                </tbody>
            </table>
        </div> 
     );








}
 
export default TableProyecto;