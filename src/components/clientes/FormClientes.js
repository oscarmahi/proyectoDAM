import React, { useContext, useEffect, useState } from 'react';
import { ClienteContext } from '../../context/clienteContext';
import { ModalContext } from '../../context/modalContext';

const FormClientes = () => {

    const { setShowModal } = useContext(ModalContext);

    const { registrarClientes, actualizarCliente, clienteActual, obtenerCliente } = useContext(ClienteContext);

    const clienteDefault = {
        nombre: '',
        apellidos: '',
        direccion: '',
        telefono: '',
        email: ''
    }

    const [cliente, setCliente] = useState(clienteDefault);
    const [mensaje, setMensaje] = useState(null);

    useEffect(() => {
        if (clienteActual !== null) {
            setCliente({
                ...clienteActual,
                direccion: clienteActual.direccion ? clienteActual.direccion : '',
                telefono: clienteActual.telefono ? clienteActual.telefono : '',
            });
        } else {
            setCliente(clienteDefault);
        }
        // eslint-disable-next-line
    }, [clienteActual]);

    const handleChange = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    }

    const obtenerClienteAEnviar = () => {
        let clienteTmp = { ...cliente };
        if (clienteTmp.direccion === "") {
            delete clienteTmp.direccion;
        }
        if (clienteTmp.telefono === "") {
            delete clienteTmp.telefono;
        }
        return clienteTmp;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();                 //para que no se refresque la página

        //validar
        if ((cliente.nombre.trim() === '') && (cliente.apellidos.trim() === '') && (cliente.email.trim() === '')) {
            setMensaje('El nombre, apellidos e email son obligatorios');
            return;
        }

        //obtener objeto a enviar
        if (clienteActual !== null) {
            actualizarCliente(obtenerClienteAEnviar());
        } else {
            registrarClientes(obtenerClienteAEnviar());
        }

        //cerrar y limpiar el modal
        cerrarModal();
    }

    const limpiarForm = () => {
        setMensaje(null);
        setCliente(clienteDefault);
    }

    const cerrarModal = () => {
        limpiarForm();
        setShowModal(false);
        obtenerCliente(null);
    }

    return (
        <form onSubmit={handleOnSubmit}>


            {mensaje ? <div className='notification is-danger'>{mensaje}</div> : null}

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Nombre y Apellidos</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                value={cliente.nombre}
                                onChange={handleChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Apellidos"
                                name="apellidos"
                                value={cliente.apellidos}
                                onChange={handleChange}
                            />
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Direccion</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control is-expanded has-icons-left">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Ingrese su direccion"
                                name="direccion"
                                value={cliente.direccion}
                                onChange={handleChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-map-marked-alt"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Telefono</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control is-expanded has-icons-left">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Telefono"
                                name="telefono"
                                value={cliente.telefono}
                                onChange={handleChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-phone"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Email</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control is-expanded has-icons-left">
                            <input
                                autoComplete="off"
                                className="input"
                                type="email"
                                placeholder="Ingrese su Email"
                                name="email"
                                value={cliente.email}
                                onChange={handleChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label">
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-primary mr-1">Guardar</button>
                            <button
                                type="button"
                                className="button"
                                onClick={() => cerrarModal()}
                            >Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>




    );
}

export default FormClientes;