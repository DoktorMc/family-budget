import { applyMiddleware, createStore } from 'redux';
import rootReducers from './reducers';
import thunk from 'thunk';
import { Logger } from 'logger';

const store = createStore(
  rootReducers,
  applyMiddleware(thunk, Logger)
)

export default store
