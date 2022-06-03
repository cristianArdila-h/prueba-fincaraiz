export const GET_PROJECT_INFO = 'GET_PROJECT_INFO';
export const GET_PROJECT_INFO_RECEIVED = 'GET_PROJECT_INFO_RECEIVED';
export const GET_PROJECT_INFO_FAILED = 'GET_PROJECT_INFO_FAILED';
export const CLEAN_PROPS = 'CLEAN_PROPS';

export interface ProjectTypes {
    type: string;
    data: [];
    error?: any;
}
