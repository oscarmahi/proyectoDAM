import React, { useContext, useEffect, useState } from 'react';
import { CategoriaContext } from '../../context/categoriaContext';
import { ModalContext } from '../../context/modalContext';

const FormCategorias = () => {

    const { setShowModal } = useContext(ModalContext);
    const { registrarCategorias, actualizarCategoria, categoriaActual, obtenerCategoria } = useContext(CategoriaContext);

    const categoriaDefault = {
        nombre: '',
    }

    const [categoria, setCategoria] = useState(categoriaDefault);
    const [mensaje, setMensaje] = useState(null);

    useEffect(() => {
        if (categoriaActual !== null) {
            setCategoria({
                ...categoriaActual,
                nombre: categoriaActual.nombre ? categoriaActual.nombre : '',
            });
        } else {
            setCategoria(categoriaDefault);
        }
        // eslint-disable-next-line
    }, [categoriaActual]);

    const handleChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    const obtenerCategoriaAEnviar = () => {
        let categoriaTmp = { ...categoria };
        if (categoriaTmp.nombre === "") {
            delete categoriaTmp.nombre;
        }
        return categoriaTmp;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();                 //para que no se refresque la página

        //validar
        if ((categoria.nombre.trim() === '')) {
            setMensaje('El nombre, es obligatorio');
            return;
        }

        //obtener objeto a enviar
        if (categoriaActual !== null) {
            actualizarCategoria(obtenerCategoriaAEnviar());
        } else {
            registrarCategorias(obtenerCategoriaAEnviar());
        }

        //cerrar y limpiar el modal
        cerrarModal();
    }

    const limpiarForm = () => {
        setMensaje(null);
        setCategoria(categoriaDefault);
    }

    const cerrarModal = () => {
        limpiarForm();
        setShowModal(false);
        obtenerCategoria(null);
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
                            value={categoria.nombre}
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
 
export default FormCategorias;