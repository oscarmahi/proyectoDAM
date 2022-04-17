import { ELIMINAR_CATEGORIA, MODIFICAR_CATEGORIA, OBTENER_CATEGORIA, OBTENER_CATEGORIAS, REGISTRAR_CATEGORIAS } from '../const/actionsTypes';

// eslint-disable-next-line
export default (state, action) => {


    switch (action.type) {
        case OBTENER_CATEGORIAS:
            return {
                ...state,
                categoriasList: action.payload
            };
        case REGISTRAR_CATEGORIAS:
            return {
                ...state,
                categoriasList: [...state.categoriasList, action.payload]
            };
        case OBTENER_CATEGORIA:
            return {
                ...state,
                categoriaActual: action.payload
            };
        case MODIFICAR_CATEGORIA:
            return {
                ...state,
                categoriasList: state.categoriasList.map(
                    categoria => categoria.id === action.payload.id ? action.payload : categoria
                )
            };
        case ELIMINAR_CATEGORIA:
            return {
                ...state,
                categoriasList: state.categoriasList.filter(categoria => categoria.id !== action.payload)
            };
        default:
            return state;
    }
}

