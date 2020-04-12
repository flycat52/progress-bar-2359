import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import progressReducer from './progressReducer';

const rootReducer = combineReducers({
  api: apiReducer,
  // bars: progressReducer,
});

export default rootReducer;
