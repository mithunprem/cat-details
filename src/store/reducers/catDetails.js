import { CAT_DETAILS } from '../actions/types';

const initialState = {
  catDetails: [],
  isLoadingCatDetails: false
};

export default function CatDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case CAT_DETAILS.SET_LOADING:
      return {
        ...state,
        isLoadingCatDetails: action.isLoading
      };
    case CAT_DETAILS.FETCH_SUCCESS:
      return {
        ...state,
        catDetails: action.catDetails
      };
    default:
      return state;
  }
}
