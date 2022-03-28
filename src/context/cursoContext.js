import React, { createContext, useReducer } from 'react';
import cursoReducer from '../reducer/cursoReducer';
import { ELIMINAR_CURSO, MODIFICAR_CURSO, OBTENER_CURSO, OBTENER_CURSOS, REGISTRAR_CURSOS } from '../const/actionsTypes';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const CursoContext = createContext();

export const CursoContextProvider = props => {

    const initialState = {
        cursosList: [],
        cursoActual: null
    };

    const [state, dispatch] = useReducer(cursoReducer, initialState);


    const obtenerCursos = async () => {

        try {
            //const resultado = await Axios.get('http://localhost:9090/api/clientes');
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

    const registrarCursos = async curso => {
        try {
            const resultado = await Axios.post('http://localhost:9090/api/cursos', curso);
            dispatch({
                type: REGISTRAR_CURSOS,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Curso registrado correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo registrar el curso',
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

    const actualizarCurso = async curso => {

        try {
            const resultado = await Axios.put('http://localhost:9090/api/cursos', curso);

            dispatch({
                type: MODIFICAR_CURSO,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Curso modificado correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo modificar el curso',
                toast: true
            });
            console.log(error);
        }
    }

    const eliminarCurso = async id => {

        try {
            Swal.fire({
                icon: 'question',
                title: '¿Desea continuar?',
                text: 'se eliminara el curso seleccionado',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar'
            }).then(async (result) => {
                if (result.value) {
                    await Axios.delete(`http://localhost:9090/api/cursos/${id}`);
                    dispatch({
                        type: ELIMINAR_CURSO,
                        payload: id
                    })
                    Swal.fire({
                        icon: 'success',
                        title: 'Correcto',
                        text: 'Curso eliminado correctamente',
                        toast: true
                    });
                }
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo eliminar el curso',
                toast: true
            });
            console.log(error);
        }
    }

    return (
        <CursoContext.Provider
            value={{
                cursosList: state.cursosList,
                cursoActual: state.cursoActual,

                obtenerCursos,
                registrarCursos,
                obtenerCurso,
                actualizarCurso,
                eliminarCurso
            }}
        >
            {props.children}
        </CursoContext.Provider>
    )

}





