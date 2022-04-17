import React from 'react';
;

const RowCursoC = ( {curso} ) => {
    
    return ( 
        <tr>
            <td>{curso.nombre}</td>
            <td>{curso.descripcion}</td>
            <td>{curso.modalidad}</td>
            <td>{curso.horas_lectivas}</td>
        </tr>        
     );
}
 
export default RowCursoC;
