import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './root.reducer';
import { runAllSaga } from './root.sagas';

import { initDashboard } from './modules/uv_dashboard/uv_dashboard.actions';

const sagaMiddleware = createSagaMiddleware();

export const uvStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

runAllSaga(sagaMiddleware);

uvStore.dispatch(initDashboard());
