import React, { useState } from 'react';
import RowCliente from './RowCliente';

const TableCliente = () => {

    const [clientesList, setClientesList] = useState([
        {
            "idCliente": 1,
            "nombre": "Oscar",
            "apellidos": "Martinez",
            "direccion": "calle arca 1",
            "telefono": "+22222222",
            "email": "oscar@gmail.com"
        },
        {
            "idCliente": 2,
            "nombre": "Marian",
            "apellidos": "Vazquez",
            "direccion": "calle arca 1",
            "telefono": "+333333333",
            "email": "marian@gmail.com"
        }
    ]);

    return (
        <div className='table-container'>
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientesList.map(clienteMap => (
                            <RowCliente cliente={clienteMap} key={clienteMap.idCliente}/>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
}

export default TableCliente;