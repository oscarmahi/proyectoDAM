import {OBTENER_CENTRO, OBTENER_CENTROS} from '../const/actionsTypes';

// eslint-disable-next-line
export default (state, action) => {

    switch (action.type) {
        case OBTENER_CENTROS:
            return {
                ...state,
                centrosList: action.payload
            };            
        case OBTENER_CENTRO:
            return {
                ...state,
                centroActual: action.payload
            };
        default:
            return state;
    }
}