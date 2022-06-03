  import { call, put } from 'redux-saga/effects';
  import { ProjectService } from '../services/api/project.service';
  import * as types from '../types/ProjectInfo';
  
  export function* getProject(action: types.ProjectTypes) {
      try {
        const projectService = new ProjectService();
        // @ts-ignore
         const project = yield call(projectService.invoke, {});
        if (project.status !== 200) {
          yield put({ type: types.GET_PROJECT_INFO_FAILED, error: 'Fallo en la consulta de proyecto.' });
        } else {
          const data = project.data.data;
          yield put({
            data,
            type: types.GET_PROJECT_INFO_RECEIVED
          });
        } 
      } catch (error) {
        yield put({
          error,
          type: types.GET_PROJECT_INFO_FAILED
        });
      }
    }
  