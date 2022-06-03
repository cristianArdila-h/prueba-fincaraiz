export const POST_CONTACT_INFO = 'POST_CONTACT_INFO';
export const POST_CONTACT_INFO_RECEIVED = 'POST_CONTACT_INFO_RECEIVED';
export const POST_CONTACT_INFO_FAILED = 'POST_CONTACT_INFO_FAILED';
export const CLEAN_PROPS = 'CLEAN_PROPS';

export interface ContactTypes {
    type: string;
    data: [];
    error?: any;
}
