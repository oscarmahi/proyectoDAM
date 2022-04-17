import React, { createContext, useReducer } from 'react';
import proyectoReducerC from '../reducer/proyectoReducerC';
import { OBTENER_PROYECTO, OBTENER_PROYECTOS } from '../const/actionsTypes';
//import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const ProyectoContextC = createContext();

export const ProyectoContextCProvider = props => {

    const initialState = {
        proyectosList: [],
        proyectoActual: null
    };

    const [state, dispatch] = useReducer(proyectoReducerC, initialState);

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

    return (
        <ProyectoContextC.Provider
            value={{
                proyectosList: state.proyectosList,
                proyectoActual: state.proyectoActual,

                obtenerProyectos,
                obtenerProyecto,
            }}
        >
            {props.children}
        </ProyectoContextC.Provider>
    )
}


