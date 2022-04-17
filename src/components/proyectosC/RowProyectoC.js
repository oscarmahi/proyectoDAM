import React from 'react';

const RowProyectoC = ( {proyecto} ) => {

    return (  
        <tr>
            <td>{proyecto.nombre}</td>
            <td>{proyecto.descripcion}</td>
            <td>{proyecto.estado}</td>
            <td>{proyecto.fecha_presentacion}</td>
            <td>{proyecto.comentarios}</td>
            <td>{proyecto.nota}</td>
        </tr>        
    );
}
 
export default RowProyectoC;