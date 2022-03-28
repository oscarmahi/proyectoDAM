import React, { useContext, useEffect, useState } from 'react';
import { CursoContext } from '../../context/cursoContext';
import { ModalContext } from '../../context/modalContext';

const FormCursos = () => {

    const { setShowModal } = useContext(ModalContext);
    const { registrarCursos, actualizarCurso, cursoActual, obtenerCurso } = useContext(CursoContext);

    const cursoDefault = {
        nombre: '',
        descripcion: '',
        modalidad: '',
        horas_lectivas: ''
    }

    const [curso, setCurso] = useState(cursoDefault);
    const [mensaje, setMensaje] = useState(null);

    useEffect(() => {
        //console.log("linea 21 de form");
        //console.log(cursoActual);
        if (cursoActual !== null) {
            //console.log("linea 24");
            setCurso({
                ...cursoActual,
                descripcion: cursoActual.descripcion ? cursoActual.descripcion : '',
                horas_lectivas: cursoActual.horas_lectivas ? cursoActual.horas_lectivas : '',
            });
        } else {
            //console.log("linea30");
            setCurso(cursoDefault);
        }
        // eslint-disable-next-line
    }, [cursoActual]);

    const handleChange = (e) => {
        //console.log("linea 34 de form");
        setCurso({
            ...curso,
            [e.target.name]: e.target.value
        });
    }

    const obtenerCursoAEnviar = () => {
        let cursoTmp = { ...curso };
        if (cursoTmp.descripcion === "") {
            delete cursoTmp.descripcion;
        }
        if (cursoTmp.horas_lectivas === "") {
            delete cursoTmp.horas_lectivas;
        }
        return cursoTmp;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();                 //para que no se refresque la página

        //validar
        if ((curso.nombre.trim() === '') || (curso.modalidad.trim() === '')) {
            setMensaje('El nombre, y la modalidad son obligatorios');
            return;
        }

        //obtener objeto a enviar
        if (cursoActual !== null) {
            actualizarCurso(obtenerCursoAEnviar());
        } else {
            registrarCursos(obtenerCursoAEnviar());
        }

        //cerrar y limpiar el modal
        cerrarModal();
    }

    const limpiarForm = () => {
        setMensaje(null);
        setCurso(cursoDefault);
    }

    const cerrarModal = () => {
        limpiarForm();
        setShowModal(false);
        obtenerCurso(null);
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
                            value={curso.nombre}
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
                            value={curso.descripcion}
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
                <label className="label">Modalidad</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                        <select className="input" name="modalidad" value={curso.modalidad} onChange={handleChange}>
                            <option value="Presencial">Presencial</option>
                            <option value="On-line">On-line</option>
                        </select>


                        {/* <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Modalidad"
                            name="modalidad"
                            value={curso.modalidad}
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
                <label className="label">Horas Lectivas</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Horas Lectivas"
                            name="horas_lectivas"
                            value={curso.horas_lectivas}
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
 
export default FormCursos;