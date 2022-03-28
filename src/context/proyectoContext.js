import React, { createContext, useReducer } from 'react';
import proyectoReducer from '../reducer/proyectoReducer';
import { ELIMINAR_PROYECTO, MODIFICAR_PROYECTO, OBTENER_PROYECTO, OBTENER_PROYECTOS, REGISTRAR_PROYECTOS } from '../const/actionsTypes';
//import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const ProyectoContext = createContext();

export const ProyectoContextProvider = props => {

    const initialState = {
        proyectosList: [],
        proyectoActual: null
    };

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    const obtenerProyectos = async () => {

        try {
            const resultado = await Axios.get('http://localhost:9090/api/proyectos');

            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener los proyectos',
                toast: true
            });
            console.log(error);
        }
    }

    const registrarProyectos = async proyecto => {
        try {
            const resultado = await Axios.post('http://localhost:9090/api/proyectos', proyecto);
            dispatch({
                type: REGISTRAR_PROYECTOS,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Proyecto registrado correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo registrar el proyecto',
                toast: true
            });
            console.log(error);
        }
    }

    const obtenerProyecto = async proyecto => {
        try {
            let proyectoEncontrado = null;
            if (proyecto !== null) {
                const resultado = await Axios.get(`http://localhost:9090/api/proyectos/${proyecto.id}`);
                proyectoEncontrado = resultado.data;
            } else {
                proyectoEncontrado = proyecto;
            }

            dispatch({
                type: OBTENER_PROYECTO,
                payload: proyectoEncontrado
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener el proyecto',
                toast: true
            });
            console.log(error);
        }
    }

    const actualizarProyecto = async proyecto => {

        try {
            const resultado = await Axios.put('http://localhost:9090/api/proyectos', proyecto);

            dispatch({
                type: MODIFICAR_PROYECTO,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Proyecto modificado correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo modificar el proyecto',
                toast: true
            });
            console.log(error);
        }
    }

    const eliminarProyecto = async id => {

        try {
            Swal.fire({
                icon: 'question',
                title: '¿Desea continuar?',
                text: 'se eliminara el proyecto seleccionado',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar'
            }).then(async (result) => {
                if (result.value) {
                    await Axios.delete(`http://localhost:9090/api/proyectos/${id}`);
                    dispatch({
                        type: ELIMINAR_PROYECTO,
                        payload: id
                    })
                    Swal.fire({
                        icon: 'success',
                        title: 'Correcto',
                        text: 'Proyecto eliminado correctamente',
                        toast: true
                    });
                }
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo eliminar el proyecto',
                toast: true
            });
            console.log(error);
        }
    }

    return (
        <ProyectoContext.Provider
            value={{
                proyectosList: state.proyectosList,
                proyectoActual: state.proyectoActual,

                obtenerProyectos,
                registrarProyectos,
                obtenerProyecto,
                actualizarProyecto,
                eliminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}


