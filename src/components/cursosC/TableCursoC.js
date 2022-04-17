import React, { useContext, useEffect } from 'react';
import RowCursoC from './RowCursoC';
import { CursoContextC } from '../../context/cursoContextC';

const TableCursoC = () => {

    const { cursosList, obtenerCursos } = useContext(CursoContextC);

    useEffect(() => {
      obtenerCursos();
      // eslint-disable-next-line 
    }, []);
    
    if (cursosList.length === 0){
        return <center><p>No existen cursos</p></center>
    }

    return ( 
        <div className='table-container'>
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Modalidad</th>
                        <th>Horas lectivas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cursosList.map(cursoMap => (
                            <RowCursoC curso={cursoMap} key={cursoMap.id}/>
                        ))
                    }
                </tbody>
            </table>
        </div> 
     );
}
 
export default TableCursoC;