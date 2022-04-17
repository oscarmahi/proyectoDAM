import { OBTENER_PROYECTO, OBTENER_PROYECTOS } from '../const/actionsTypes';

// eslint-disable-next-line
export default (state, action) => {


    switch (action.type) {
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectosList: action.payload
            };
        case OBTENER_PROYECTO:
            return {
                ...state,
                proyectoActual: action.payload
            };
        default:
            return state;
    }
}