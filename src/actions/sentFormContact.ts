import * as types from '../types/ContactUs';

export const cleanProps = () => {
    return {type: types.CLEAN_PROPS};
};

export const sentContactData = (): any => {
    return { type: types.POST_CONTACT_INFO };
};
