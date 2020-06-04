import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import reducers from './reducers'
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware()

const middleware = [];

middleware.push(sagaMiddleware);

if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger)
}

const store = createStore(reducers, applyMiddleware(
    sagaMiddleware,
    logger,
))

sagaMiddleware.run(rootSaga);

export default store;
