import { PET_DETAILS } from '../actions/types';

const initialState = {
  petDetails: [],
  catDetails: [],
  isLoadingPetDetails: false
};

export default function PetDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case PET_DETAILS.SET_LOADING:
      return {
        ...state,
        isLoadingPetDetails: action.isLoading
      };
    case PET_DETAILS.FETCH_SUCCESS:
      return {
        ...state,
        petDetails: action.petDetails
      };
    default:
      return state;
  }
}
