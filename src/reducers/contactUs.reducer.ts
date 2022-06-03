import * as types from '../types/ContactUs';

const ContactUsReducer = (
    state = { isLoading: false,  result: [] },
    action: types.ContactTypes,
) => {
    switch (action.type) {
        case types.POST_CONTACT_INFO:
            return { ...state, isLoading: true };
        case types.POST_CONTACT_INFO_RECEIVED:
            return { ...state, isLoading: false, result: action.data };
        case types.POST_CONTACT_INFO_FAILED:
            return { ...state, isLoading: false, error: action.error, result: 'Servicio no disponible.' };
        default:
            return state;
    }
};

export default ContactUsReducer;