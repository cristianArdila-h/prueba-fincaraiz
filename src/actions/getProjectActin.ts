import * as types from '../types/ProjectInfo';

export const cleanProps = () => {
    return {type: types.CLEAN_PROPS};
};

export const getProject = (): any => {
    return { type: types.GET_PROJECT_INFO };
};
