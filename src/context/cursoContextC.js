import React, { createContext, useReducer } from 'react';
import cursoReducerC from '../reducer/cursoReducerC';
import {OBTENER_CURSO, OBTENER_CURSOS} from '../const/actionsTypes';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const CursoContextC = createContext();

export const CursoContextCProvider = props => {

    const initialState = {
        cursosList: [],
        cursoActual: null
    };

    const [state, dispatch] = useReducer(cursoReducerC, initialState);

    const obtenerCursos = async () => {

        try {
            const resultado = await Axios.get('http://localhost:9090/api/cursos');

            dispatch({
                type: OBTENER_CURSOS,
                payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener los cursos',
                toast: true
            });
            console.log(error);
        }
    }

    const obtenerCurso = async curso => {
        try {
            let cursoEncontrado = null;
            if (curso !== null) {
                const resultado = await Axios.get(`http://localhost:9090/api/cursos/${curso.id}`);
                cursoEncontrado = resultado.data;
            } else {
                cursoEncontrado = curso;
            }

            dispatch({
                type: OBTENER_CURSO,
                payload: cursoEncontrado
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener el curso',
                toast: true
            });
            console.log(error);
        }
    }

    return (
        <CursoContextC.Provider
            value={{
                cursosList: state.cursosList,
                cursoActual: state.cursoActual,

                obtenerCursos,
                obtenerCurso,
            }}
        >
            {props.children}
        </CursoContextC.Provider>
    )

}





