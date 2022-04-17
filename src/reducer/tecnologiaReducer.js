import { ELIMINAR_TECNOLOGIA, MODIFICAR_TECNOLOGIA, OBTENER_TECNOLOGIA, OBTENER_TECNOLOGIAS, REGISTRAR_TECNOLOGIAS } from '../const/actionsTypes';

// eslint-disable-next-line
export default (state, action) => {


    switch (action.type) {
        case OBTENER_TECNOLOGIAS:
            return {
                ...state,
                tecnologiasList: action.payload
            };
        case REGISTRAR_TECNOLOGIAS:
            return {
                ...state,
                tecnologiasList: [...state.tecnologiasList, action.payload]
            };
        case OBTENER_TECNOLOGIA:
            return {
                ...state,
                tecnologiaActual: action.payload
            };
        case MODIFICAR_TECNOLOGIA:
            return {
                ...state,
                tecnologiasList: state.tecnologiasList.map(
                    tecnologia => tecnologia.id === action.payload.id ? action.payload : tecnologia
                )
            };
        case ELIMINAR_TECNOLOGIA:
            return {
                ...state,
                tecnologiasList: state.tecnologiasList.filter(tecnologia => tecnologia.id !== action.payload)
            };
        default:
            return state;
    }
}
