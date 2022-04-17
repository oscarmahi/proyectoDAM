import React, { createContext, useReducer } from 'react';
import tecnologiaReducer from '../reducer/tecnologiaReducer';
import { ELIMINAR_TECNOLOGIA, MODIFICAR_TECNOLOGIA, OBTENER_TECNOLOGIA, OBTENER_TECNOLOGIAS, REGISTRAR_TECNOLOGIAS } from '../const/actionsTypes';
//import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const TecnologiaContext = createContext();

export const TecnologiaContextProvider = props => {

    const initialState = {
        tecnologiasList: [],
        tecnologiaActual: null
    };

    const [state, dispatch] = useReducer(tecnologiaReducer, initialState);

    const obtenerTecnologias = async () => {

        try {
            const resultado = await Axios.get('http://localhost:9090/api/tecnologias');

            dispatch({
                type: OBTENER_TECNOLOGIAS,
                payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener las tecnologias',
                toast: true
            });
            console.log(error);
        }
    }

    const registrarTecnologias = async tecnologia => {
        try {
            const resultado = await Axios.post('http://localhost:9090/api/tecnologias', tecnologia);
            dispatch({
                type: REGISTRAR_TECNOLOGIAS,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Tecnologia registrada correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo registrar la tecnologia',
                toast: true
            });
            console.log(error);
        }
    }

    const obtenerTecnologia = async tecnologia => {
        try {
            let tecnologiaEncontrado = null;
            if (tecnologia !== null) {
                const resultado = await Axios.get(`http://localhost:9090/api/tecnologias/${tecnologia.id}`);
                tecnologiaEncontrado = resultado.data;
            } else {
                tecnologiaEncontrado = tecnologia;
            }

            dispatch({
                type: OBTENER_TECNOLOGIA,
                payload: tecnologiaEncontrado
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener la tecnologia',
                toast: true
            });
            console.log(error);
        }
    }

    const actualizarTecnologia = async tecnologia => {

        try {
            const resultado = await Axios.put('http://localhost:9090/api/tecnologias', tecnologia);

            dispatch({
                type: MODIFICAR_TECNOLOGIA,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Tecnologia modificada correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo modificar la tecnologia',
                toast: true
            });
            console.log(error);
        }
    }

    const eliminarTecnologia = async id => {

        try {
            Swal.fire({
                icon: 'question',
                title: '¿Desea continuar?',
                text: 'se eliminara la tecnologia seleccionada',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar'
            }).then(async (result) => {
                if (result.value) {
                    await Axios.delete(`http://localhost:9090/api/tecnologias/${id}`);
                    dispatch({
                        type: ELIMINAR_TECNOLOGIA,
                        payload: id
                    })
                    Swal.fire({
                        icon: 'success',
                        title: 'Correcto',
                        text: 'Tecnologia eliminada correctamente',
                        toast: true
                    });
                }
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo eliminar la tecnologia',
                toast: true
            });
            console.log(error);
        }
    }

    return (
        <TecnologiaContext.Provider
            value={{
                tecnologiasList: state.tecnologiasList,
                tecnologiaActual: state.tecnologiaActual,

                obtenerTecnologias,
                registrarTecnologias,
                obtenerTecnologia,
                actualizarTecnologia,
                eliminarTecnologia
            }}
        >
            {props.children}
        </TecnologiaContext.Provider>
    )
}

