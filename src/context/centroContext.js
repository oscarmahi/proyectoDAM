import React, { createContext, useReducer } from 'react';
import centroReducer from '../reducer/centroReducer';
import { ELIMINAR_CENTRO, MODIFICAR_CENTRO, OBTENER_CENTRO, OBTENER_CENTROS, REGISTRAR_CENTROS } from '../const/actionsTypes';
//import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const CentroContext = createContext();

export const CentroContextProvider = props => {

    const initialState = {
        centrosList: [],
        centroActual: null
    };

    const [state, dispatch] = useReducer(centroReducer, initialState);

    const obtenerCentros = async () => {

        try {
            const resultado = await Axios.get('http://localhost:9090/api/centros');

            dispatch({
                type: OBTENER_CENTROS,
                payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener los centros',
                toast: true
            });
            console.log(error);
        }
    }

    const registrarCentros = async centro => {
        try {
            const resultado = await Axios.post('http://localhost:9090/api/centros', centro);
            dispatch({
                type: REGISTRAR_CENTROS,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Centro registrado correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo registrar el centro',
                toast: true
            });
            console.log(error);
        }
    }

    const obtenerCentro = async centro => {
        try {
            let centroEncontrado = null;
            if (centro !== null) {
                const resultado = await Axios.get(`http://localhost:9090/api/centros/${centro.id}`);
                centroEncontrado = resultado.data;
            } else {
                centroEncontrado = centro;
            }

            dispatch({
                type: OBTENER_CENTRO,
                payload: centroEncontrado
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener el centro',
                toast: true
            });
            console.log(error);
        }
    }

    const actualizarCentro = async centro => {

        try {
            const resultado = await Axios.put('http://localhost:9090/api/centros', centro);

            dispatch({
                type: MODIFICAR_CENTRO,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Centro modificado correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo modificar el centro',
                toast: true
            });
            console.log(error);
        }
    }

    const eliminarCentro = async id => {

        try {
            Swal.fire({
                icon: 'question',
                title: '¿Desea continuar?',
                text: 'se eliminara el centro seleccionado',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar'
            }).then(async (result) => {
                if (result.value) {
                    await Axios.delete(`http://localhost:9090/api/centros/${id}`);
                    dispatch({
                        type: ELIMINAR_CENTRO,
                        payload: id
                    })
                    Swal.fire({
                        icon: 'success',
                        title: 'Correcto',
                        text: 'Centro eliminado correctamente',
                        toast: true
                    });
                }
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo eliminar el centro',
                toast: true
            });
            console.log(error);
        }
    }

    return (
        <CentroContext.Provider
            value={{
                centrosList: state.centrosList,
                centroActual: state.centroActual,

                obtenerCentros,
                registrarCentros,
                obtenerCentro,
                actualizarCentro,
                eliminarCentro
            }}
        >
            {props.children}
        </CentroContext.Provider>
    )
}
