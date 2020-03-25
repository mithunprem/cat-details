import { combineReducers } from 'redux';
import PetsReducer from './pets';

export default combineReducers({
  pets: PetsReducer
});
