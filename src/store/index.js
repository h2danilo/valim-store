// serve para dar um merge em varias configuracoes. irá unir a config console.tron.createEnhancer() com config de applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
//
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// Linha abaixo sem o saga
/* const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null; */

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// linha abaixo com o saga
const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
