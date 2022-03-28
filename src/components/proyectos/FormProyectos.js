import React, { useContext, useEffect, useState } from 'react';
import { ProyectoContext } from '../../context/proyectoContext';
import { ModalContext } from '../../context/modalContext';

const FormProyectos = () => {

    const { setShowModal } = useContext(ModalContext);
    const { registrarProyectos, actualizarProyecto, proyectoActual, obtenerProyecto } = useContext(ProyectoContext);

    const proyectoDefault = {
        nombre: '',
        descripcion: '',
        estado: '',
        fecha_presentacion: '',
        comentarios: '',
        nota: '',
    }

    const [proyecto, setProyecto] = useState(proyectoDefault);
    const [mensaje, setMensaje] = useState(null);

    useEffect(() => {
        if (proyectoActual !== null) {
            setProyecto({
                ...proyectoActual,
                fecha_presentacion: proyectoActual.fecha_presentacion ? proyectoActual.fecha_presentacion : '',
                comentarios: proyectoActual.comentarios ? proyectoActual.comentarios : '',
                nota: proyectoActual.nota ? proyectoActual.nota : '',
            });
        } else {
            setProyecto(proyectoDefault);
        }
        // eslint-disable-next-line
    }, [proyectoActual]);

    const handleChange = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        });
    }

    const obtenerProyectoAEnviar = () => {
        let proyectoTmp = { ...proyecto };
        if (proyectoTmp.fecha_presentacion === "") {
            delete proyectoTmp.fecha_presentacion;
        }
        if (proyectoTmp.comentarios === "") {
            delete proyectoTmp.comentarios;
        }
        if (proyectoTmp.nota === "") {
            delete proyectoTmp.nota;
        }
        return proyectoTmp;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();                 //para que no se refresque la página

        //validar
        if ((proyecto.nombre.trim() === '') || (proyecto.descripcion.trim() === '') || (proyecto.estado.trim() === '')) {
            setMensaje('El nombre, la descripcion y el estado son obligatorios');
            return;
        }

        //obtener objeto a enviar
        if (proyectoActual !== null) {
            actualizarProyecto(obtenerProyectoAEnviar());
        } else {
            registrarProyectos(obtenerProyectoAEnviar());
        }

        //cerrar y limpiar el modal
        cerrarModal();
    }

    const limpiarForm = () => {
        setMensaje(null);
        setProyecto(proyectoDefault);
    }

    const cerrarModal = () => {
        limpiarForm();
        setShowModal(false);
        obtenerProyecto(null);
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
                            value={proyecto.nombre}
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
                <label className="label">Descripcion</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Descripcion"
                            name="descripcion"
                            value={proyecto.descripcion}
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
                <label className="label">Estado</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                    <select className="input" name="estado" value={proyecto.estado} onChange={handleChange}>
                            <option value="No asignado">No asignado</option>
                            <option value="Asignado">Asignado</option>
                            <option value="Asignado">En desarrollo</option>
                            <option value="Entregado">Entregado</option>
                        </select>
                        {/* <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Estado"
                            name="estado"
                            value={proyecto.estado}
                            onChange={handleChange}
                        /> */}
                        <span className="icon is-small is-left">
                            <i className="fas fa-map-marked-alt"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Fecha Presentacion</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="date"
                            placeholder="Fecha Presentacion"
                            name="fecha_presentacion"
                            value={proyecto.fecha_presentacion}
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
                <label className="label">Comentarios</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Comentarios"
                            name="comentarios"
                            value={proyecto.comentarios}
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
                <label className="label">Nota</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Nota"
                            name="nota"
                            value={proyecto.nota}
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
 
export default FormProyectos;