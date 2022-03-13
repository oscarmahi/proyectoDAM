import React from 'react';

const ToolbarCliente = () => {
    
    const abrirModalCrear = () => {
        console.log("Crear...");
    }
    
    return (
        <div className="container">
            <button className="button is-small is-primary" onClick={() => abrirModalCrear()}>
                <span className='icon is-small'>
                    <i className="fas fa-plus"></i>
                </span>
                <span>Registrar nuevo</span>
            </button>
        </div>
    );
}

export default ToolbarCliente;