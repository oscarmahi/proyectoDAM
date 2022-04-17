import React, { useContext, useEffect, useState } from 'react';
import { TecnologiaContext } from '../../context/tecnologiaContext';
import { ModalContext } from '../../context/modalContext';

const FormTecnologias = () => {

    const { setShowModal } = useContext(ModalContext);
    const { registrarTecnologias, actualizarTecnologia, tecnologiaActual, obtenerTecnologia } = useContext(TecnologiaContext);

    // const categoriasObj = {
    //     id: '',
    //     nombre: '',
    // }

    const tecnologiaDefault = {
        nombre: '',
        descripcion: '',
        categorias : {
            nombre:''
        }

    }

    const [tecnologia, setTecnologia] = useState(tecnologiaDefault);
    const [mensaje, setMensaje] = useState(null);

    useEffect(() => {
        if (tecnologiaActual !== null) {
            setTecnologia({
                ...tecnologiaActual,
                descripcion: tecnologiaActual.descripcion ? tecnologiaActual.descripcion : '',
            });
        } else {
            setTecnologia(tecnologiaDefault);
        }
        // eslint-disable-next-line
    }, [tecnologiaActual]);

    const handleChange = (e) => {
        setTecnologia({
            ...tecnologia,
            [e.target.name]: e.target.value
        });
    }

    const obtenerTecnologiaAEnviar = () => {
        let tecnologiaTmp = { ...tecnologia };
        if (tecnologiaTmp.descripcion === "") {
            delete tecnologiaTmp.descripcion;
        }
        console.log(tecnologiaTmp);
        return tecnologiaTmp;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();                 //para que no se refresque la página

        //validar
        //if ((tecnologia.nombre.trim() === '') || (tecnologia.categorias.nombre.trim() === '')) {
        if ((tecnologia.nombre.trim() === '')) {
            setMensaje('El nombre y la categoria son obligatorios');
            return;
        }

        //obtener objeto a enviar
        if (tecnologiaActual !== null) {
            actualizarTecnologia(obtenerTecnologiaAEnviar());
        } else {
            registrarTecnologias(obtenerTecnologiaAEnviar());
        }

        //cerrar y limpiar el modal
        cerrarModal();
    }

    const limpiarForm = () => {
        setMensaje(null);
        setTecnologia(tecnologiaDefault);
    }

    const cerrarModal = () => {
        limpiarForm();
        setShowModal(false);
        obtenerTecnologia(null);
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
                                value={tecnologia.nombre}
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
                                value={tecnologia.descripcion}
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
                    <label className="label">Nombre Categoria</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control is-expanded has-icons-left">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Categorias"
                                name={`${tecnologia.categorias.nombre}`}
                                //name={tecnologia.categorias.nombre}
                                value={tecnologia.categorias.nombre}
                                //value = {categoriasObj.nombre}
                                //value={`${tecnologia.categorias.nombre}`}
                                onChange={handleChange}
                                
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-map-marked-alt"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Categoria</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control is-expanded has-icons-left">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Categorias"
                                name={`${tecnologia.categorias.id}`}
                                //name={tecnologia.categorias.id}
                                value={tecnologia.categorias.id}
                                //value = {categoriasObj.id}
                                //value={`${tecnologia.categorias.id}`}
                                onChange={handleChange}
                                
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-map-marked-alt"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>             */}

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

export default FormTecnologias;


