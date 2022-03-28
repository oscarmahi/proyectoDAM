import React, { useContext, useEffect, useState } from 'react';
import { CentroContext } from '../../context/centroContext';
import { ModalContext } from '../../context/modalContext';

const FormCentros = () => {

    const { setShowModal } = useContext(ModalContext);
    const { registrarCentros, actualizarCentro, centroActual, obtenerCentro } = useContext(CentroContext);

    const centroDefault = {
        nombre: '',
        direccion: '',
        poblacion: '',
        provincia: '',
        cp: '',
        telefono: '',
        web: '',
        email: ''
    }

    const [centro, setCentro] = useState(centroDefault);
    const [mensaje, setMensaje] = useState(null);

    useEffect(() => {
        if (centroActual !== null) {
            setCentro({
                ...centroActual,
                direccion: centroActual.direccion ? centroActual.direccion : '',
                cp: centroActual.cp ? centroActual.cp : '',
                poblacion: centroActual.poblacion ? centroActual.poblacion : '',
                telefono: centroActual.telefono ? centroActual.telefono : '',
                provincia: centroActual.provincia ? centroActual.provincia : '',
            });
        } else {
            setCentro(centroDefault);
        }
        // eslint-disable-next-line
    }, [centroActual]);

    const handleChange = (e) => {
        setCentro({
            ...centro,
            [e.target.name]: e.target.value
        });
    }

    const obtenerCentroAEnviar = () => {
        let centroTmp = { ...centro };
        if (centroTmp.direccion === "") {
            delete centroTmp.direccion;
        }
        if (centroTmp.telefono === "") {
            delete centroTmp.telefono;
        }
        if (centroTmp.cp === "") {
            delete centroTmp.cp;
        }
        if (centroTmp.poblacion === "") {
            delete centroTmp.poblacion;
        }
        if (centroTmp.provincia === "") {
            delete centroTmp.provincia;
        }
        return centroTmp;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();                 //para que no se refresque la página

        //validar
        if ((centro.nombre.trim() === '') || (centro.web.trim() === '') || (centro.email.trim() === '')) {
            setMensaje('El nombre, la página web y el email son obligatorios');
            return;
        }

        //obtener objeto a enviar
        if (centroActual !== null) {
            actualizarCentro(obtenerCentroAEnviar());
        } else {
            registrarCentros(obtenerCentroAEnviar());
        }

        //cerrar y limpiar el modal
        cerrarModal();
    }

    const limpiarForm = () => {
        setMensaje(null);
        setCentro(centroDefault);
    }

    const cerrarModal = () => {
        limpiarForm();
        setShowModal(false);
        obtenerCentro(null);
    }

    return (  
        <form onSubmit={handleOnSubmit}>

        {mensaje ? <div className='notification is-danger'>{mensaje}</div> : null}

        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Nombre</label>
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
                            value={centro.nombre}
                            onChange={handleChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
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
                            placeholder="Direccion"
                            name="direccion"
                            value={centro.direccion}
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
                <label className="label">Poblacion</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Poblacion"
                            name="poblacion"
                            value={centro.poblacion}
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
                <label className="label">Provincia</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Provincia"
                            name="provincia"
                            value={centro.provincia}
                            onChange={handleChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-map-marked-alt"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                        <p className="control is-expanded">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="CP"
                                name="cp"
                                value={centro.cp}
                                onChange={handleChange}
                            />
                        </p>
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
                            value={centro.telefono}
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
                <label className="label">Web</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Pagina web"
                            name="web"
                            value={centro.web}
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
                <label className="label">Email</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={centro.email}
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
 
export default FormCentros;