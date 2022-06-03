import { call, put } from 'redux-saga/effects';
import { ContactUsService } from '../services/api/contactUs.service';
import * as types from '../types/ContactUs';

export function* postContactUs(action: types.ContactTypes) {
    try {
      const projectService = new ContactUsService();
      // @ts-ignore
       const project = yield call( projectService.invoke , {});
       if (project.status !== 201) {
        yield put({ type: types.POST_CONTACT_INFO_FAILED, error: 'Fallo el envio de informacion.' });
      } else {
        const data = project.data;
        yield put({
          data,
          type: types.POST_CONTACT_INFO_RECEIVED
        });
      } 
    } catch (error) {
      yield put({
        error,
        type: types.POST_CONTACT_INFO_FAILED
      });
    }
  }
