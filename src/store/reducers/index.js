import { combineReducers } from 'redux';
import CatDetailsReducer from './catDetails';

export default history =>
  combineReducers({
    catDetails: CatDetailsReducer
  });
