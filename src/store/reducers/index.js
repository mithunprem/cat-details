import { combineReducers } from 'redux';
import PetsReducer from './pets';
import ErrorReducer from './error';

export default combineReducers({
  pets: PetsReducer,
  error: ErrorReducer
});
