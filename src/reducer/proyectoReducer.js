import { ELIMINAR_PROYECTO, MODIFICAR_PROYECTO, OBTENER_PROYECTO, OBTENER_PROYECTOS, REGISTRAR_PROYECTOS } from '../const/actionsTypes';

// eslint-disable-next-line
export default (state, action) => {


    switch (action.type) {
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectosList: action.payload
            };
        case REGISTRAR_PROYECTOS:
            return {
                ...state,
                proyectosList: [...state.proyectosList, action.payload]
            };
        case OBTENER_PROYECTO:
            return {
                ...state,
                proyectoActual: action.payload
            };
        case MODIFICAR_PROYECTO:
            return {
                ...state,
                proyectosList: state.proyectosList.map(
                    proyecto => proyecto.id === action.payload.id ? action.payload : proyecto
                )
            };
        case ELIMINAR_PROYECTO:
            return {
                ...state,
                proyectosList: state.proyectosList.filter(proyecto => proyecto.id !== action.payload)
            };
        default:
            return state;
    }
}