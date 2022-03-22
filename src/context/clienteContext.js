import React, { createContext, useReducer } from 'react';
import clienteReducer from '../reducer/clienteReducer';
import { ELIMINAR_CLIENTE, MODIFICAR_CLIENTE, OBTENER_CLIENTE, OBTENER_CLIENTES, REGISTRAR_CLIENTES } from '../const/actionsTypes';
//import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const ClienteContext = createContext();

export const ClienteContextProvider = props => {

    const initialState = {
        clientesList: [],
        clienteActual: null
    };

    const [state, dispatch] = useReducer(clienteReducer, initialState);


    const obtenerClientes = async () => {

        try {
            //const resultado = await Axios.get('http://localhost:9090/api/clientes');
            const resultado = await Axios.get('/clientes');

            dispatch({
                type: OBTENER_CLIENTES,
                payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener los clientes',
                toast: true
            });
            console.log(error);
        }
    }

    const registrarClientes = async cliente => {
        try {
            //hago una copia de cliente y le añado un id aleatorio. Esto es para obtenet un id aleatorio
            // let clienteNuevo = {
            //     ...cliente,
            //     idCliente: uuidv4()
            // }
            const resultado = await Axios.post('/clientes', cliente);
            dispatch({
                type: REGISTRAR_CLIENTES,
                //payload: clienteNuevo
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Cliente registrado correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo registrar el clientes',
                toast: true
            });
            console.log(error);
        }
    }

    const obtenerCliente = async cliente => {
        //console.log(cliente);
        try {
            let clienteEncontrado = null;
            if (cliente !== null) {
                const resultado = await Axios.get(`/clientes/${cliente.idCliente}`);
                clienteEncontrado = resultado.data;
            } else {
                clienteEncontrado = cliente;
            }

            dispatch({
                type: OBTENER_CLIENTE,
                payload: clienteEncontrado
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener el cliente',
                toast: true
            });
            console.log(error);
        }
    }

    const actualizarCliente = async cliente => {

        try {
            //console.log(cliente);
            const resultado = await Axios.put('/clientes', cliente);

            dispatch({
                type: MODIFICAR_CLIENTE,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Cliente modificado correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo modificar el cliente',
                toast: true
            });
            console.log(error);
        }
    }

    const eliminarCliente = async idCliente => {

        try {
            Swal.fire({
                icon: 'question',
                title: '¿Desea continuar?',
                text: 'se eliminara el cliente seleccionado',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar'
            }).then(async (result) => {
                if (result.value) {
                    await Axios.delete(`/clientes/${idCliente}`);
                    dispatch({
                        type: ELIMINAR_CLIENTE,
                        payload: idCliente
                    })
                    Swal.fire({
                        icon: 'success',
                        title: 'Correcto',
                        text: 'Cliente eliminado correctamente',
                        toast: true
                    });
                }
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo eliminar el clientes',
                toast: true
            });
            console.log(error);
        }
    }

    return (
        <ClienteContext.Provider
            value={{
                clientesList: state.clientesList,
                clienteActual: state.clienteActual,

                obtenerClientes,
                registrarClientes,
                obtenerCliente,
                actualizarCliente,
                eliminarCliente
            }}
        >
            {props.children}
        </ClienteContext.Provider>
    )

}