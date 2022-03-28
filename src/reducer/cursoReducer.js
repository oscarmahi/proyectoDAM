import { ELIMINAR_CURSO, MODIFICAR_CURSO, OBTENER_CURSO, OBTENER_CURSOS, REGISTRAR_CURSOS } from '../const/actionsTypes';

// eslint-disable-next-line
export default (state, action) => {


    switch (action.type) {
        case OBTENER_CURSOS:
            return {
                ...state,
                cursosList: action.payload
            };
        case REGISTRAR_CURSOS:
            return {
                ...state,
                cursosList: [...state.cursosList, action.payload]
            };
        case OBTENER_CURSO:
            return {
                ...state,
                cursoActual: action.payload
            };
        case MODIFICAR_CURSO:
            return {
                ...state,
                cursosList: state.cursosList.map(
                    curso => curso.id === action.payload.id ? action.payload : curso
                )
            };
        case ELIMINAR_CURSO:
            return {
                ...state,
                cursosList: state.cursosList.filter(curso => curso.id !== action.payload)
            };
        default:
            return state;
    }
}