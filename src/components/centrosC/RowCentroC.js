import React from 'react';

const RowCentroC = ({centro}) => {

    return (  
        <tr>
            <td className="is-size-7">{centro.nombre}</td>
            <td className="is-size-7">{centro.direccion}</td>
            <td className="is-size-7">{centro.poblacion}</td>
            <td className="is-size-7">{centro.provincia}</td>
            <td className="is-size-7">{centro.cp}</td>
            <td className="is-size-7">{centro.telefono}</td>
            <td className="is-size-7">{centro.web}</td>
            <td className="is-size-7">{centro.email}</td>
        </tr>        
    );
}
 
export default RowCentroC;