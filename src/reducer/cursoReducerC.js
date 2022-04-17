import { OBTENER_CURSO, OBTENER_CURSOS} from '../const/actionsTypes';

// eslint-disable-next-line
export default (state, action) => {


    switch (action.type) {
        case OBTENER_CURSOS:
            return {
                ...state,
                cursosList: action.payload
            };
        case OBTENER_CURSO:
            return {
                ...state,
                cursoActual: action.payload
            };
        default:
            return state;
    }
}