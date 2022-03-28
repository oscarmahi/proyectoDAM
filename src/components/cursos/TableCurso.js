import React, { useContext, useEffect } from 'react';
import RowCurso from './RowCurso';
import { CursoContext } from '../../context/cursoContext';

const TableCurso = () => {

    const { cursosList, obtenerCursos } = useContext(CursoContext);

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
                        <th>Acciones</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Modalidad</th>
                        <th>Horas lectivas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cursosList.map(cursoMap => (
                            <RowCurso curso={cursoMap} key={cursoMap.id}/>
                        ))
                    }
                </tbody>
            </table>
        </div> 
     );
}
 
export default TableCurso;