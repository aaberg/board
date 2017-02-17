import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [thunk];

const persistedState = {}; // load persisted state here.

if (ENABLE_REDUX_LOGGING) { // eslint-disable-line no-undef
  const createLogger = require('redux-logger'); // eslint-disable-line global-require
  const logger = createLogger();
  middlewares.push(logger);
}

export default () => {
  const store = createStore(rootReducer, persistedState, applyMiddleware(...middlewares));
  store.subscribe(() => {
    // save state here.
  });

  return store;
};
