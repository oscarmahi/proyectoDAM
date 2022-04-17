import React, { createContext, useReducer } from 'react';
import categoriaReducer from '../reducer/categoriaReducer';
import { ELIMINAR_CATEGORIA, MODIFICAR_CATEGORIA, OBTENER_CATEGORIA, OBTENER_CATEGORIAS, REGISTRAR_CATEGORIAS } from '../const/actionsTypes';
//import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const CategoriaContext = createContext();

export const CategoriaContextProvider = props => {

    const initialState = {
        categoriasList: [],
        categoriaActual: null
    };

    const [state, dispatch] = useReducer(categoriaReducer, initialState);

    const obtenerCategorias = async () => {

        try {
            const resultado = await Axios.get('http://localhost:9090/api/categorias');

            dispatch({
                type: OBTENER_CATEGORIAS,
                payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener las categorias',
                toast: true
            });
            console.log(error);
        }
    }

    const registrarCategorias = async categoria => {
        try {
            const resultado = await Axios.post('http://localhost:9090/api/categorias', categoria);
            dispatch({
                type: REGISTRAR_CATEGORIAS,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Categoria registrada correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo registrar la categoria',
                toast: true
            });
            console.log(error);
        }
    }

    const obtenerCategoria = async categoria => {
        try {
            let categoriaEncontrado = null;
            if (categoria !== null) {
                const resultado = await Axios.get(`http://localhost:9090/api/categorias/${categoria.id}`);
                categoriaEncontrado = resultado.data;
            } else {
                categoriaEncontrado = categoria;
            }

            dispatch({
                type: OBTENER_CATEGORIA,
                payload: categoriaEncontrado
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener la categoria',
                toast: true
            });
            console.log(error);
        }
    }

    const actualizarCategoria = async categoria => {

        try {
            const resultado = await Axios.put('http://localhost:9090/api/categorias', categoria);

            dispatch({
                type: MODIFICAR_CATEGORIA,
                payload: resultado.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Categoria modificado correctamente',
                toast: true
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo modificar la categoria',
                toast: true
            });
            console.log(error);
        }
    }

    const eliminarCategoria = async id => {

        try {
            Swal.fire({
                icon: 'question',
                title: '¿Desea continuar?',
                text: 'se eliminara la categoria seleccionada',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar'
            }).then(async (result) => {
                if (result.value) {
                    await Axios.delete(`http://localhost:9090/api/categorias/${id}`);
                    dispatch({
                        type: ELIMINAR_CATEGORIA,
                        payload: id
                    })
                    Swal.fire({
                        icon: 'success',
                        title: 'Correcto',
                        text: 'Categoria eliminada correctamente',
                        toast: true
                    });
                }
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo eliminar la categoria',
                toast: true
            });
            console.log(error);
        }
    }

    return (
        <CategoriaContext.Provider
            value={{
                categoriasList: state.categoriasList,
                categoriaActual: state.categoriaActual,

                obtenerCategorias,
                registrarCategorias,
                obtenerCategoria,
                actualizarCategoria,
                eliminarCategoria
            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}
