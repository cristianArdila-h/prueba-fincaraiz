
import * as types from '../types/ProjectInfo';

const ProjectReducer = (
    state = { isLoading: true,  result: [] },
    action: types.ProjectTypes,
) => {
    switch (action.type) {
        case types.GET_PROJECT_INFO:
            return { ...state, isLoading: true };
        case types.GET_PROJECT_INFO_RECEIVED:
            return { ...state, isLoading: false, result: action.data };
        case types.GET_PROJECT_INFO_FAILED:
            return { ...state, isLoading: false, error: action.error, result: 'Servicio no disponible.' };
        default:
            return state;
    }
};

export default ProjectReducer;