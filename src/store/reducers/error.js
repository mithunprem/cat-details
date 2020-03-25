import { ERROR } from '../actions/types';

const initialState = {
  errorMessage: ''
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR.THROW:
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    case ERROR.RESET:
      return {
        ...state,
        errorMessage: ''
      };
    default:
      return state;
  }
};

export default ErrorReducer;
