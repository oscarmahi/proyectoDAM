import React, { createContext, useReducer } from 'react';
import centroReducerC from '../reducer/centroReducerC';
import { OBTENER_CENTRO, OBTENER_CENTROS} from '../const/actionsTypes';
//import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const CentroContextC = createContext();

export const CentroContextCProvider = props => {

    const initialState = {
        centrosList: [],
        centroActual: null
    };

    const [state, dispatch] = useReducer(centroReducerC, initialState);

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

    return (
        <CentroContextC.Provider
            value={{
                centrosList: state.centrosList,
                centroActual: state.centroActual,
                obtenerCentros,
                obtenerCentro,
            }}
        >
            {props.children}
        </CentroContextC.Provider>
    )
}
