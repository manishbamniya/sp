import { createStore, compose ,applyMiddleware } from 'redux';
import reducer from './reducers';
import createSagaMiddleware from '@redux-saga/core';
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancers = [ applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]

const store = createStore(
    reducer,
    compose(...enhancers)
)

sagaMiddleware.run(mySaga)



export default store