import { ELIMINAR_CENTRO, MODIFICAR_CENTRO, OBTENER_CENTRO, OBTENER_CENTROS, REGISTRAR_CENTROS } from '../const/actionsTypes';

// eslint-disable-next-line
export default (state, action) => {


    switch (action.type) {
        case OBTENER_CENTROS:
            return {
                ...state,
                centrosList: action.payload
            };
        case REGISTRAR_CENTROS:
            return {
                ...state,
                centrosList: [...state.centrosList, action.payload]
            };
        case OBTENER_CENTRO:
            return {
                ...state,
                centroActual: action.payload
            };
        case MODIFICAR_CENTRO:
            return {
                ...state,
                centrosList: state.centrosList.map(
                    centro => centro.id === action.payload.id ? action.payload : centro
                )
            };
        case ELIMINAR_CENTRO:
            return {
                ...state,
                centrosList: state.centrosList.filter(centro => centro.id !== action.payload)
            };
        default:
            return state;
    }
}