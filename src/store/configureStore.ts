import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = (initialState: any) => {
    const sagaMiddleware = createSagaMiddleware();

    const getMiddleWare = () => {
        return applyMiddleware(sagaMiddleware);
    };

    const store = createStore(rootReducer, initialState, getMiddleWare());

    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
