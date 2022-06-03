import { all, takeLatest } from 'redux-saga/effects';

/* ----------------- Types ----------------- */
 import * as typeProject from '../types/ProjectInfo';
 import * as typeContactUs from '../types/ContactUs';

/* ----------------- Sagas ----------------- */
import { getProject } from './project.saga';
import { postContactUs } from './contactUs.saga';

function* projectActionWatcher() {
  yield takeLatest(typeProject.GET_PROJECT_INFO, getProject);
}
function* contactUsActionWatcher() {
  yield takeLatest(typeContactUs.POST_CONTACT_INFO, postContactUs);
}

export default function* root() {
  yield all([projectActionWatcher(), contactUsActionWatcher()]);
}
