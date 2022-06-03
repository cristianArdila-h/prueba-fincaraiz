import { combineReducers } from 'redux';
import ContactUsReducer from './contactUs.reducer';
import ProjectReducer from './project.reducer';

export default combineReducers({
    project: ProjectReducer,
    contactUs: ContactUsReducer
});