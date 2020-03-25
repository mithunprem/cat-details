import { combineReducers } from 'redux';
import PetDetailsReducer from './petDetails';

export default history =>
  combineReducers({
    petDetails: PetDetailsReducer
  });
